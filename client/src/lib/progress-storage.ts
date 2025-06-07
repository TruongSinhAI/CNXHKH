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
    if (stored) {
      const parsed = JSON.parse(stored);
      // Validate and merge with defaults
      return {
        completedChapters: parsed.completedChapters || [],
        currentChapter: parsed.currentChapter || 1,
        quizScores: parsed.quizScores || {},
        totalCorrectAnswers: parsed.totalCorrectAnswers || 0,
      };
    }
  } catch (error) {
    console.warn("Failed to load user progress from localStorage:", error);
  }
  return defaultProgress;
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
  
  // Add to completed if not already there
  if (!progress.completedChapters.includes(chapterId)) {
    progress.completedChapters.push(chapterId);
    progress.completedChapters.sort((a, b) => a - b);
  }
  
  // Update current chapter to next available
  const maxCompleted = Math.max(...progress.completedChapters);
  progress.currentChapter = Math.min(maxCompleted + 1, 7);
  
  saveUserProgress(progress);
  return progress;
}

export function saveQuizScore(chapterId: number, score: number, correctAnswers: number): UserProgress {
  const progress = loadUserProgress();
  
  // Update quiz score
  progress.quizScores[chapterId] = score;
  
  // Update total correct answers (only if better score)
  const previousScore = progress.quizScores[chapterId] || 0;
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

// Check if a chapter is accessible based on progress
export function isChapterAccessible(chapterId: number, progress: UserProgress): boolean {
  // Chapter 1 is always accessible
  if (chapterId === 1) return true;
  
  // Chapter 2 is accessible after completing chapter 1
  if (chapterId === 2) return progress.completedChapters.includes(1);
  
  // Chapter 3 is accessible after completing chapter 2
  if (chapterId === 3) return progress.completedChapters.includes(2);
  
  // Other chapters are accessible based on sequential completion
  return progress.completedChapters.includes(chapterId - 1);
}

// Get chapter status for UI
export function getChapterStatus(chapterId: number, progress: UserProgress): "completed" | "current" | "locked" {
  if (progress.completedChapters.includes(chapterId)) {
    return "completed";
  }
  if (isChapterAccessible(chapterId, progress)) {
    return "current";
  }
  return "locked";
}