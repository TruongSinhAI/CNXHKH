import { chapters, quizzes, chatMessages, type Chapter, type Quiz, type ChatMessage, type InsertChapter, type InsertQuiz, type InsertChatMessage } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // Chapter methods
  getChapters(): Promise<Chapter[]>;
  getChapter(id: number): Promise<Chapter | undefined>;
  
  // Quiz methods
  getQuizByChapterId(chapterId: number): Promise<Quiz | undefined>;
  
  // Chat methods
  saveChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatHistory(sessionId: string): Promise<ChatMessage[]>;
}

export class MemStorage implements IStorage {
  private chapters: Map<number, Chapter>;
  private quizzes: Map<number, Quiz>;
  private chatMessages: Map<number, ChatMessage>;
  private currentId: number;
  private currentChatId: number;

  constructor() {
    this.chapters = new Map();
    this.quizzes = new Map();
    this.chatMessages = new Map();
    this.currentId = 1;
    this.currentChatId = 1;
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize chapters data
    const chaptersData: Chapter[] = [
      {
        id: 1,
        title: "Giới Thiệu Cơ Bản",
        description: "Tìm hiểu các khái niệm cơ bản và nền tảng kiến thức",
        content: "Nội dung chi tiết về các khái niệm cơ bản...",
        duration: 30,
        order: 1,
        isLocked: false,
      },
      {
        id: 2,
        title: "Lý Thuyết Nâng Cao", 
        description: "Nghiên cứu sâu hơn về các nguyên lý và phương pháp",
        content: "Nội dung về lý thuyết nâng cao...",
        duration: 45,
        order: 2,
        isLocked: false,
      },
      {
        id: 3,
        title: "Ứng Dụng Thực Tế",
        description: "Áp dụng kiến thức vào các tình huống thực tế",
        content: "Nội dung về ứng dụng thực tế...",
        duration: 50,
        order: 3,
        isLocked: false,
      },
      {
        id: 4,
        title: "Phân Tích Nâng Cao",
        description: "Học cách phân tích và đánh giá phức tạp",
        content: "Nội dung về phân tích nâng cao...",
        duration: 60,
        order: 4,
        isLocked: true,
      },
      {
        id: 5,
        title: "Nghiên Cứu Tình Huống",
        description: "Phân tích các tình huống thực tế và giải pháp",
        content: "Nội dung về nghiên cứu tình huống...",
        duration: 75,
        order: 5,
        isLocked: true,
      },
      {
        id: 6,
        title: "Dự Án Thực Hành",
        description: "Thực hiện dự án hoàn chỉnh từ đầu đến cuối",
        content: "Nội dung về dự án thực hành...",
        duration: 90,
        order: 6,
        isLocked: true,
      },
      {
        id: 7,
        title: "Tổng Kết & Đánh Giá",
        description: "Ôn tập tổng hợp và đánh giá cuối khóa",
        content: "Nội dung tổng kết và đánh giá...",
        duration: 120,
        order: 7,
        isLocked: true,
      },
    ];

    chaptersData.forEach(chapter => {
      this.chapters.set(chapter.id, chapter);
    });

    // Initialize quiz data
    const quizzesData: Quiz[] = [
      {
        id: 1,
        chapterId: 1,
        title: "Bài Kiểm Tra Chương 1",
        questions: [
          {
            id: "q1",
            text: "Khái niệm cơ bản nhất trong lĩnh vực này là gì?",
            options: [
              { value: "A", text: "Khái niệm A" },
              { value: "B", text: "Khái niệm B" },
              { value: "C", text: "Khái niệm C" },
              { value: "D", text: "Khái niệm D" }
            ],
            correctAnswer: "A",
            explanation: "Khái niệm A là nền tảng cơ bản nhất..."
          }
        ]
      },
      {
        id: 2,
        chapterId: 2,
        title: "Bài Kiểm Tra Chương 2",
        questions: [
          {
            id: "q2",
            text: "Nguyên lý nâng cao nào được áp dụng phổ biến nhất?",
            options: [
              { value: "A", text: "Nguyên lý X" },
              { value: "B", text: "Nguyên lý Y" },
              { value: "C", text: "Nguyên lý Z" },
              { value: "D", text: "Nguyên lý W" }
            ],
            correctAnswer: "B",
            explanation: "Nguyên lý Y được áp dụng rộng rãi vì..."
          }
        ]
      },
      {
        id: 3,
        chapterId: 3,
        title: "Bài Kiểm Tra Chương 3",
        questions: [
          {
            id: "q3",
            text: "Trong các phương pháp sau, đâu là cách tốt nhất để giải quyết vấn đề phức tạp?",
            options: [
              { value: "A", text: "Chia nhỏ vấn đề thành các phần nhỏ hơn và giải quyết từng phần" },
              { value: "B", text: "Tìm kiếm giải pháp trên internet và áp dụng ngay" },
              { value: "C", text: "Bỏ qua vấn đề và chuyển sang làm việc khác" },
              { value: "D", text: "Nhờ người khác giải quyết hoàn toàn" }
            ],
            correctAnswer: "A",
            explanation: "Chia nhỏ vấn đề phức tạp thành các phần nhỏ hơn là một trong những phương pháp hiệu quả nhất để giải quyết vấn đề."
          }
        ]
      }
    ];

    quizzesData.forEach(quiz => {
      this.quizzes.set(quiz.id, quiz);
    });

    this.currentId = chaptersData.length + 1;
  }

  async getChapters(): Promise<Chapter[]> {
    return Array.from(this.chapters.values()).sort((a, b) => a.order - b.order);
  }

  async getChapter(id: number): Promise<Chapter | undefined> {
    return this.chapters.get(id);
  }

  async getQuizByChapterId(chapterId: number): Promise<Quiz | undefined> {
    return Array.from(this.quizzes.values()).find(quiz => quiz.chapterId === chapterId);
  }

  async saveChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = this.currentChatId++;
    const message: ChatMessage = { ...insertMessage, id };
    this.chatMessages.set(id, message);
    return message;
  }

  async getChatHistory(sessionId: string): Promise<ChatMessage[]> {
    return Array.from(this.chatMessages.values())
      .filter(msg => msg.sessionId === sessionId)
      .sort((a, b) => a.timestamp - b.timestamp);
  }
}

export const storage = new MemStorage();
