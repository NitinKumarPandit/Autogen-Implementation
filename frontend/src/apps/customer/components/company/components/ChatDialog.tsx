import React, { useState } from "react";
import { X, Send } from "lucide-react";
import { theme } from "../../../../../shared/utils/theme";

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (message: string) => void;
  title: string;
  placeholder?: string;
  messages: Array<{
    role: "user" | "assistant";
    content: string;
  }>;
}

export function ChatDialog({
  isOpen,
  onClose,
  onSubmit,
  title,
  placeholder = "Type your message...",
  messages,
}: ChatDialogProps) {
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center p-4 z-50">
      <div
        className="bg-white w-full max-w-lg rounded-xl shadow-xl overflow-hidden"
        style={{ maxHeight: "calc(100vh - 2rem)" }}
      >
        <div
          className="p-4 border-b flex items-center justify-between"
          style={{ borderColor: theme.colors.border.light }}
        >
          <h3
            className="font-semibold"
            style={{ color: theme.colors.text.primary }}
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X
              className="w-5 h-5"
              style={{ color: theme.colors.text.secondary }}
            />
          </button>
        </div>

        <div className="p-4 h-96 overflow-y-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-4 border-t"
          style={{ borderColor: theme.colors.border.light }}
        >
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-4 py-2 rounded-lg border"
              style={{ borderColor: theme.colors.border.light }}
            />
            <button
              type="submit"
              className="p-2 rounded-lg"
              style={{
                backgroundColor: theme.colors.primary.main,
                color: "#FFFFFF",
              }}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
