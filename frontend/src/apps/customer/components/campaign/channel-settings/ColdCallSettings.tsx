import React from 'react';
import { theme } from '../../../../../shared/utils/theme';

interface ColdCallSettingsProps {
  settings?: {
    script: string;
    voicemailScript: string;
  };
  onChange: (settings: any) => void;
}

export function ColdCallSettings({ settings = { script: '', voicemailScript: '' }, onChange }: ColdCallSettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4" style={{ color: theme.colors.text.primary }}>
          Cold Call Settings
        </h3>
      </div>

      <div>
        <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
          Call Script
          <textarea
            value={settings.script}
            onChange={e => onChange({ ...settings, script: e.target.value })}
            className="w-full px-4 py-2 mt-1 rounded-lg border"
            style={{ borderColor: theme.colors.border.light }}
            rows={6}
            placeholder="Enter call script"
          />
        </label>
      </div>

      <div>
        <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
          Voicemail Script
          <textarea
            value={settings.voicemailScript}
            onChange={e => onChange({ ...settings, voicemailScript: e.target.value })}
            className="w-full px-4 py-2 mt-1 rounded-lg border"
            style={{ borderColor: theme.colors.border.light }}
            rows={4}
            placeholder="Enter voicemail script"
          />
        </label>
      </div>
    </div>
  );
}