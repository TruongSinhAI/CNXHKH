import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Chapter schema
export const chapters = pgTable("chapters", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  duration: integer("duration").notNull(), // in minutes
  order: integer("order").notNull(),
  isLocked: boolean("is_locked").notNull().default(true),
});

// Quiz schema
export const quizzes = pgTable("quizzes", {
  id: serial("id").primaryKey(),
  chapterId: integer("chapter_id").notNull(),
  title: text("title").notNull(),
  questions: jsonb("questions").notNull(), // Array of question objects
});

// Quiz question structure
export const questionSchema = z.object({
  id: z.string(),
  text: z.string(),
  options: z.array(z.object({
    value: z.string(),
    text: z.string(),
  })),
  correctAnswer: z.string(),
  explanation: z.string(),
});

// Chat message schema
export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  message: text("message").notNull(),
  response: text("response").notNull(),
  timestamp: integer("timestamp").notNull(),
});

// Insert schemas
export const insertChapterSchema = createInsertSchema(chapters).omit({
  id: true,
});

export const insertQuizSchema = createInsertSchema(quizzes).omit({
  id: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).omit({
  id: true,
});

// Types
export type Chapter = typeof chapters.$inferSelect;
export type InsertChapter = z.infer<typeof insertChapterSchema>;
export type Quiz = typeof quizzes.$inferSelect;
export type InsertQuiz = z.infer<typeof insertQuizSchema>;
export type Question = z.infer<typeof questionSchema>;
export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;

// Progress tracking (session-based)
export type UserProgress = {
  completedChapters: number[];
  currentChapter: number;
  quizScores: Record<number, number>;
  totalCorrectAnswers: number;
};
