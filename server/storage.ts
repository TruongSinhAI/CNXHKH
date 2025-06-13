import {
  type Chapter as BaseChapter,
  type Quiz,
  type ChatMessage,
  type InsertChatMessage,
} from "@shared/schema";

// Định nghĩa cấu trúc nội dung mới
type ContentBlock =
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "blockquote"; text: string };

// Mở rộng kiểu Chapter cơ sở để bao gồm cấu trúc nội dung mới
export interface Chapter extends Omit<BaseChapter, "content"> {
  content: ContentBlock[];
}

// modify the interface with any CRUD methods you might need
export interface IStorage {
  // Chapter methods
  getChapters(): Promise<Chapter[]>;
  getChapter(id: number): Promise<Chapter | undefined>;

  // Quiz methods
  getQuizByChapterId(chapterId: number): Promise<Quiz | undefined>;
  getAllQuizzes(): Promise<Quiz[]>;
  getComprehensiveQuiz(): Promise<Quiz>;

  // Chat methods
  saveChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatHistory(sessionId: string): Promise<ChatMessage[]>;
}

export class MemStorage implements IStorage {
  private chapters: Map<number, Chapter>;
  private quizzes: Map<number, Quiz>;
  private quizzesAll: Map<number, Quiz>;
  private chatMessages: Map<number, ChatMessage>;
  private currentChatId: number;

  constructor() {
    this.chapters = new Map();
    this.quizzes = new Map();
    this.quizzesAll = new Map();
    this.chatMessages = new Map();
    this.currentChatId = 1;
  }

  async initialize() {
    const { structuredChapters, structuredQuizzes, structuredQuizzesAll } = (await import("@/lib/chapters-data")).default;
    this.initializeData(structuredChapters, structuredQuizzes, structuredQuizzesAll);
  }

  private initializeData(chapters: Chapter[], quizzes: Quiz[], quizzesAll: Quiz[]) {
    // Initialize chapters
    for (const chapter of chapters) {
      this.chapters.set(chapter.id, chapter);
    }
    
    // Initialize quizzes
    for (const quiz of quizzes) {
      this.quizzes.set(quiz.chapterId, quiz);
    }

    // Initialize quizzes
    for (const quiz2 of quizzesAll) {
      this.quizzesAll.set(quiz2.chapterId, quiz2);
    }

  }

  async getChapters(): Promise<Chapter[]> {
    return Array.from(this.chapters.values()).sort((a, b) => a.order - b.order);
  }

  async getChapter(id: number): Promise<Chapter | undefined> {
    return this.chapters.get(id);
  }

  async getQuizByChapterId(chapterId: number): Promise<Quiz | undefined> {
    return Array.from(this.quizzes.values()).find(
      (quiz) => quiz.chapterId === chapterId
    );
  }

  async getAllQuizzes(): Promise<Quiz[]> {

    return Array.from(this.quizzes.values());
  }

  async getComprehensiveQuiz(): Promise<Quiz> {
    // Get all questions from all quizzes
    const allQuizzes = await this.getAllQuizzes();
    const allQuestions = allQuizzes.flatMap(quiz => quiz.questions);
    
    // Randomly shuffle questions
    const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);
    
    // Take 20 questions for the comprehensive quiz
    const selectedQuestions = shuffledQuestions.slice(0, 60);
    
    return {
      id: -1, // Special ID for comprehensive quiz
      chapterId: -1, // Special ID indicating this is not tied to a specific chapter
      title: "Bài kiểm tra tổng hợp",
      questions: selectedQuestions,
    };
  }

  async saveChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = this.currentChatId++;
    const message: ChatMessage = {
      ...insertMessage,
      id,
      timestamp: new Date()
    };
    this.chatMessages.set(id, message);
    return message;
  }

  async getChatHistory(sessionId: string): Promise<ChatMessage[]> {
    return Array.from(this.chatMessages.values())
      .filter((msg) => msg.sessionId === sessionId)
      .sort((a, b) => Number(a.timestamp ?? 0) - Number(b.timestamp ?? 0));
  }
}

const storage = new MemStorage();
await storage.initialize();
export { storage };