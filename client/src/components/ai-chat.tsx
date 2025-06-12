import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, Send } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { apiRequest } from "@/lib/queryClient";

import "./ai-chat.css";

interface ChatMessage {
  id: string;
  message: string;
  response?: string;
  timestamp: number;
  isUser: boolean;
}

export default function AiChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      message: "Xin chào! Cô  là trợ lý AI chuyên về môn Chủ nghĩa xã hội khoa học. Cô có thể giúp bạn hiểu các khái niệm lý luận, giải thích nội dung bài học và hỗ trợ ôn tập kiểm tra.",
      timestamp: Date.now(),
      isUser: false,
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(`session-${Date.now()}`);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessageMutation = useMutation({
    mutationFn: async (message: string) => {
      // Create AI message ID trước khi bắt đầu
      const aiMessageId = `ai-${Date.now()}`;
      
      // Thêm user message và placeholder AI message cùng lúc
      setMessages(prev => {
        const userMessage: ChatMessage = {
          id: `user-${Date.now()}`,
          message,
          timestamp: Date.now(),
          isUser: true,
        };
        
        const aiMessage: ChatMessage = {
          id: aiMessageId,
          message: "",
          timestamp: Date.now(),
          isUser: false,
        };
        
        return [...prev, userMessage, aiMessage];
      });

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
            sessionId: sessionId.current,
            messages: [
              ...messages
                .filter(m => m.id !== "welcome")
                .map(m => ({
                  role: m.isUser ? "user" : "assistant",
                  content: m.message
                })),
              { role: "user", content: message }
            ]
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error("No reader available");

        let currentResponse = "";
        let errorReceived = false;
        let doneReceived = false;
        const decoder = new TextDecoder();

        while (!doneReceived && !errorReceived) {
          const { value, done } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(5);
              if (data.trim() === '[DONE]') {
                console.log("Received [DONE] at", Date.now());
                doneReceived = true;
                break;
              }

              try {
                const parsed = JSON.parse(data);
                if (parsed.error) {
                  errorReceived = true;
                  // Cập nhật message hiện tại với lỗi thay vì tạo message mới
                  setMessages(prev => 
                    prev.map(msg =>
                      msg.id === aiMessageId
                        ? { ...msg, message: parsed.error }
                        : msg
                    )
                  );
                  break;
                }
                if (parsed.text) {
                  currentResponse += parsed.text;
                  // Cập nhật message với ID cụ thể
                  setMessages(prev => 
                    prev.map(msg =>
                      msg.id === aiMessageId
                        ? { ...msg, message: currentResponse }
                        : msg
                    )
                  );
                }
              } catch (e) {
                console.error('Error parsing SSE message:', e);
              }
            }
          }
        }
       
        console.log("Final UI update at", Date.now(), currentResponse);
        return currentResponse;
        
      } catch (error) {
        // Cập nhật message hiện tại với lỗi
        setMessages(prev => 
          prev.map(msg =>
            msg.id === aiMessageId
              ? { ...msg, message: "Xin lỗi, cô không thể trả lời câu hỏi này lúc này. Vui lòng thử lại sau." }
              : msg
          )
        );
        throw error;
      }
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      // onError sẽ không thêm message mới nữa vì đã xử lý trong try/catch
    },
  });

  const handleSendMessage = () => {
    if (!inputValue.trim() || sendMessageMutation.isPending) return;

    sendMessageMutation.mutate(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full h-full">
      <Card className="w-full h-[600px] shadow-xl">
        <CardHeader className="p-4 bg-background border-b">
          <div className="flex items-center space-x-2">
            <img
                        src="/robot.png"
                        alt="AI"
                        className="h-5 w-5 object-contain"
                        style={{ display: "block" }}
                      />
            <h6 className="font-semibold">Trợ Lý AI</h6>
          </div>
        </CardHeader>

        <CardContent className="p-0 flex flex-col h-[calc(600px-4rem)]">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-2 ${
                    message.isUser ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center overflow-hidden ${
                    message.isUser ? "bg-primary" : "bg-primary/10"
                  }`}>
                    {message.isUser ? (
                      <User className="text-primary-foreground h-3 w-3" />
                    ) : (
                      <img
                        src="/robot.png"
                        alt="AI"
                        className="h-5 w-5 object-contain"
                        style={{ display: "block" }}
                      />
                    )}
                  </div>
                  <div className={`flex-1 ${message.isUser ? "text-right" : ""}`}>
                    <div className={`text-sm inline-block max-w-2xl vietnamese-text ${
                      message.isUser
                        ? "chat-bubble-user"
                        : "chat-bubble-ai markdown-content"
                    }`}>
                      {message.isUser ? (
                        message.message
                      ) : (
                        <>
                          {message.message ? (
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                code(props) {
                                  const { children, className, ...rest } = props;
                                  const isInline = !className;
                                  return (
                                    <code className={`${isInline ? 'bg-gray-100 rounded px-1' : 'block bg-gray-100 p-2 rounded'} ${className || ''}`} {...rest}>
                                      {children}
                                    </code>
                                  );
                                }
                              }}
                            >
                              {message.message.replace('[DONE]', '')}
                            </ReactMarkdown>
                          ) : (
                            // Hiển thị loading dots khi message rỗng
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {new Date(message.timestamp).toLocaleTimeString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border">
            <div className="flex items-center space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nhập câu hỏi của bạn..."
                className="flex-1"
                disabled={sendMessageMutation.isPending}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || sendMessageMutation.isPending}
                size="sm"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Nhấn Enter để gửi tin nhắn
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}