import React from 'react';
import { Upload, Link, Tag, DollarSign } from 'lucide-react';
import { theme } from '../../../../shared/utils/theme';

interface PublishStepProps {
  formData: {
    icon: string;
    screenshots: string[];
    categories: string[];
    pricing: string;
    description: string;
  };
  onChange: (field: string, value: any) => void;
}

export function PublishStep({ formData, onChange }: PublishStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label
          className="block mb-2"
          style={{ color: theme.colors.text.secondary }}
        >
          Agent Icon
        </label>
        <div className="flex items-center gap-4">
          {formData.icon ? (
            <img
              src={formData.icon}
              alt="Agent Icon"
              className="w-16 h-16 rounded-lg object-cover border"
              style={{ borderColor: theme.colors.border.light }}
            />
          ) : (
            <div
              className="w-16 h-16 rounded-lg border-2 border-dashed flex items-center justify-center"
              style={{ borderColor: theme.colors.border.light }}
            >
              <Upload
                className="w-6 h-6"
                style={{ color: theme.colors.text.secondary }}
              />
            </div>
          )}
          <button
            className="px-4 py-2 rounded-lg text-sm"
            style={{
              backgroundColor: theme.colors.primary.light,
              color: theme.colors.primary.main,
            }}
          >
            Upload Icon
          </button>
        </div>
      </div>

      <div>
        <label
          className="block mb-2"
          style={{ color: theme.colors.text.secondary }}
        >
          Screenshots
        </label>
        <div className="flex items-center gap-4">
          <div
            className="w-32 h-24 rounded-lg border-2 border-dashed flex items-center justify-center"
            style={{ borderColor: theme.colors.border.light }}
          >
            <Upload
              className="w-6 h-6"
              style={{ color: theme.colors.text.secondary }}
            />
          </div>
          <button
            className="px-4 py-2 rounded-lg text-sm"
            style={{
              backgroundColor: theme.colors.primary.light,
              color: theme.colors.primary.main,
            }}
          >
            Add Screenshots
          </button>
        </div>
      </div>

      <div>
        <label
          className="block mb-2"
          style={{ color: theme.colors.text.secondary }}
        >
          Categories
        </label>
        <div className="flex flex-wrap gap-2">
          {formData.categories.map((category) => (
            <span
              key={category}
              className="px-3 py-1 rounded-full text-sm flex items-center gap-1"
              style={{
                backgroundColor: theme.colors.primary.light,
                color: theme.colors.primary.main,
              }}
            >
              <Tag className="w-4 h-4" />
              {category}
            </span>
          ))}
          <button
            className="px-3 py-1 rounded-full text-sm border"
            style={{ borderColor: theme.colors.border.light }}
          >
            Add Category
          </button>
        </div>
      </div>

      <div>
        <label
          className="block mb-2"
          style={{ color: theme.colors.text.secondary }}
        >
          Pricing Model
        </label>
        <div className="flex items-center gap-2">
          <DollarSign
            className="w-5 h-5"
            style={{ color: theme.colors.text.secondary }}
          />
          <select
            value={formData.pricing}
            onChange={(e) => onChange('pricing', e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border"
            style={{ borderColor: theme.colors.border.light }}
          >
            <option value="free">Free</option>
            <option value="subscription">Subscription</option>
            <option value="usage">Usage-based</option>
          </select>
        </div>
      </div>

      <div>
        <label
          className="block mb-2"
          style={{ color: theme.colors.text.secondary }}
        >
          Marketplace Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => onChange('description', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border"
          style={{ borderColor: theme.colors.border.light }}
          rows={4}
          placeholder="Describe your agent's capabilities and benefits..."
        />
      </div>
    </div>
  );
}
