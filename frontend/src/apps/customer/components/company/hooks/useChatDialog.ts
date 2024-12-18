import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function useChatDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = async (message: string) => {
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: message }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `I understand you want to know more about "${message}". How can I help you with that specifically?`
      }]);
    }, 1000);
  };

  return {
    isOpen,
    setIsOpen,
    messages,
    handleSubmit
  };
}