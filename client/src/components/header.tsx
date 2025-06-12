import { GraduationCap, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import type { UserProgress } from "@shared/schema";

interface HeaderProps {
  userProgress?: UserProgress;
}

export default function Header({ userProgress }: HeaderProps) {
  const [, setLocation] = useLocation();

  const progressPercentage = userProgress 
    ? Math.round((userProgress.completedChapters.length / 7) * 100)
    : 0;

  return (
    <header className="glass shadow-xl sticky top-0 z-50 transition-all duration-300 border-b-0 border-0 relative">
      <div className="absolute inset-0 pointer-events-none rounded-b-2xl border-b-4 border-transparent bg-gradient-to-r from-blue-400/30 via-fuchsia-400/20 to-yellow-200/30 blur-[2px] opacity-70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setLocation("/")}
              className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shadow animate-float">
                <GraduationCap className="text-green-700 h-7 w-7" />
              </div>
              <h1 className="text-2xl font-extrabold text-green-700 tracking-tight transition-all duration-200 hover:text-green-800">
                Chủ Nghĩa Xã Hội Khoa Học
              </h1>
            </button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setLocation("/")}
              className="font-semibold text-lg transition-all duration-200 hover:scale-105 text-green-700 hover:text-green-800"
            >
              Nội Dung
            </button>
            <button
              onClick={() => setLocation("/comprehensive-quiz")}
              className="font-semibold text-lg transition-all duration-200 hover:scale-105 text-green-700 hover:text-green-800">
              Bài Kiểm Tra
            </button>
            <button
              onClick={() => setLocation("/ai-chat")}
              className="font-semibold text-lg transition-all duration-200 hover:scale-105 text-green-700 hover:text-green-800">
              Trợ Lý AI
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            {userProgress && (
              <div className="hidden sm:flex items-center space-x-2">
                <span className="text-sm text-green-900/80">Tiến độ:</span>
                <div className="w-28 h-3 bg-green-100 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-3 bg-green-600 rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${progressPercentage}%`,
                      transform: 'translateZ(0)',
                    }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-green-700">{progressPercentage}%</span>
              </div>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-green-900 hover:text-green-600 transition-all duration-300"
            >
              <Menu className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
