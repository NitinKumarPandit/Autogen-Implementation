import React from 'react';
import { theme } from '../../../../../shared/utils/theme';

interface LinkedInSettingsProps {
  settings?: {
    connectionMessage: string;
    followUpMessage: string;
  };
  onChange: (settings: any) => void;
}

export function LinkedInSettings({ settings = { connectionMessage: '', followUpMessage: '' }, onChange }: LinkedInSettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4" style={{ color: theme.colors.text.primary }}>
          LinkedIn Settings
        </h3>
      </div>

      <div>
        <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
          Connection Request Message
          <textarea
            value={settings.connectionMessage}
            onChange={e => onChange({ ...settings, connectionMessage: e.target.value })}
            className="w-full px-4 py-2 mt-1 rounded-lg border"
            style={{ borderColor: theme.colors.border.light }}
            rows={4}
            placeholder="Enter connection request message"
          />
        </label>
      </div>

      <div>
        <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
          Follow-up Message
          <textarea
            value={settings.followUpMessage}
            onChange={e => onChange({ ...settings, followUpMessage: e.target.value })}
            className="w-full px-4 py-2 mt-1 rounded-lg border"
            style={{ borderColor: theme.colors.border.light }}
            rows={4}
            placeholder="Enter follow-up message"
          />
        </label>
      </div>
    </div>
  );
}