import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Check, Lock, Play } from "lucide-react";
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
      return <Check className="h-5 w-5 text-success" />;
    } else if (status === "current") {
      return <Play className="h-5 w-5 text-primary" />;
    } else {
      return <Lock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusText = () => {
    if (status === "completed") return "Đã hoàn thành";
    if (status === "current") return "Có thể học";
    return "Chưa mở khóa";
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
      className={`hover:shadow-md transition-shadow cursor-pointer group ${
        canAccess ? '' : 'opacity-60'
      }`}
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              status === 'completed' ? 'bg-success bg-opacity-10' : 
              status === 'current' ? 'bg-primary bg-opacity-10' : 
              'bg-muted'
            }`}>
              {getStatusIcon()}
            </div>
            <div>
              <h4 className={`font-semibold transition-colors ${
                canAccess ? 'text-text-primary group-hover:text-primary' : 'text-muted-foreground'
              }`}>
                Chương {chapter.order}
              </h4>
              <p className={`text-sm ${canAccess ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
                {getStatusText()}
              </p>
            </div>
          </div>
          <Badge 
            variant="outline" 
            className={`text-xs font-medium ${
              status === 'completed' ? 'bg-success bg-opacity-10 text-success border-success border-opacity-20' :
              status === 'current' ? 'bg-primary bg-opacity-10 text-primary border-primary border-opacity-20' :
              'bg-muted text-muted-foreground border-muted'
            }`}
          >
            {getProgressPercentage()}%
          </Badge>
        </div>
        
        <h5 className={`font-medium mb-2 ${
          canAccess ? 'text-text-primary' : 'text-muted-foreground'
        }`}>
          {chapter.title}
        </h5>
        
        <p className={`text-sm mb-4 ${
          canAccess ? 'text-muted-foreground' : 'text-muted-foreground'
        }`}>
          {chapter.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className={`text-xs flex items-center ${
            canAccess ? 'text-muted-foreground' : 'text-muted-foreground'
          }`}>
            <Clock className="h-3 w-3 mr-1" />
            {chapter.duration} phút
          </span>
          
          <div className="flex items-center space-x-1">
            {[1, 2, 3].map((star) => (
              <Star 
                key={star}
                className={`h-3 w-3 ${
                  status === 'completed' && score && score >= star * 30 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
