import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Header from "@/components/header";
import QuizInterface from "@/components/quiz-interface";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Quiz } from "@shared/schema";

export default function Quiz() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  
  const { data: quiz, isLoading } = useQuery<Quiz>({
    queryKey: [`/api/chapters/${id}/quiz`],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-soft">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Đang tải bài kiểm tra...</p>
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
              <p className="text-muted-foreground">Bài kiểm tra không tồn tại</p>
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
    <div className="min-h-screen bg-bg-soft">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => setLocation(`/chapter/${id}`)}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại chương
          </Button>
        </div>

        <QuizInterface quiz={quiz} />
      </main>
    </div>
  );
}
