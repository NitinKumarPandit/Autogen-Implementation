import React from "react";
import { Users, Calendar, Building2, Briefcase } from "lucide-react";
import { theme } from "../../../../../shared/utils/theme";
import { ChatButton } from "../components/ChatButton";
import { useChatDialog } from "../hooks/useChatDialog";
import type { CompanyData } from "../types";

interface CompanyMetricsProps {
  data: CompanyData;
  isEditing: boolean;
  onUpdate: (data: Partial<CompanyData>) => void;
}

const metrics = [
  {
    key: "employeeSize",
    label: "Company Size",
    icon: Users,
    color: "#ef4444",
    bgColor: "#fee2e2",
  },
  {
    key: "yearFounded",
    label: "Founded",
    icon: Calendar,
    color: "#14b8a6",
    bgColor: "#ccfbf1",
  },
  {
    key: "headquarters",
    label: "Headquarters",
    icon: Building2,
    color: "#8b5cf6",
    bgColor: "#ede9fe",
  },
  {
    key: "industry",
    label: "Industry",
    icon: Briefcase,
    color: "#eab308",
    bgColor: "#fef3c7",
  },
];

export function CompanyMetrics({
  data,
  isEditing,
  onUpdate,
}: CompanyMetricsProps) {
  const { isOpen, setIsOpen, messages, handleSubmit } = useChatDialog();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2
          className="text-2xl font-semibold"
          style={{ color: theme.colors.text.primary }}
        >
          Company Metrics
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map(({ key, label, icon: Icon, color, bgColor }) => (
          <div
            key={key}
            className="p-6 rounded-xl border bg-white"
            style={{ borderColor: theme.colors.border.light }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: bgColor }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <h3
                className="font-medium"
                style={{ color: theme.colors.text.primary }}
              >
                {label}
              </h3>
            </div>

            {isEditing ? (
              <input
                type={key === "yearFounded" ? "number" : "text"}
                value={
                  data[
                    key as keyof CompanyData[
                      | "headquarters"
                      | "employeeSize"
                      | "industry"
                      | "yearFounded"]
                  ] || ""
                }
                onChange={(e) =>
                  onUpdate({
                    [key]:
                      key === "yearFounded"
                        ? parseInt(e.target.value)
                        : e.target.value,
                  })
                }
                className="text-2xl font-semibold w-full bg-transparent"
                style={{ color: theme.colors.text.primary }}
              />
            ) : (
              <p
                className="text-2xl font-semibold"
                style={{ color: theme.colors.text.primary }}
              >
                {data[
                  key as keyof CompanyData[
                    | "headquarters"
                    | "employeeSize"
                    | "industry"
                    | "yearFounded"]
                ] || "-"}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
