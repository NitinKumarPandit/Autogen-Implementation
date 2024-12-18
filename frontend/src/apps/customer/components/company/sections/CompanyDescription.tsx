import React from "react";
import { theme } from "../../../../../shared/utils/theme";
import { ChatButton } from "../components/ChatButton";
import { ChatDialog } from "../components/ChatDialog";
import { useChatDialog } from "../hooks/useChatDialog";
import type { CompanyData } from "../types";

interface CompanyDescriptionProps {
  data: CompanyData;
  isEditing: boolean;
  onUpdate: (data: Partial<CompanyData>) => void;
}

export function CompanyDescription({
  data,
  isEditing,
  onUpdate,
}: CompanyDescriptionProps) {
  const { isOpen, setIsOpen, messages, handleSubmit } = useChatDialog();
  const formattedDescription = data.description.replace(/\n/g, "<br/>");

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2
          className="text-2xl font-semibold"
          style={{ color: theme.colors.text.primary }}
        >
          About
        </h2>
      </div>

      {isEditing ? (
        <textarea
          value={data.description}
          onChange={(e) => onUpdate({ description: e.target.value })}
          className="w-full p-4 rounded-lg border min-h-[120px] resize-none"
          style={{
            borderColor: theme.colors.border.light,
            color: theme.colors.text.primary,
          }}
        />
      ) : (
        <div
          className="text-lg leading-relaxed"
          style={{ color: theme.colors.text.secondary }}
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        >
          {/* {data.description} */}
        </div>
      )}
    </div>
  );
}
