import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import ChapterCard from "@/components/chapter-card";
import MobileNav from "@/components/mobile-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, RotateCcw, Star, Award, Target, TrendingUp, Sparkles, Users } from "lucide-react";
import { loadUserProgress, resetProgress } from "@/lib/progress-storage";
import type { Chapter, UserProgress } from "@shared/schema";

export default function Home() {
  const [userProgress, setUserProgress] = useState<UserProgress>(loadUserProgress());

  useEffect(() => {
    setUserProgress(loadUserProgress());
  }, []);

  const [filter, setFilter] = useState<"all" | "incomplete">("all");

  const { data: chapters, isLoading } = useQuery<Chapter[]>({
    queryKey: ["/api/chapters"],
  });

  const completedChapters = userProgress.completedChapters.length;
  const totalChapters = chapters?.length || 0;
  const progressPercentage = totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0;

  const filteredChapters = chapters?.filter(chapter => {
    if (filter === "incomplete") {
      return !userProgress.completedChapters.includes(chapter.id);
    }
    return true;
  });

  const handleResetProgress = () => {
    const newProgress = resetProgress();
    setUserProgress(newProgress);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-200 border-t-emerald-600 mx-auto"></div>
              <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-emerald-600 animate-pulse" />
            </div>
            <p className="mt-6 text-lg text-slate-600 font-medium">Đang tải nội dung học tập...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 font-sans overflow-x-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <Header userProgress={userProgress} />

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-0 relative z-10">
        <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8">
          {/* Main title with gradient */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight mb-4 animate-fade-in">
              Chủ Nghĩa Xã Hội Khoa học
              <br />
              <span className="text-4xl md:text-6xl">Khoa Học</span>
            </h1>
            <div className="absolute -top-2 -right-2 animate-bounce">
              <Star className="h-8 w-8 text-yellow-400 fill-current" />
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Khám phá hành trình lý thuyết về sự phát triển xã hội loài người và con đường tiến lên chủ nghĩa xã hội qua các chương học 
            <span className="text-emerald-600 font-semibold"> sinh động, trực quan và dễ tiếp cận.</span>
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Bắt đầu học ngay
                <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full flex flex-col items-center justify-center mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          {/* Progress Card */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-white/50">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center rounded-3xl group-hover:rotate-12 transition-transform duration-500">
                  <BookOpen className="text-emerald-600 h-10 w-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{completedChapters}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Tiến Độ Học Tập</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-slate-600 font-medium">
                {completedChapters}/{totalChapters} chương hoàn thành
              </p>
            </div>
          </div>

          {/* Achievement Card */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-white/50">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-6 rounded-3xl group-hover:rotate-12 transition-transform duration-500">
                <Award className="text-purple-600 h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Thành Tích</h3>
              <p className="text-3xl font-black text-purple-600 mb-2">
                {progressPercentage.toFixed(0)}%
              </p>
              <p className="text-slate-600 font-medium">Tỷ lệ hoàn thành</p>
            </div>
          </div>

          {/* Target Card */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-white/50">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-6 rounded-3xl group-hover:rotate-12 transition-transform duration-500">
                <Target className="text-blue-600 h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Mục Tiêu</h3>
              <p className="text-3xl font-black text-blue-600 mb-2">{totalChapters}</p>
              <p className="text-slate-600 font-medium">Tổng số chương</p>
            </div>
          </div>
        </div>

        {/* Reset Progress Button */}
        <div className="mt-8">
          <button
            className="group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm text-slate-700 font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/50"
            onClick={handleResetProgress}
          >
            <RotateCcw className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            Đặt lại tiến độ học tập
          </button>
        </div>
      </section>

      {/* Content Explorer */}
      <section className="flex-1 w-full max-w-7xl mx-auto mb-16 flex flex-col px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
              Danh Sách 
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Chương</span>
            </h2>
            <p className="text-lg text-slate-600">Chọn chương để bắt đầu hành trình học tập của bạn</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/50">
            <span className="text-slate-700 font-medium">Bộ lọc:</span>
            <div className="flex gap-2">
              <button
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                  filter === "all" 
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg" 
                    : "text-slate-600 hover:bg-slate-100"
                }`}
                onClick={() => setFilter("all")}
              >
                Tất Cả
              </button>
              <button
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                  filter === "incomplete" 
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg" 
                    : "text-slate-600 hover:bg-slate-100"
                }`}
                onClick={() => setFilter("incomplete")}
              >
                Chưa Hoàn Thành
              </button>
            </div>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredChapters?.map((chapter, index) => (
            <div
              key={chapter.id}
              className="group animate-fade-in h-full flex transform hover:scale-105 transition-all duration-500"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden group-hover:border-emerald-200">
                <ChapterCard
                  chapter={chapter}
                  userProgress={userProgress}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredChapters?.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-12 w-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-600 mb-4">Không có chương nào</h3>
            <p className="text-slate-500">
              {filter === "incomplete" ? "Bạn đã hoàn thành tất cả các chương!" : "Chưa có nội dung học tập."}
            </p>
          </div>
        )}
      </section>

      <MobileNav />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}