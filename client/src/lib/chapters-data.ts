// This file contains chapter data utilities and constants
import type { Chapter } from "@shared/schema";

export const CHAPTER_STATUS = {
  COMPLETED: "completed",
  CURRENT: "current", 
  LOCKED: "locked",
} as const;

export function getChapterStatus(
  chapterId: number,
  completedChapters: number[],
  currentChapter: number
): keyof typeof CHAPTER_STATUS {
  if (completedChapters.includes(chapterId)) {
    return "COMPLETED";
  }
  if (chapterId === currentChapter) {
    return "CURRENT";
  }
  return "LOCKED";
}

export function calculateProgress(completedChapters: number[], totalChapters: number = 7): number {
  return Math.round((completedChapters.length / totalChapters) * 100);
}

export function getNextAvailableChapter(completedChapters: number[]): number {
  const maxCompleted = Math.max(...completedChapters, 0);
  return Math.min(maxCompleted + 1, 7);
}
