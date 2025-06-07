import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import { z } from "zod";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key" 
});

const chatRequestSchema = z.object({
  message: z.string().min(1),
  sessionId: z.string().min(1),
  context: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all chapters
  app.get("/api/chapters", async (req, res) => {
    try {
      const chapters = await storage.getChapters();
      res.json(chapters);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch chapters" });
    }
  });

  // Get specific chapter
  app.get("/api/chapters/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid chapter ID" });
      }

      const chapter = await storage.getChapter(id);
      if (!chapter) {
        return res.status(404).json({ message: "Chapter not found" });
      }

      res.json(chapter);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch chapter" });
    }
  });

  // Get quiz for chapter
  app.get("/api/chapters/:id/quiz", async (req, res) => {
    try {
      const chapterId = parseInt(req.params.id);
      if (isNaN(chapterId)) {
        return res.status(400).json({ message: "Invalid chapter ID" });
      }

      const quiz = await storage.getQuizByChapterId(chapterId);
      if (!quiz) {
        return res.status(404).json({ message: "Quiz not found for this chapter" });
      }

      res.json(quiz);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch quiz" });
    }
  });

  // AI Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const validatedData = chatRequestSchema.parse(req.body);
      const { message, sessionId, context } = validatedData;

      // Create system prompt for Vietnamese educational assistant
      const systemPrompt = `Bạn là một trợ lý AI giáo dục thông minh, chuyên hỗ trợ học tập bằng tiếng Việt. 
      
Nhiệm vụ của bạn:
- Trả lời các câu hỏi về nội dung khóa học bằng tiếng Việt rõ ràng, dễ hiểu
- Giải thích các khái niệm phức tạp một cách đơn giản
- Đưa ra ví dụ thực tế để minh họa
- Khuyến khích việc học tập tích cực
- Hỗ trợ giải đáp thắc mắc về bài tập và kiểm tra

Phong cách giao tiếp:
- Thân thiện, nhiệt tình
- Sử dụng ngôn ngữ phù hợp với người học Việt Nam
- Giải thích từ cơ bản đến nâng cao
- Luôn khuyến khích và động viên học viên

${context ? `Ngữ cảnh hiện tại: ${context}` : ''}`;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      });

      const response = completion.choices[0].message.content;

      if (!response) {
        return res.status(500).json({ message: "Failed to generate AI response" });
      }

      // Save chat message to storage
      await storage.saveChatMessage({
        sessionId,
        message,
        response,
        timestamp: Date.now(),
      });

      res.json({ response });
    } catch (error) {
      console.error("AI Chat error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid request data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to process chat request" });
    }
  });

  // Get chat history
  app.get("/api/chat/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const history = await storage.getChatHistory(sessionId);
      res.json(history);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch chat history" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
