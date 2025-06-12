import 'dotenv/config';
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Sửa lại import
import { z } from "zod";
import { readFileSync } from "fs";
// import { c } from 'node_modules/vite/dist/node/types.d-aGj9QkWt'; // <-- Loại bỏ import không sử dụng

// Verify environment variables are loaded
console.log("Environment check - GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "present" : "missing");

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY environment variable is not set. Please add it to your .env file");
}

// Sử dụng GoogleGenerativeAI thay vì GoogleGenAI (theo tài liệu mới nhất)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const file = readFileSync('./shared/giaotrinh.txt', 'utf-8');
console.log(file.length, "characters loaded from giaotrinh.txt");

const systemPrompt = `Bạn là Cô Ngân, giảng viên môn Chủ nghĩa xã hội khoa học. Nhiệm vụ của bạn là hỗ trợ học sinh hiểu sâu về các nội dung thuộc Chủ nghĩa xã hội khoa học, dựa hoàn toàn trên giáo trình tôi cung cấp (${file}).

Trong mọi câu trả lời, chỉ đưa ra thông tin chính xác và phù hợp với nội dung trong giáo trình, tuyệt đối không đưa ra kiến thức ngoài phạm vi đó.

Hãy phản hồi dưới giọng điệu thân thiện, dễ hiểu và mang tính hướng dẫn như một giảng viên đang trò chuyện trực tiếp với học sinh. Tránh dùng cụm từ như “Theo giáo trình mà em cung cấp”; thay vào đó, hãy bắt đầu mỗi phần giải thích theo kiểu: “Cô Ngân sẽ giải đáp...”, “Cô Ngân muốn em lưu ý rằng...”, hoặc các cách diễn đạt tự nhiên tương tự.

Hạn chế tối đa ngôn ngữ mang tính máy móc hay sao chép nguyên văn, hãy diễn đạt lại theo cách cô giáo giảng bài để học sinh dễ tiếp thu. Hãy in đậm các thông tin mà học sinh cần lưu ý. ##Kết thúc message bằng [DONE]`;


const generationConfig = {
  responseMimeType: 'text/plain',
};
const safetySettings = []; // Cấu hình an toàn có thể thêm ở đây nếu cần

// Model mới nhất và ổn định hơn
const modelName = 'gemini-1.5-flash-latest';

const chatRequestSchema = z.object({
  message: z.string().min(1),
  sessionId: z.string().min(1),
  // Lược bỏ context và messages vì prompt hệ thống đã chứa context
  // và chúng ta sẽ xây dựng lại lịch sử từ sessionId nếu cần
  history: z.array(
    z.object({
      role: z.enum(['user', 'model']),
      parts: z.array(z.object({ text: z.string() })),
    })
  ).optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // ... (các routes /api/chapters, /api/quiz không đổi)

  app.get("/api/chapters", async (req, res) => {
    try {
      const chapters = await storage.getChapters();
      res.json(chapters);
    } catch (error) {
      console.error("Failed to fetch chapters:", error);
      res.status(500).json({ message: "Failed to fetch chapters" });
    }
  });

  app.get("/api/chapters/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid chapter ID" });
      const chapter = await storage.getChapter(id);
      if (!chapter) return res.status(404).json({ message: "Chapter not found" });
      res.json(chapter);
    } catch (error) {
      console.error("Failed to fetch chapter:", error);
      res.status(500).json({ message: "Failed to fetch chapter" });
    }
  });

  app.get("/api/chapters/:id/quiz", async (req, res) => {
    try {
      const chapterId = parseInt(req.params.id);
      if (isNaN(chapterId)) return res.status(400).json({ message: "Invalid chapter ID" });
      const quiz = await storage.getQuizByChapterId(chapterId);
      if (!quiz) return res.status(404).json({ message: "Quiz not found for this chapter" });
      res.json(quiz);
    } catch (error) {
      console.error("Failed to fetch quiz:", error);
      res.status(500).json({ message: "Failed to fetch quiz" });
    }
  });

  app.get("/api/comprehensive-quiz", async (req, res) => {
    try {
      const quiz = await storage.getComprehensiveQuiz();
      res.json(quiz);
    } catch (error) {
      console.error("Failed to fetch comprehensive quiz:", error);
      res.status(500).json({ message: "Failed to fetch comprehensive quiz" });
    }
  });

  // Streaming chat endpoint
  app.post("/api/chat", async (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders(); // Gửi headers ngay lập tức

    let clientAborted = false;
    // req.on('close', () => {
    //   clientAborted = true;
    //   console.log('Client disconnected, aborting stream.');
    // });

    try {
      const validatedData = chatRequestSchema.parse(req.body);
      const { message, history = [] } = validatedData;

      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: {
          role: "user", // System instruction nên có role user hoặc model
          parts: [{ text: systemPrompt }],
        },
      });

      const chat = model.startChat({
        history,
        generationConfig,
        safetySettings,
      });

      const result = await chat.sendMessageStream(message);

      let fullResponse = '';
      for await (const chunk of result.stream) {
        if (clientAborted) break;

        const chunkText = chunk.text();
        const doneTag = '[DONE]';
        if (chunkText.endsWith(doneTag)) {
          // Kết thúc chunk bằng [DONE], loại bỏ nó khỏi fullResponse
          fullResponse += chunkText.slice(0, -doneTag.length).trimEnd();
          res.write(`data: ${JSON.stringify({ text: chunkText })}\n\n`);
          clientAborted = true; // Đánh dấu là đã hoàn tất
          break; // Kết thúc vòng lặp
        }

        if (chunkText) {
      
          fullResponse += chunkText;
          // **TỐI ƯU HÓA: Gửi ngay lập tức, không cần buffer**
          res.write(`data: ${JSON.stringify({ text: chunkText })}\n\n`);

        }
      }

      if (!clientAborted) {
          // Lưu vào storage khi đã hoàn tất
          // (Lưu ý: bạn có thể muốn lưu cả lịch sử được gửi lên để có context đầy đủ)
          await storage.saveChatMessage({
            sessionId: validatedData.sessionId,
            message: message,
            response: fullResponse,
            timestamp: new Date(),
          });

          // Gửi tín hiệu kết thúc
          res.write('data: [DONE]\n\n');
      }
    } catch (error) {
      console.error("AI Chat error:", error);
      const errorMessage = error instanceof z.ZodError
        ? "Invalid request data"
        : "Failed to process chat request";
      res.write(`data: ${JSON.stringify({ error: errorMessage })}\n\n`);
      res.write('data: [DONE]\n\n');
    } finally {
        res.end();
    }
  });

  // ... (route /api/chat/:sessionId không đổi)
  app.get("/api/chat/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const history = await storage.getChatHistory(sessionId);
      res.json(history);
    } catch (error) {
      console.error("Failed to fetch chat history:", error);
      res.status(500).json({ message: "Failed to fetch chat history" });
    }
  });


  const httpServer = createServer(app);
  return httpServer;
}