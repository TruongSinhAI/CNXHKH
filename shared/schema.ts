import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// --- Zod Schemas for Structured Content ---

// Base schemas for each block type
const headingBlockSchema = z.object({
  type: z.literal("heading"),
  level: z.union([z.literal(2), z.literal(3), z.literal(4)]),
  text: z.string(),
});

const paragraphBlockSchema = z.object({
  type: z.literal("paragraph"),
  text: z.string(),
});

const listBlockSchema = z.object({
  type: z.literal("list"),
  items: z.array(z.string()),
});

const blockquoteSchema = z.object({
  type: z.literal("blockquote"),
  text: z.string(),
});

// A discriminated union for all possible content blocks
export const contentBlockSchema = z.discriminatedUnion("type", [
  headingBlockSchema,
  paragraphBlockSchema,
  listBlockSchema,
  blockquoteSchema,
]);

// Type for a single content block
export type ContentBlock = z.infer<typeof contentBlockSchema>;


// --- Drizzle Table Schemas ---

// Chapter schema
export const chapters = pgTable("chapters", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  // Use jsonb to store structured content.
  // .$type<ContentBlock[]>() provides strong TypeScript inference.
  content: jsonb("content").$type<ContentBlock[]>().notNull(),
  duration: integer("duration").notNull(), // in minutes
  order: integer("order").notNull(),
  isLocked: boolean("is_locked").notNull().default(true),
});

// Quiz question structure (Zod schema for validation)
export const questionSchema = z.object({
  id: z.string(),
  text: z.string(),
  options: z.array(z.object({
    value: z.string(),
    text: z.string(),
  })),
  correctAnswer: z.string(),
  explanation: z.string().optional(),
});

// Type for a single question
export type Question = z.infer<typeof questionSchema>;

// Quiz schema
export const quizzes = pgTable("quizzes", {
  id: serial("id").primaryKey(),
  chapterId: integer("chapter_id").notNull(),
  title: text("title").notNull(),
  // Use jsonb for the array of question objects.
  // .$type<Question[]>() provides strong TypeScript inference.
  questions: jsonb("questions").$type<Question[]>().notNull(),
});

// Chat message schema
export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  message: text("message").notNull(),
  response: text("response").notNull(),
  // Use a proper timestamp type. .defaultNow() sets the current time on insert.
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});


// --- Insert Schemas for Zod Validation ---

export const insertChapterSchema = createInsertSchema(chapters).omit({
  id: true,
});

export const insertQuizSchema = createInsertSchema(quizzes).omit({
  id: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).omit({
  id: true,
});


// --- Inferred Types ---

export type Chapter = typeof chapters.$inferSelect;
export type InsertChapter = z.infer<typeof insertChapterSchema>;
export type Quiz = typeof quizzes.$inferSelect;
export type InsertQuiz = z.infer<typeof insertQuizSchema>;
export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;


// --- Client-side Progress Tracking ---
export type UserProgress = {
  completedChapters: number[];
  currentChapter: number;
  quizScores: Record<number, number>;
  totalCorrectAnswers: number;
};