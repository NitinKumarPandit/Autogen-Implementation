import { Message, User } from "../../../types";
import { websocketService } from "./websocketService";

class ChatService {
  chatMessages: Message[] = [];

  async sendUserInput(
    content: string,
    sender: User,
    recipient: User
  ): Promise<void> {
    try {
      await websocketService.sendMessage({
        type: "user_message",
        content: content,
      });
    } catch (error) {
      console.error("Error sending user input:", error);
      throw error;
    }
  }
}

export const chatService = new ChatService();
