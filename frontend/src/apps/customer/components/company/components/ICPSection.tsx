import React from "react";
import { Building2, Users2 } from "lucide-react";
import { theme } from "../../../../../shared/utils/theme";
import type { ICP } from "../types";

interface ICPSectionProps {
  icp: ICP;
  isEditing: boolean;
  onUpdate: (field: keyof ICP, value: string) => void;
}

export function ICPSection({ icp, isEditing, onUpdate }: ICPSectionProps) {
  return (
    <div className="mt-6 grid gap-6">
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
              value={icp.companyAttributes}
              onChange={(e) => onUpdate("companyAttributes", e.target.value)}
              className="w-full p-3 rounded-lg border resize-none"
              style={{
                borderColor: theme.colors.border.light,
                color: theme.colors.text.primary,
              }}
              rows={2}
            />
          ) : (
            <p style={{ color: theme.colors.text.secondary }}>
              {icp.companyAttributes}
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
              value={icp.contactAttributes}
              onChange={(e) => onUpdate("contactAttributes", e.target.value)}
              className="w-full p-3 rounded-lg border resize-none"
              style={{
                borderColor: theme.colors.border.light,
                color: theme.colors.text.primary,
              }}
              rows={2}
            />
          ) : (
            <p style={{ color: theme.colors.text.secondary }}>
              {icp.contactAttributes}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
