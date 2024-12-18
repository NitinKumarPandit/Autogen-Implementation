import React from 'react';
import { theme } from '../../../../../shared/utils/theme';

interface SocialSettingsProps {
  settings?: {
    platforms: string[];
    message: string;
  };
  onChange: (settings: any) => void;
}

const platforms = ['Twitter', 'Facebook', 'Instagram'];

export function SocialSettings({ settings = { platforms: [], message: '' }, onChange }: SocialSettingsProps) {
  const togglePlatform = (platform: string) => {
    const newPlatforms = settings.platforms.includes(platform)
      ? settings.platforms.filter(p => p !== platform)
      : [...settings.platforms, platform];
    onChange({ ...settings, platforms: newPlatforms });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4" style={{ color: theme.colors.text.primary }}>
          Social Media Settings
        </h3>
      </div>

      <div>
        <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
          Select Platforms
          <div className="flex gap-2 mt-1">
            {platforms.map(platform => (
              <button
                key={platform}
                onClick={() => togglePlatform(platform)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  settings.platforms.includes(platform) ? 'border-2' : ''
                }`}
                style={{
                  borderColor: settings.platforms.includes(platform)
                    ? theme.colors.primary.main
                    : theme.colors.border.light,
                  backgroundColor: settings.platforms.includes(platform)
                    ? theme.colors.primary.light
                    : 'transparent',
                  color: settings.platforms.includes(platform)
                    ? theme.colors.primary.main
                    : theme.colors.text.primary,
                }}
              >
                {platform}
              </button>
            ))}
          </div>
        </label>
      </div>

      <div>
        <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
          Social Message Template
          <textarea
            value={settings.message}
            onChange={e => onChange({ ...settings, message: e.target.value })}
            className="w-full px-4 py-2 mt-1 rounded-lg border"
            style={{ borderColor: theme.colors.border.light }}
            rows={4}
            placeholder="Enter social media message template"
          />
        </label>
      </div>
    </div>
  );
}