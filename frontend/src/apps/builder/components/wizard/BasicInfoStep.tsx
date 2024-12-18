import React from 'react';
import { Info } from 'lucide-react';
import { theme } from '../../../../shared/utils/theme';

interface BasicInfoStepProps {
  formData: {
    name: string;
    role: string;
    backstory: string;
  };
  onChange: (field: string, value: string) => void;
}

export function BasicInfoStep({ formData, onChange }: BasicInfoStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label
          className="block mb-2"
          style={{ color: theme.colors.text.secondary }}
        >
          Agent Name *
          <div className="relative">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => onChange('name', e.target.value)}
              className="w-full px-4 py-2 rounded-lg border mt-1"
              style={{ borderColor: theme.colors.border.light }}
              placeholder="e.g., Sales Assistant, Content Writer"
            />
            <div className="absolute right-3 top-3 group">
              <Info className="w-4 h-4 text-gray-400" />
              <div className="hidden group-hover:block absolute right-0 top-6 w-64 p-2 bg-white rounded-lg shadow-lg border text-sm">
                Choose a clear, descriptive name that reflects the agent's
                primary function
              </div>
            </div>
          </div>
        </label>
      </div>

      <div>
        <label
          className="block mb-2"
          style={{ color: theme.colors.text.secondary }}
        >
          Role *
          <div className="relative">
            <input
              type="text"
              value={formData.role}
              onChange={(e) => onChange('role', e.target.value)}
              className="w-full px-4 py-2 rounded-lg border mt-1"
              style={{ borderColor: theme.colors.border.light }}
              placeholder="e.g., Sales Support, Content Creation"
            />
            <div className="absolute right-3 top-3 group">
              <Info className="w-4 h-4 text-gray-400" />
              <div className="hidden group-hover:block absolute right-0 top-6 w-64 p-2 bg-white rounded-lg shadow-lg border text-sm">
                Define the agent's primary function and responsibilities
              </div>
            </div>
          </div>
        </label>
      </div>

      <div>
        <label
          className="block mb-2"
          style={{ color: theme.colors.text.secondary }}
        >
          Backstory *
          <div className="relative">
            <textarea
              value={formData.backstory}
              onChange={(e) => onChange('backstory', e.target.value)}
              className="w-full px-4 py-2 rounded-lg border mt-1"
              style={{ borderColor: theme.colors.border.light }}
              rows={4}
              placeholder="Provide context and background for the agent..."
            />
            <div className="absolute right-3 top-3 group">
              <Info className="w-4 h-4 text-gray-400" />
              <div className="hidden group-hover:block absolute right-0 top-6 w-64 p-2 bg-white rounded-lg shadow-lg border text-sm">
                Create a compelling backstory that explains the agent's
                expertise and approach
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
