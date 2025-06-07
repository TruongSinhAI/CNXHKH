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
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setLocation("/")}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white h-5 w-5" />
              </div>
              <h1 className="text-xl font-bold text-text-primary">Chủ Nghĩa Xã Hội Khoa Học</h1>
            </button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setLocation("/")}
              className="text-text-primary hover:text-primary font-medium transition-colors"
            >
              Nội Dung
            </button>
            <span className="text-text-primary hover:text-primary font-medium transition-colors cursor-pointer">
              Bài Kiểm Tra
            </span>
            <span className="text-text-primary hover:text-primary font-medium transition-colors cursor-pointer">
              Trợ Lý AI
            </span>
          </nav>

          <div className="flex items-center space-x-3">
            {userProgress && (
              <div className="hidden sm:flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Tiến độ:</span>
                <div className="w-20 h-2 bg-muted rounded-full">
                  <div 
                    className="h-2 bg-secondary rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-secondary">{progressPercentage}%</span>
              </div>
            )}
            
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
