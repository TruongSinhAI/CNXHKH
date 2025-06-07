import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import ChapterCard from "@/components/chapter-card";
import AiChat from "@/components/ai-chat";
import MobileNav from "@/components/mobile-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle, Trophy, Clock } from "lucide-react";
import type { Chapter, UserProgress } from "@shared/schema";

export default function Home() {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedChapters: [1, 2],
    currentChapter: 3,
    quizScores: { 1: 100, 2: 95, 3: 85 },
    totalCorrectAnswers: 28,
  });

  const [filter, setFilter] = useState<"all" | "incomplete">("all");

  const { data: chapters, isLoading } = useQuery<Chapter[]>({
    queryKey: ["/api/chapters"],
  });

  const completedChapters = userProgress.completedChapters.length;
  const averageScore = userProgress.quizScores
    ? Math.round(
        Object.values(userProgress.quizScores).reduce((sum, score) => sum + score, 0) /
        Object.values(userProgress.quizScores).length
      )
    : 0;

  const filteredChapters = chapters?.filter(chapter => {
    if (filter === "incomplete") {
      return !userProgress.completedChapters.includes(chapter.id);
    }
    return true;
  });

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

  return (
    <div className="min-h-screen bg-bg-soft">
      <Header userProgress={userProgress} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 md:pb-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Chào Mừng Đến Với Khóa Học Tương Tác
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Khám phá 7 chương học đầy thú vị với hệ thống trắc nghiệm và trợ lý AI thông minh
            </p>
            
            {/* Progress Overview */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <BookOpen className="text-primary text-xl h-6 w-6" />
                    </div>
                    <p className="text-2xl font-bold text-text-primary">{completedChapters}</p>
                    <p className="text-sm text-muted-foreground">Chương Hoàn Thành</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="text-secondary text-xl h-6 w-6" />
                    </div>
                    <p className="text-2xl font-bold text-text-primary">{userProgress.totalCorrectAnswers}</p>
                    <p className="text-sm text-muted-foreground">Câu Trả Lời Đúng</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Trophy className="text-success text-xl h-6 w-6" />
                    </div>
                    <p className="text-2xl font-bold text-text-primary">{averageScore}%</p>
                    <p className="text-sm text-muted-foreground">Điểm Trung Bình</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Explorer */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-text-primary">Khám Phá Nội Dung</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Xem:</span>
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
              >
                Tất Cả
              </Button>
              <Button
                variant={filter === "incomplete" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("incomplete")}
              >
                Chưa Hoàn Thành
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredChapters?.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                userProgress={userProgress}
              />
            ))}
          </div>
        </section>
      </main>

      <AiChat />
      <MobileNav />
    </div>
  );
}
