import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  CheckCircle, 
  XCircle, 
  MessageCircle,
  ArrowRight
} from "lucide-react";
import type { Quiz, Question } from "@shared/schema";

interface QuizInterfaceProps {
  quiz: Quiz;
}

export default function QuizInterface({ quiz }: QuizInterfaceProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(900); // 15 minutes
  const [showFeedback, setShowFeedback] = useState<string | null>(null);

  const questions = quiz.questions as Question[];
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleSubmitAnswer = () => {
    const selectedAnswer = selectedAnswers[currentQuestion.id];
    if (!selectedAnswer) return;

    setSubmittedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: selectedAnswer
    }));
    setShowFeedback(currentQuestion.id);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowFeedback(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowFeedback(null);
    }
  };

  const isAnswerCorrect = () => {
    const submitted = submittedAnswers[currentQuestion.id];
    return submitted === currentQuestion.correctAnswer;
  };

  const getOptionClassName = (optionValue: string) => {
    const isSelected = selectedAnswers[currentQuestion.id] === optionValue;
    const isSubmitted = submittedAnswers[currentQuestion.id];
    
    if (isSubmitted) {
      if (optionValue === currentQuestion.correctAnswer) {
        return "quiz-option border-success bg-success/10";
      } else if (isSelected && optionValue !== currentQuestion.correctAnswer) {
        return "quiz-option border-accent bg-accent/10";
      }
    }
    
    return isSelected ? "quiz-option selected" : "quiz-option";
  };

  return (
    <Card>
      <CardContent className="p-8">
        {/* Quiz Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-text-primary">{quiz.title}</h4>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Câu hỏi <span className="font-medium">{currentQuestionIndex + 1}</span> / {totalQuestions}
              </span>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{formatTime(timeRemaining)}</span>
              </div>
            </div>
          </div>
          
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <div className="mb-8">
          <h5 className="text-lg font-medium text-text-primary mb-6 vietnamese-text">
            {currentQuestion.text}
          </h5>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <label
                key={option.value}
                className={getOptionClassName(option.value)}
                onClick={() => !submittedAnswers[currentQuestion.id] && handleAnswerSelect(option.value)}
              >
                <input
                  type="radio"
                  name={`answer-${currentQuestion.id}`}
                  value={option.value}
                  checked={selectedAnswers[currentQuestion.id] === option.value}
                  onChange={() => handleAnswerSelect(option.value)}
                  className="mt-1 text-primary focus:ring-primary"
                  disabled={!!submittedAnswers[currentQuestion.id]}
                />
                <div className="flex-1">
                  <span className="font-medium text-text-primary group-hover:text-primary transition-colors">
                    {option.value}.
                  </span>
                  <span className="ml-2 text-text-primary vietnamese-text">
                    {option.text}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Câu Trước
          </Button>
          
          <div className="flex items-center space-x-3">
            {!submittedAnswers[currentQuestion.id] && (
              <>
                <Button variant="outline" onClick={handleNextQuestion}>
                  Bỏ Qua
                </Button>
                <Button 
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswers[currentQuestion.id]}
                >
                  Xác Nhận
                </Button>
              </>
            )}
            {submittedAnswers[currentQuestion.id] && currentQuestionIndex < totalQuestions - 1 && (
              <Button onClick={handleNextQuestion}>
                Câu Tiếp Theo
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>

        {/* Feedback */}
        {showFeedback && submittedAnswers[currentQuestion.id] && (
          <Card className="border-l-4 border-l-success">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isAnswerCorrect() ? 'bg-success/10' : 'bg-accent/10'
                }`}>
                  {isAnswerCorrect() ? (
                    <CheckCircle className="text-success h-6 w-6" />
                  ) : (
                    <XCircle className="text-accent h-6 w-6" />
                  )}
                </div>
                <div className="flex-1">
                  <h6 className={`font-semibold mb-2 ${
                    isAnswerCorrect() ? 'text-success' : 'text-accent'
                  }`}>
                    {isAnswerCorrect() ? 'Chính Xác!' : 'Chưa Chính Xác'}
                  </h6>
                  <p className="text-text-primary mb-4 vietnamese-text">
                    {currentQuestion.explanation}
                  </p>
                  <div className="flex items-center space-x-4">
                    {currentQuestionIndex < totalQuestions - 1 && (
                      <Button variant="link" onClick={handleNextQuestion} className="p-0">
                        Câu Tiếp Theo <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    )}
                    <Button variant="link" className="p-0 text-muted-foreground">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Hỏi Trợ Lý AI
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
