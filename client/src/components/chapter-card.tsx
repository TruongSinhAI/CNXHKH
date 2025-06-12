import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Check, Play } from "lucide-react";
import { useLocation } from "wouter";
import { getChapterStatus, isChapterAccessible } from "@/lib/progress-storage";
import type { Chapter, UserProgress } from "@shared/schema";

interface ChapterCardProps {
  chapter: Chapter;
  userProgress: UserProgress;
}

export default function ChapterCard({ chapter, userProgress }: ChapterCardProps) {
  const [, setLocation] = useLocation();

  const status = getChapterStatus(chapter.id, userProgress);
  const canAccess = isChapterAccessible(chapter.id, userProgress);
  const score = userProgress.quizScores[chapter.id];

  const getStatusIcon = () => {
    if (status === "completed") {
      return <Check className="h-6 w-6 text-green-600 drop-shadow" />;
    } else {
      return <Play className="h-6 w-6 text-yellow-500 animate-pulse" />;
    }
  };

  const getStatusText = () => {
    if (status === "completed") return "Đã hoàn thành";
    return "Có thể học";
  };

  const getProgressPercentage = () => {
    if (status === "completed") return score || 100;
    if (status === "current") return 0;
    return 0;
  };

  const handleClick = () => {
    if (canAccess) {
      setLocation(`/chapter/${chapter.id}`);
    }
  };

  return (
    <Card
      className="modern-card glass cursor-pointer group overflow-hidden relative transition-all duration-200"
      onClick={handleClick}
    >
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-green-100 ${
              status === "completed"
                ? "bg-green-200"
                : "bg-green-50"
            }`}
          >
            {getStatusIcon()}
          </div>
          <div>
            <h4 className="text-lg font-bold text-green-700 mb-1 transition-all duration-200 group-hover:text-green-800">
              Chương {chapter.order}: {chapter.title}
            </h4>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  status === "completed"
                    ? "bg-green-100 text-green-700 border-green-300"
                    : "bg-gray-100 text-gray-600 border-gray-300"
                }`}
              >
                {getStatusText()}
              </Badge>
              <span className="text-xs text-green-600">
                {getProgressPercentage()}%
              </span>
            </div>
          </div>
        </div>
        <p className="text-base text-green-800/80 mb-4 min-h-[48px]">{chapter.description}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-sm text-green-700 font-medium">
            <Clock className="h-4 w-4 mr-1" />
            {chapter.duration} phút
          </span>
          <div className="flex items-center space-x-1.5">
            {[1, 2, 3].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  status === "completed" && score && score >= star * 30
                    ? "text-green-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </CardContent>
      <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-green-400 transition-all duration-200"></div>
    </Card>
  );
}
