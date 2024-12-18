import { v4 as uuidv4 } from 'uuid';
import type { Message, SystemMessage, TypingMessage, User, MessageContent } from '../types';

export function createMessage(content: MessageContent, sender: User): Message {
  return {
    id: uuidv4(),
    content,
    sender,
    timestamp: new Date(),
    isRead: false,
    type: 'message',
  };
}

export function createSystemMessage(content: string): SystemMessage {
  return {
    id: uuidv4(),
    content,
    timestamp: new Date(),
    type: 'system',
  };
}

export function createTypingMessage(sender: User): TypingMessage {
  return {
    id: uuidv4(),
    sender,
    timestamp: new Date(),
    type: 'typing',
  };
}