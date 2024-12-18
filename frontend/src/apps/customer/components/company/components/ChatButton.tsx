import React from "react";
import { MessageSquare } from "lucide-react";
import { theme } from "../../../../../shared/utils/theme";

interface ChatButtonProps {
  onClick: () => void;
}

export function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg transition-colors flex items-center gap-2"
      style={{
        backgroundColor: theme.colors.primary.light,
        color: theme.colors.primary.main,
      }}
    >
      <MessageSquare className="w-4 h-4" />
      <span className="text-sm font-medium">Ask AI</span>
    </button>
  );
}
