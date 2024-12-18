import { AgentResponse, Message, User } from "../../../types";

export class MessageFactory {
  static createUserMessage(content: string, sender: User): Message {
    return {
      id: crypto.randomUUID(),
      content: { type: "text", data: content },
      sender,
      timestamp: new Date(),
      isRead: true,
      type: "message",
    };
  }

  static createAgentMessage(content: AgentResponse, sender: User): Message {
    return {
      id: crypto.randomUUID(),
      content: {
        type: "agent-response",
        data: content,
      },
      sender,
      timestamp: new Date(),
      isRead: false,
      type: "message",
    };
  }

  static createErrorMessage(error: any, sender: User): Message {
    return {
      id: crypto.randomUUID(),
      content: {
        type: "agent-response",
        data: {
          reasoning: `Error: ${error}`,
        },
      },
      sender,
      timestamp: new Date(),
      isRead: false,
      type: "message",
    };
  }
}
