// Utilities for managing user progress in localStorage
import type { UserProgress } from "@shared/schema";

const STORAGE_KEY = "cnxhkh_user_progress";

// Default progress for new users
const defaultProgress: UserProgress = {
  completedChapters: [],
  currentChapter: 1,
  quizScores: {},
  totalCorrectAnswers: 0,
};

export function loadUserProgress(): UserProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultProgress;
    
    const parsed = JSON.parse(stored);
    return {
      completedChapters: parsed.completedChapters || [],
      currentChapter: parsed.currentChapter || 1,
      quizScores: parsed.quizScores || {},
      totalCorrectAnswers: parsed.totalCorrectAnswers || 0,
    };
  } catch (error) {
    console.warn("Failed to load user progress from localStorage:", error);
    return defaultProgress;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.warn("Failed to save user progress to localStorage:", error);
  }
}

export function markChapterCompleted(chapterId: number): UserProgress {
  const progress = loadUserProgress();
  
  if (!progress.completedChapters.includes(chapterId)) {
    progress.completedChapters.push(chapterId);
    progress.completedChapters.sort((a, b) => a - b);
  }
  
  progress.currentChapter = Math.min(Math.max(...progress.completedChapters) + 1, 7);
  saveUserProgress(progress);
  return progress;
}

export function saveQuizScore(chapterId: number, score: number, correctAnswers: number): UserProgress {
  const progress = loadUserProgress();
  const previousScore = progress.quizScores[chapterId] || 0;
  
  progress.quizScores[chapterId] = score;
  if (score > previousScore) {
    progress.totalCorrectAnswers += correctAnswers;
  }
  
  saveUserProgress(progress);
  return progress;
}

export function resetProgress(): UserProgress {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Failed to reset progress:", error);
  }
  return defaultProgress;
}

export function isChapterAccessible(chapterId: number, progress: UserProgress): boolean {
  return true; // All chapters are now accessible
}

export function getChapterStatus(chapterId: number, progress: UserProgress): "completed" | "current" | "locked" {
  if (progress.completedChapters.includes(chapterId)) {
    return "completed";
  }
  return "current"; // No more locked chapters
}
