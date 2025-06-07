import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Play, CheckCircle } from "lucide-react";
import { loadUserProgress, markChapterCompleted, isChapterAccessible } from "@/lib/progress-storage";
import Header from "@/components/header";
import type { Chapter } from "@shared/schema";

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
    setUserProgress(loadUserProgress());
  }, []);

  const handleCompleteChapter = () => {
    const newProgress = markChapterCompleted(chapterId);
    setUserProgress(newProgress);
  };

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
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">
                  Chương {chapter.order}: {chapter.title}
                </CardTitle>
                <p className="text-muted-foreground">{chapter.description}</p>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{chapter.duration} phút</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none vietnamese-text">
              <div className="whitespace-pre-wrap text-text-primary leading-relaxed">
                {chapter.content}
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-between">
              <Button
                onClick={() => setLocation(`/quiz/${chapter.id}`)}
                className="flex items-center space-x-2"
              >
                <Play className="h-4 w-4" />
                <span>Bắt Đầu Bài Kiểm Tra</span>
              </Button>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" onClick={() => setLocation("/")}>
                  Hoàn Thành
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
