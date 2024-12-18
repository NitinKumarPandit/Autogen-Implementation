import React from "react";
import type { User } from "../types";

interface TypingIndicatorProps {
  sender: User;
}

export function TypingIndicator({ sender }: TypingIndicatorProps) {
  return (
    <div className="flex items-start space-x-2 mb-4">
      <i className="bi bi-person-circle -8 h-8 " />
      <div className="flex flex-col">
        <span className="text-sm text-gray-600 mb-1">{sender.name}</span>
        <div className="bg-gray-100 rounded-2xl px-4 py-2 rounded-bl-none">
          <div className="flex space-x-1">
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
