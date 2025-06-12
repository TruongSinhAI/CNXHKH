import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Play, CheckCircle, FileText, List, Quote } from "lucide-react";
import {
  loadUserProgress,
  markChapterCompleted,
  isChapterAccessible,
  saveUserProgress,
} from "@/lib/progress-storage";
import Header from "@/components/header";
// Import kiểu Chapter đã được cập nhật từ file storage
import type { Chapter } from "@shared/schema";

// Component để render một khối nội dung
const ContentBlockRenderer = ({ block }: { block: Chapter['content'][0] }) => {
  switch (block.type) {
    case 'heading':
      if (block.level === 2) {
        return <h2 className="text-2xl font-bold text-primary mt-8 mb-4 pb-2 border-b border-primary/20">{block.text}</h2>;
      }
      if (block.level === 3) {
        return <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">{block.text}</h3>;
      }
      return <h4 className="text-lg font-semibold text-muted-foreground mt-4 mb-2">{block.text}</h4>;
    
    case 'paragraph':
      return <p className="text-text-primary leading-relaxed my-4">{block.text}</p>;
      
    case 'list':
      return (
        <ul className="space-y-3 my-5 pl-5">
          {block.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-3 mt-1">
                <FileText size={16} />
              </span>
              <span className="flex-1 text-text-secondary">{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'blockquote':
      return (
        <blockquote className="my-6 pl-4 border-l-4 border-accent bg-accent/10 rounded-r-md">
          <p className="p-4 text-text-primary font-medium italic">
            <Quote className="inline-block h-4 w-4 mr-2 -mt-1" />
            {block.text}
          </p>
        </blockquote>
      );
      
    default:
      return null;
  }
};


export default function Chapter() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [userProgress, setUserProgress] = useState(loadUserProgress());

  const { data: chapter, isLoading } = useQuery<Chapter>({
    queryKey: [`/api/chapters/${id}`],
  });

  const chapterId = parseInt(id || "1");
  const canAccess = isChapterAccessible(chapterId, userProgress);
  const isCompleted = userProgress.completedChapters.includes(chapterId);

  useEffect(() => {
    // Cập nhật lại tiến trình khi component được mount hoặc khi id thay đổi
    setUserProgress(loadUserProgress());
  }, [id]);

  const handleCompleteChapter = () => {
    const newProgress = markChapterCompleted(chapterId);
    setUserProgress(newProgress);
    // Lưu tiến trình vào localStorage
    saveUserProgress(newProgress);
  };

  // ... (Phần code cho loading, not found, not accessible giữ nguyên như cũ)
  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-soft">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Đang tải...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="min-h-screen bg-bg-soft">
        <Header userProgress={userProgress} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">Chương không tồn tại</p>
              <Button onClick={() => setLocation("/")} className="mt-4">
                Quay về trang chủ
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!canAccess) {
    return (
      <div className="min-h-screen bg-bg-soft">
        <Header userProgress={userProgress} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="text-xl font-semibold text-text-primary mb-4">Chương chưa được mở khóa</h2>
              <p className="text-muted-foreground mb-6">
                Bạn cần hoàn thành các chương trước để truy cập chương này.
              </p>
              <Button onClick={() => setLocation("/")} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Quay lại trang chủ
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-soft">
      <Header userProgress={userProgress} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => setLocation("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Quay lại</span>
          </Button>

          {isCompleted && (
            <div className="flex items-center text-success gap-1">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Đã hoàn thành</span>
            </div>
          )}
        </div>

        <Card className="mb-8 overflow-hidden border-none shadow-lg">
          <div className="bg-gradient-to-br from-primary to-accent/80 text-white p-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-white/80">Chương {chapter.order}</span>
            <h1 className="text-4xl font-extrabold mt-2 mb-4">{chapter.title}</h1>
            <p className="text-white/90 max-w-2xl">{chapter.description}</p>
            <div className="mt-4 bg-white/20 rounded-full px-4 py-1 inline-flex items-center space-x-2 backdrop-blur-sm">
                <Clock className="h-5 w-5 text-white" />
                <span className="text-white font-medium">{chapter.duration} phút</span>
            </div>
          </div>
          <CardContent className="p-6 md:p-10 bg-white">
            <div className="prose max-w-none prose-lg prose-headings:text-primary prose-strong:text-text-primary">
              {chapter.content.map((block, index) => (
                <ContentBlockRenderer key={index} block={block} />
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">Sẵn sàng cho thử thách?</h3>
                  <p className="text-sm text-muted-foreground">Làm bài kiểm tra để củng cố kiến thức hoặc đánh dấu đã hoàn thành.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <Button
                    onClick={() => setLocation(`/quiz/${chapter.id}`)}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
                    size="lg"
                  >
                    <Play className="h-4 w-4" />
                    <span>Làm Bài Kiểm Tra</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      handleCompleteChapter();
                      setLocation("/");
                    }}
                    className="w-full sm:w-auto"
                    size="lg"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Đánh Dấu Hoàn Thành</span>
                  </Button>
                </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}