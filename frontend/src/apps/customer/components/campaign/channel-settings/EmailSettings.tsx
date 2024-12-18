import React from 'react';
import { theme } from '../../../../../shared/utils/theme';

interface EmailSettingsProps {
  settings?: {
    subject: string;
    template: string;
    followUpDays: number[];
  };
  onChange: (settings: any) => void;
}

export function EmailSettings({ settings = { subject: '', template: '', followUpDays: [3, 7] }, onChange }: EmailSettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4" style={{ color: theme.colors.text.primary }}>
          Email Settings
        </h3>
      </div>

      <div>
        <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
          Email Subject
          <input
            type="text"
            value={settings.subject}
            onChange={e => onChange({ ...settings, subject: e.target.value })}
            className="w-full px-4 py-2 mt-1 rounded-lg border"
            style={{ borderColor: theme.colors.border.light }}
            placeholder="Enter email subject line"
          />
        </label>
      </div>

      <div>
        <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
          Email Template
          <textarea
            value={settings.template}
            onChange={e => onChange({ ...settings, template: e.target.value })}
            className="w-full px-4 py-2 mt-1 rounded-lg border"
            style={{ borderColor: theme.colors.border.light }}
            rows={6}
            placeholder="Enter email template content"
          />
        </label>
      </div>

      <div>
        <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
          Follow-up Days
          <div className="flex gap-2 mt-1">
            {settings.followUpDays.map((day, index) => (
              <input
                key={index}
                type="number"
                value={day}
                onChange={e => {
                  const newDays = [...settings.followUpDays];
                  newDays[index] = parseInt(e.target.value);
                  onChange({ ...settings, followUpDays: newDays });
                }}
                className="w-20 px-4 py-2 rounded-lg border"
                style={{ borderColor: theme.colors.border.light }}
                min="1"
              />
            ))}
          </div>
        </label>
      </div>
    </div>
  );
}