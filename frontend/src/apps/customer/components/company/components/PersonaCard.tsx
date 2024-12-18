import React from "react";
import {
  UserCircle2,
  AlertCircle,
  Lightbulb,
  Award,
  BarChart,
  Building2,
  Users2,
  Edit2,
  PlayCircle
} from "lucide-react";
import { theme } from "../../../../../shared/utils/theme";
import type { Persona } from "../types";

interface PersonaCardProps {
  persona: Persona;
  isEditing: boolean;
  onUpdate: (updatedPersona: Persona) => void;
  onEdit: () => void;
  onLaunchCampaign: () => void;
}

export function PersonaCard({
  persona,
  isEditing,
  onUpdate,
  onEdit,
  onLaunchCampaign,
}: PersonaCardProps) {
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
      className="rounded-xl border bg-white h-full"
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
          {!isEditing && (
            <div className="flex gap-2">
              <button
                onClick={onEdit}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors"
                style={{
                  backgroundColor: theme.colors.background.secondary,
                  color: theme.colors.text.primary,
                }}
              >
                <Edit2 className="w-4 h-4" />
                <span className="text-sm">Edit</span>
              </button>
              <button
                onClick={onLaunchCampaign}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-white transition-colors"
                style={{
                  backgroundColor: theme.colors.primary.main,
                }}
              >
                <PlayCircle className="w-4 h-4" />
                <span className="text-sm">Launch Campaign</span>
              </button>
            </div>
          )}
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

        {/* ICP Section */}
        <div className="grid gap-6 mt-6">
          <div className="flex gap-4">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#f0fdf4" }}
            >
              <Building2 className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h4
                className="font-medium mb-2"
                style={{ color: theme.colors.text.primary }}
              >
                Company Attributes
              </h4>
              {isEditing ? (
                <textarea
                  value={persona.icp.companyAttributes}
                  onChange={(e) =>
                    handleICPUpdate("companyAttributes", e.target.value)
                  }
                  className="w-full p-3 rounded-lg border resize-none"
                  style={{
                    borderColor: theme.colors.border.light,
                    color: theme.colors.text.primary,
                  }}
                  rows={2}
                />
              ) : (
                <p style={{ color: theme.colors.text.secondary }}>
                  {persona.icp.companyAttributes}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#f0f9ff" }}
            >
              <Users2 className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4
                className="font-medium mb-2"
                style={{ color: theme.colors.text.primary }}
              >
                Contact Attributes
              </h4>
              {isEditing ? (
                <textarea
                  value={persona.icp.contactAttributes}
                  onChange={(e) =>
                    handleICPUpdate("contactAttributes", e.target.value)
                  }
                  className="w-full p-3 rounded-lg border resize-none"
                  style={{
                    borderColor: theme.colors.border.light,
                    color: theme.colors.text.primary,
                  }}
                  rows={2}
                />
              ) : (
                <p style={{ color: theme.colors.text.secondary }}>
                  {persona.icp.contactAttributes}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}