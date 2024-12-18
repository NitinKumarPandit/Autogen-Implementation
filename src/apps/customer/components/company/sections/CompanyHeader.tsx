import React from "react";
import { Edit2, Check, Upload } from "lucide-react";
import { theme } from "../../../../../shared/utils/theme";
import type { CompanyData } from "../types";

interface CompanyHeaderProps {
  data: CompanyData;
  isEditing: boolean;
  onUpdate: (data: Partial<CompanyData>) => void;
  onToggleEdit: () => void;
}

export function CompanyHeader({
  data,
  isEditing,
  onUpdate,
  onToggleEdit,
}: CompanyHeaderProps) {
  return (
    <div className="relative">
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={onToggleEdit}
          className="p-2 rounded-lg transition-colors"
          style={{
            backgroundColor: isEditing
              ? theme.colors.primary.main
              : theme.colors.background.secondary,
            color: isEditing ? "#FFFFFF" : theme.colors.text.primary,
          }}
        >
          {isEditing ? (
            <Check className="w-5 h-5" />
          ) : (
            <Edit2 className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600" />

      <div className="px-8 pb-8">
        <div className="flex items-end -mt-16 gap-6">
          <div className="relative">
            {isEditing ? (
              <label className="block w-32 h-32 rounded-xl border-2 border-dashed cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      // Handle file upload
                      onUpdate({ logo: URL.createObjectURL(file) });
                    }
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                {data.logo && (
                  <img
                    src={data.logo}
                    alt={data.name}
                    className="w-full h-full object-cover rounded-xl opacity-50"
                  />
                )}
              </label>
            ) : (
              <div className="w-32 h-32 bg-white rounded-xl shadow-sm border overflow-hidden">
                {data.logo && (
                  <img
                    src={data.logo}
                    alt={data.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            )}
          </div>

          <div className="flex-1 pt-14">
            {isEditing ? (
              <input
                type="text"
                value={data.name}
                onChange={(e) => onUpdate({ name: e.target.value })}
                className="text-3xl font-bold w-full bg-transparent border-b"
                style={{
                  color: theme.colors.text.primary,
                  borderColor: theme.colors.border.light,
                }}
              />
            ) : (
              <h1
                className="text-3xl font-bold"
                style={{ color: theme.colors.text.primary }}
              >
                {data.name}
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
