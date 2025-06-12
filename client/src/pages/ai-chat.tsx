import AiChat from "@/components/ai-chat";
import Header from "@/components/header";

export default function AiChatPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Trợ Lý AI</h1>
          <p className="text-muted-foreground mb-8">
            Hãy đặt câu hỏi về môn Chủ nghĩa xã hội khoa học. Tôi sẽ giúp bạn hiểu rõ hơn về các khái niệm và nội dung bài học.
          </p>
          <div className="relative min-h-[600px]">
            <AiChat />
          </div>
        </div>
      </main>
    </div>
  );
}