import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface ChatMessage {
  id: string;
  message: string;
  response?: string;
  timestamp: number;
  isUser: boolean;
}

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      message: "Xin chào! Tôi là trợ lý AI của bạn. Tôi có thể giúp bạn giải thích các khái niệm trong khóa học và trả lời các câu hỏi.",
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
      const response = await apiRequest("POST", "/api/chat", {
        message,
        sessionId: sessionId.current,
      });
      return response.json();
    },
    onSuccess: (data, message) => {
      setMessages(prev => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          message: data.response,
          timestamp: Date.now(),
          isUser: false,
        }
      ]);
    },
    onError: () => {
      setMessages(prev => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          message: "Xin lỗi, tôi không thể trả lời câu hỏi này lúc này. Vui lòng thử lại sau.",
          timestamp: Date.now(),
          isUser: false,
        }
      ]);
    },
  });

  const handleSendMessage = () => {
    if (!inputValue.trim() || sendMessageMutation.isPending) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      message: inputValue,
      timestamp: Date.now(),
      isUser: true,
    };

    setMessages(prev => [...prev, userMessage]);
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
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Toggle Button */}
      <Button
        className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Interface */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 h-96 shadow-xl">
          {/* Chat Header */}
          <CardHeader className="p-4 bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <h6 className="font-semibold">Trợ Lý AI</h6>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 h-auto p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/80 mt-1">
              Hỏi tôi bất kỳ điều gì về khóa học!
            </p>
          </CardHeader>

          {/* Chat Messages */}
          <CardContent className="p-0 flex flex-col h-80">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-2 ${
                      message.isUser ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      message.isUser ? "bg-primary" : "bg-primary/10"
                    }`}>
                      {message.isUser ? (
                        <User className="text-primary-foreground h-3 w-3" />
                      ) : (
                        <Bot className="text-primary h-3 w-3" />
                      )}
                    </div>
                    <div className={`flex-1 ${message.isUser ? "text-right" : ""}`}>
                      <div className={`text-sm inline-block max-w-xs vietnamese-text ${
                        message.isUser 
                          ? "chat-bubble-user" 
                          : "chat-bubble-ai"
                      }`}>
                        {message.message}
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
                {sendMessageMutation.isPending && (
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Bot className="text-primary h-3 w-3" />
                    </div>
                    <div className="chat-bubble-ai">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Chat Input */}
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
      )}
    </div>
  );
}
