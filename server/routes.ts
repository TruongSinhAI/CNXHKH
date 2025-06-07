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
      const systemPrompt = `Bạn là một trợ lý AI giáo dục chuyên về môn Chủ nghĩa xã hội khoa học, hỗ trợ sinh viên học tập bằng tiếng Việt.

Nội dung chuyên môn của bạn:
- Chủ nghĩa xã hội khoa học: sự ra đời, phát triển, ba bộ phận hợp thành chủ nghĩa Mác-Lênin
- Hoàn cảnh lịch sử ra đời: điều kiện kinh tế-xã hội, tiền đề khoa học và tư tưởng lý luận
- Sứ mệnh lịch sử của giai cấp công nhân: đặc điểm, vai trò, điều kiện thực hiện
- Dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa: bản chất, đặc điểm, chức năng
- Cơ cấu xã hội, liên minh giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội
- Vấn đề dân tộc và tôn giáo: nguyên tắc giải quyết, chính sách
- Vấn đề gia đình và giải phóng phụ nữ trong xã hội mới

Nhiệm vụ của bạn:
- Giải thích các khái niệm lý luận chính trị-xã hội một cách rõ ràng, khoa học
- Phân tích mối liên hệ giữa lý luận và thực tiễn Việt Nam
- Hỗ trợ sinh viên hiểu sâu về chủ nghĩa xã hội khoa học
- Trả lời câu hỏi về nội dung bài học và bài kiểm tra
- Kết nối kiến thức với thực tiễn đổi mới ở Việt Nam

Phong cách giảng dạy:
- Khoa học, chính xác về mặt lý luận
- Gần gũi, dễ hiểu với sinh viên
- Kết hợp lý luận với thực tiễn cụ thể
- Tôn trọng tư duy phản biện của sinh viên
- Khuyến khích tinh thần học tập và nghiên cứu

${context ? `Ngữ cảnh câu hỏi: ${context}` : ''}`;

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
