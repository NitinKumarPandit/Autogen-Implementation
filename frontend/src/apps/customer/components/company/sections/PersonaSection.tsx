import React from "react";
import {
  UserCircle2,
  AlertCircle,
  Lightbulb,
  Award,
  BarChart,
} from "lucide-react";
import { theme } from "../../../../../shared/utils/theme";
import { ChatButton } from "../components/ChatButton";
import { ChatDialog } from "../components/ChatDialog";
import { ICPSection } from "../components/ICPSection";
import { useChatDialog } from "../hooks/useChatDialog";
import type { Persona } from "../types";

interface PersonaSectionProps {
  persona: Persona;
  isEditing: boolean;
  onUpdate: (updatedPersona: Persona) => void;
}

export function PersonaSection({
  persona,
  isEditing,
  onUpdate,
}: PersonaSectionProps) {
  const { isOpen, setIsOpen, messages, handleSubmit } = useChatDialog();

  const handleUpdate = (field: keyof Persona, value: any) => {
    onUpdate({
      ...persona,
      [field]: value,
    });
  };

  const handleICPUpdate = (field: keyof Persona["icp"], value: string) => {
    onUpdate({
      ...persona,
      icp: {
        ...persona.icp,
        [field]: value,
      },
    });
  };

  const sections = [
    {
      label: "Problem",
      key: "problem" as const,
      icon: AlertCircle,
      color: "#ef4444",
      bgColor: "#fee2e2",
    },
    {
      label: "Solution",
      key: "solution" as const,
      icon: Lightbulb,
      color: "#eab308",
      bgColor: "#fef3c7",
    },
    {
      label: "Competitive Advantage",
      key: "advantage" as const,
      icon: Award,
      color: "#14b8a6",
      bgColor: "#ccfbf1",
    },
    {
      label: "Results",
      key: "results" as const,
      icon: BarChart,
      color: "#8b5cf6",
      bgColor: "#ede9fe",
    },
  ];

  return (
    <div
      className="rounded-xl border bg-white"
      style={{ borderColor: theme.colors.border.light }}
    >
      <div
        className="p-6 border-b"
        style={{ borderColor: theme.colors.border.light }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: theme.colors.primary.light }}
            >
              <UserCircle2
                className="w-6 h-6"
                style={{ color: theme.colors.primary.main }}
              />
            </div>
            {isEditing ? (
              <input
                type="text"
                value={persona.title}
                onChange={(e) => handleUpdate("title", e.target.value)}
                className="text-xl font-semibold w-full bg-transparent"
                style={{ color: theme.colors.text.primary }}
              />
            ) : (
              <h3
                className="text-xl font-semibold"
                style={{ color: theme.colors.text.primary }}
              >
                {persona.title}
              </h3>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-6 p-6">
        {sections.map(({ label, key, icon: Icon, color, bgColor }) => (
          <div key={key} className="flex gap-4">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: bgColor }}
            >
              <Icon className="w-6 h-6" style={{ color }} />
            </div>
            <div className="flex-1">
              <h4
                className="font-medium mb-2"
                style={{ color: theme.colors.text.primary }}
              >
                {label}
              </h4>
              {isEditing ? (
                <textarea
                  value={persona[key]}
                  onChange={(e) => handleUpdate(key, e.target.value)}
                  className="w-full p-3 rounded-lg border resize-none"
                  style={{
                    borderColor: theme.colors.border.light,
                    color: theme.colors.text.primary,
                  }}
                  rows={2}
                />
              ) : (
                <p style={{ color: theme.colors.text.secondary }}>
                  {persona[key]}
                </p>
              )}
            </div>
          </div>
        ))}

        <ICPSection
          icp={persona.icp}
          isEditing={isEditing}
          onUpdate={handleICPUpdate}
        />
      </div>

      <ChatDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        title={`Ask about ${persona.title}`}
        placeholder="Ask about problems, solutions, advantages..."
        messages={messages}
      />
    </div>
  );
}
