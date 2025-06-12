import { useQuery } from "@tanstack/react-query";
import { useLocation, Link } from "wouter";
import Header from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Quiz } from "@shared/schema";
import ComprehensiveQuizInterface from "@/components/comprehensive-quiz-interface";
import { ArrowLeft } from "lucide-react";

export default function ComprehensiveQuiz() {
  const [, setLocation] = useLocation();
  
// ✨ CẢI TIẾN: queryKey nên là một mảng để quản lý cache tốt hơn
  const { data: quiz, isLoading, error } = useQuery<Quiz>({
    queryKey: ["comprehensiveQuiz"], // API endpoint sẽ là /api/comprehensive-quiz
    queryFn: () => fetch("/api/comprehensive-quiz").then(res => res.json())
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-soft">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Đang tải bài kiểm tra tổng hợp...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen bg-bg-soft">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">Không thể tải bài kiểm tra tổng hợp</p>
              <Button onClick={() => setLocation("/")} className="mt-4">
                Quay về trang chủ
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="mb-4 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4"/>
                Quay về trang chủ
            </Button>
          </Link>
        </div>

        <ComprehensiveQuizInterface quiz={quiz} />
      </main>
    </div>
  );
}