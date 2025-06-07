// This file contains quiz data utilities and scoring logic
import type { Question } from "@shared/schema";

export interface QuizAnswer {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  answers: QuizAnswer[];
}

export function calculateQuizScore(answers: QuizAnswer[]): number {
  if (answers.length === 0) return 0;
  
  const correctCount = answers.filter(answer => answer.isCorrect).length;
  return Math.round((correctCount / answers.length) * 100);
}

export function validateAnswer(question: Question, selectedAnswer: string): boolean {
  return question.correctAnswer === selectedAnswer;
}

export function generateQuizResult(
  questions: Question[], 
  userAnswers: Record<string, string>,
  totalTimeSpent: number
): QuizResult {
  const answers: QuizAnswer[] = questions.map(question => {
    const selectedAnswer = userAnswers[question.id] || "";
    const isCorrect = validateAnswer(question, selectedAnswer);
    
    return {
      questionId: question.id,
      selectedAnswer,
      isCorrect,
      timeSpent: Math.floor(totalTimeSpent / questions.length), // Approximate time per question
    };
  });

  const correctAnswers = answers.filter(answer => answer.isCorrect).length;
  const score = calculateQuizScore(answers);

  return {
    score,
    totalQuestions: questions.length,
    correctAnswers,
    timeSpent: totalTimeSpent,
    answers,
  };
}

export function getQuizFeedbackMessage(score: number): string {
  if (score >= 90) {
    return "Xuất sắc! Bạn đã nắm vững kiến thức rất tốt.";
  } else if (score >= 80) {
    return "Tốt lắm! Bạn hiểu khá rõ về nội dung này.";
  } else if (score >= 70) {
    return "Khá tốt! Hãy xem lại một số phần để hiểu rõ hơn.";
  } else if (score >= 60) {
    return "Cần cố gắng thêm! Hãy ôn lại nội dung chương này.";
  } else {
    return "Cần học lại! Đừng lo lắng, hãy xem lại nội dung và thử lại.";
  }
}
