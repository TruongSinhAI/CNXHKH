import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, StarIcon, Check, Lock, Play } from "lucide-react";
import { useLocation } from "wouter";
import type { Chapter, UserProgress } from "@shared/schema";

interface ChapterCardProps {
  chapter: Chapter;
  userProgress: UserProgress;
}

export default function ChapterCard({ chapter, userProgress }: ChapterCardProps) {
  const [, setLocation] = useLocation();
  
  const isCompleted = userProgress.completedChapters.includes(chapter.id);
  const isCurrent = userProgress.currentChapter === chapter.id;
  const score = userProgress.quizScores[chapter.id];
  
  const getStatusIcon = () => {
    if (isCompleted) {
      return <Check className="h-5 w-5 text-success" />;
    } else if (isCurrent) {
      return <Play className="h-5 w-5 text-primary" />;
    } else {
      return <Lock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusText = () => {
    if (isCompleted) return "Đã hoàn thành";
    if (isCurrent) return "Đang học";
    return "Chưa mở khóa";
  };

  const getStatusColor = () => {
    if (isCompleted) return "success";
    if (isCurrent) return "primary";
    return "muted";
  };

  const getProgressPercentage = () => {
    if (isCompleted) return score || 100;
    if (isCurrent) return 60;
    return 0;
  };

  const canAccess = isCompleted || isCurrent;

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
              isCompleted ? 'bg-success/10' : 
              isCurrent ? 'bg-primary/10' : 
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
              isCompleted ? 'bg-success/10 text-success border-success/20' :
              isCurrent ? 'bg-primary/10 text-primary border-primary/20' :
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
                  isCompleted && score && score >= star * 30 
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
