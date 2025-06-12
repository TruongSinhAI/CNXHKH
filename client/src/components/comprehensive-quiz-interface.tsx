import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { 
  ChevronLeft, ChevronRight, Clock, CheckCircle, XCircle, BarChart, Book, RefreshCw, FileText, ArrowRight, Info
} from "lucide-react";
import type { Quiz, Question } from "@shared/schema";

interface QuizType {
  id: 'quick' | 'full';
  title: string;
  questionCount: number;
  timeInMinutes: number;
  description: string;
}

const QUIZ_TYPES: QuizType[] = [
  {
    id: 'quick',
    title: 'KIỂM TRA NHANH',
    questionCount: 20,
    timeInMinutes: 20,
    description: 'Phù hợp để ôn tập nhanh và đánh giá kiến thức cơ bản'
  },
  {
    id: 'full',
    title: 'KIỂM TRA FE',
    questionCount: 60,
    timeInMinutes: 60,
    description: 'Tương đương đề thi thực tế'
  }
];

// Cấu trúc kết quả Quiz
interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  answers: Array<{
    question: Question;
    selectedAnswer: string[];
    isCorrect: boolean;
  }>;
}

// Hàm tính điểm
const calculateQuizScore = (answers: Array<{isCorrect: boolean}>) => {
  if (!answers.length) return 0;
  const correctCount = answers.filter(a => a.isCorrect).length;
  return Math.round((correctCount / answers.length) * 100);
};

// Props của component
interface ComprehensiveQuizInterfaceProps {
  quiz: Quiz;
}

export default function ComprehensiveQuizInterface({ quiz }: ComprehensiveQuizInterfaceProps) {
  const [selectedQuizType, setSelectedQuizType] = useState<QuizType | null>(null);
  // States quản lý luồng làm bài
  const [quizStarted, setQuizStarted] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  
  // States quản lý dữ liệu quiz
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string[]>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, string[]>>({});
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  
  // Hooks
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  // Biến suy luận
  const questions = selectedQuizType
    ? (quiz.questions as Question[]).slice(0, selectedQuizType.questionCount)
    : [];
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((Object.keys(submittedAnswers).length) / totalQuestions) * 100;

  // Hàm tiện ích
  const isMultipleChoice = (question: Question) => (question.correctAnswer?.length ?? 0) > 1;

  // Effect cho bộ đếm thời gian
  useEffect(() => {
    if (!quizStarted || quizCompleted) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleQuizComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, quizCompleted]);

  // Hàm reset quiz để làm lại
  const handleReset = () => {
    setQuizStarted(true);
    setIsReviewing(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setSubmittedAnswers({});
    setTimeRemaining(selectedQuizType?.timeInMinutes * 60 || 0);
    setQuizCompleted(false);
    setQuizResult(null);
  };
  
  // Hàm định dạng thời gian
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Hàm xử lý khi người dùng chọn/bỏ chọn đáp án
  const handleAnswerSelect = (value: string) => {
    if (submittedAnswers[currentQuestion.id]) return;

    const currentSelection = selectedAnswers[currentQuestion.id] || [];

    if (isMultipleChoice(currentQuestion)) {
      const newSelection = currentSelection.includes(value)
        ? currentSelection.filter(v => v !== value)
        : [...currentSelection, value];
      setSelectedAnswers(prev => ({ ...prev, [currentQuestion.id]: newSelection }));
    } else {
      setSelectedAnswers(prev => ({ ...prev, [currentQuestion.id]: [value] }));
    }
  };

  // Hàm nộp câu trả lời hiện tại (để xem feedback)
  const handleSubmitAnswer = () => {
    const selected = selectedAnswers[currentQuestion.id];
    if (!selected || selected.length === 0) return;
    setSubmittedAnswers(prev => ({ ...prev, [currentQuestion.id]: selected }));
  };

  // Hàm điều hướng câu hỏi
  const handleNavigation = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
    if (direction === 'prev' && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  // Hàm kiểm tra đáp án của một câu hỏi đã nộp
  const isAnswerCorrect = (questionId: string) => {
    const question = questions.find(q => q.id === questionId);
    const submitted = submittedAnswers[questionId];
    if (!question || !submitted) return false;
    
    const sortedSubmitted = [...submitted].sort().join('');
    const sortedCorrect = question.correctAnswer.split('').sort().join('');
    
    return sortedSubmitted === sortedCorrect;
  };

  // Hàm xử lý khi kết thúc bài kiểm tra
  const handleQuizComplete = () => {
    if (quizCompleted) return;

    const finalAnswers = questions.map(q => {
      const selected = submittedAnswers[q.id] || selectedAnswers[q.id] || [];
      const sortedSelected = [...selected].sort().join('');
      const sortedCorrect = q.correctAnswer.split('').sort().join('');
      
      return {
        question: q,
        selectedAnswer: selected,
        isCorrect: sortedSelected === sortedCorrect
      };
    });

    const result: QuizResult = {
      score: calculateQuizScore(finalAnswers),
      totalQuestions,
      correctAnswers: finalAnswers.filter(a => a.isCorrect).length,
      timeSpent: (selectedQuizType?.timeInMinutes * 60 || 0) - timeRemaining,
      answers: finalAnswers
    };

    setQuizResult(result);
    setQuizCompleted(true);
    
    toast({
      title: "Bài kiểm tra đã hoàn thành!",
      description: `Bạn đã đạt ${result.score} điểm. Hãy xem lại kết quả chi tiết.`,
      variant: result.score >= 50 ? 'default' : 'destructive',
    });
  };

  // ---- RENDER COMPONENTS ----

  // 1. Màn hình giới thiệu
  if (!quizStarted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">{quiz.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <h3 className="text-xl font-semibold text-center mb-6">Chọn Hình Thức Kiểm Tra</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {QUIZ_TYPES.map((type) => (
              <button
                key={type.id}
                className={cn(
                  "p-6 border rounded-lg text-left transition-all hover:border-primary",
                  selectedQuizType?.id === type.id ? "border-primary bg-primary/5" : ""
                )}
                onClick={() => {
                  setSelectedQuizType(type);
                  setTimeRemaining(type.timeInMinutes * 60);
                }}
              >
                <h4 className="text-lg font-semibold mb-2">{type.title}</h4>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Số lượng: {type.questionCount} câu hỏi</li>
                  <li>• Thời gian: {type.timeInMinutes} phút</li>
                  <li>• {type.description}</li>
                </ul>
              </button>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button
              size="lg"
              onClick={() => setQuizStarted(true)}
              disabled={!selectedQuizType}
            >
              Bắt đầu làm bài
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // 2. Màn hình kết quả
  if (quizCompleted && quizResult) {
    return (
      <Card>
        <CardContent className="p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">Kết quả bài kiểm tra</h2>
            <p className="text-muted-foreground">Chúc mừng bạn đã hoàn thành bài thi!</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <div className="p-4 border rounded-lg text-center bg-slate-50">
              <BarChart className="w-8 h-8 mb-2 mx-auto text-primary" />
              <div className="text-3xl font-bold">{quizResult.score}%</div>
              <div className="text-sm text-muted-foreground">Tỉ lệ đúng</div>
            </div>
            <div className="p-4 border rounded-lg text-center bg-slate-50">
              <CheckCircle className="w-8 h-8 mb-2 mx-auto text-green-600" />
              <div className="text-3xl font-bold">{quizResult.correctAnswers}/{totalQuestions}</div>
              <div className="text-sm text-muted-foreground">Câu trả lời đúng</div>
            </div>
            <div className="p-4 border rounded-lg text-center bg-slate-50">
              <Clock className="w-8 h-8 mb-2 mx-auto text-amber-600" />
              <div className="text-3xl font-bold">{formatTime(quizResult.timeSpent)}</div>
              <div className="text-sm text-muted-foreground">Thời gian làm bài</div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button onClick={() => setLocation("/")}>
              <Book className="w-4 h-4 mr-2" /> Quay về trang chủ
            </Button>
            <Button variant="secondary" onClick={handleReset}>
              <RefreshCw className="w-4 h-4 mr-2" /> Làm lại
            </Button>
            <Button variant="outline" onClick={() => setIsReviewing(!isReviewing)}>
              <FileText className="w-4 h-4 mr-2" /> {isReviewing ? 'Ẩn đáp án' : 'Xem lại đáp án'}
            </Button>
          </div>

          {isReviewing && (
            <div className="space-y-6 mt-6">
              <h3 className="text-xl font-semibold border-b pb-2">Chi tiết câu trả lời</h3>
              {quizResult.answers.map((answer, index) => (
                <div key={answer.question.id} className="p-4 border rounded-lg bg-slate-50">
                  <p className="font-medium">Câu {index + 1}: {answer.question.text}</p>
                  
                  <div className={cn("mt-2 p-3 rounded-md", 
                      answer.isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  )}>
                    {answer.isCorrect ? <CheckCircle className="inline w-4 h-4 mr-2"/> : <XCircle className="inline w-4 h-4 mr-2"/>}
                    <span className="font-semibold">Đáp án của bạn: </span>
                    {answer.selectedAnswer.length > 0
                      ? answer.selectedAnswer.map(val => answer.question.options.find(o => o.value === val)?.text).join(', ')
                      : "Chưa trả lời"
                    }
                  </div>

                  {!answer.isCorrect && (
                    <div className="mt-2 p-3 rounded-md bg-blue-100 text-blue-800">
                      <span className="font-semibold">Đáp án đúng: </span>
                      {answer.question.correctAnswer.split('').map(val => answer.question.options.find(o => o.value === val)?.text).join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  // 3. Giao diện làm bài
  return (
    <Card>
      <CardContent className="p-6 md:p-8">
        <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{quiz.title}</h2>
                <div className="flex items-center text-amber-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-medium">{formatTime(timeRemaining)}</span>
                </div>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                <span>Câu {currentQuestionIndex + 1} / {totalQuestions}</span>
                <Badge variant="outline">{Object.keys(submittedAnswers).length} câu đã trả lời</Badge>
            </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium mb-4">Câu {currentQuestionIndex + 1}: {currentQuestion.text}</h3>
          
          {isMultipleChoice(currentQuestion) && (
            <Alert className="mb-4 border-blue-400 bg-blue-50 text-blue-800">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Câu hỏi này có thể có nhiều đáp án đúng. Chọn tất cả các đáp án bạn cho là đúng.
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected = (selectedAnswers[currentQuestion.id] || []).includes(option.value);
              const isSubmitted = !!submittedAnswers[currentQuestion.id];
              const isCorrectAnswer = currentQuestion.correctAnswer.includes(option.value);

              return (
                <button
                  key={option.value}
                  className={cn(
                    "w-full text-left p-4 border rounded-lg transition-all duration-200 flex items-center",
                    "hover:bg-muted/50 disabled:cursor-not-allowed disabled:opacity-70",
                    isSubmitted 
                      ? (isCorrectAnswer ? 'border-green-500 bg-green-100' : (isSelected ? 'border-red-500 bg-red-100' : ''))
                      : (isSelected ? 'border-primary bg-primary/10' : 'border-border')
                  )}
                  onClick={() => handleAnswerSelect(option.value)}
                  disabled={isSubmitted}
                >
                  <Badge variant="outline" className="mr-4">{option.value}</Badge>
                  {option.text}
                </button>
              );
            })}
          </div>
        </div>
        

        
        <div className="flex items-center justify-between">
            <Button variant="outline" onClick={() => handleNavigation('prev')} disabled={currentQuestionIndex === 0}>
                <ChevronLeft className="w-4 h-4 mr-2" /> Câu trước
            </Button>
            <div className="flex gap-3">
                {!submittedAnswers[currentQuestion.id] ? (
                    <Button 
                        onClick={handleSubmitAnswer} 
                        disabled={!selectedAnswers[currentQuestion.id] || selectedAnswers[currentQuestion.id].length === 0}
                    >
                        Kiểm tra
                    </Button>
                ) : (
                    currentQuestionIndex === totalQuestions - 1 ? (
                        <Button onClick={handleQuizComplete} className="bg-green-600 hover:bg-green-700">Nộp bài</Button>
                    ) : (
                        <Button onClick={() => handleNavigation('next')}>
                            Câu tiếp <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    )
                )}
            </div>
        </div>
      </CardContent>
    </Card>
  );
}