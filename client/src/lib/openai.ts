// This file contains utilities for OpenAI integration
// The actual API calls are handled in the backend for security

export interface ChatRequest {
  message: string;
  sessionId: string;
  context?: string;
}

export interface ChatResponse {
  response: string;
}

// Generate a unique session ID for chat
export function generateSessionId(): string {
  return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Format Vietnamese text for better readability
export function formatVietnameseText(text: string): string {
  return text
    .replace(/\n\n/g, '\n')
    .replace(/\s+/g, ' ')
    .trim();
}

// Extract context from quiz questions for AI assistance
export function extractQuizContext(questionText: string, options: Array<{value: string, text: string}>): string {
  const optionsText = options.map(opt => `${opt.value}. ${opt.text}`).join('\n');
  return `Câu hỏi: ${questionText}\n\nCác lựa chọn:\n${optionsText}`;
}
