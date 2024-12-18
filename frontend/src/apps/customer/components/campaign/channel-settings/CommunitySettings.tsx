import React from 'react';
import { theme } from '../../../../../shared/utils/theme';

interface CommunitySettingsProps {
  settings?: {
    subreddits: string[];
    postTemplate: string;
  };
  onChange: (settings: any) => void;
}

export function CommunitySettings({ settings = { subreddits: [], postTemplate: '' }, onChange }: CommunitySettingsProps) {
  const [newSubreddit, setNewSubreddit] = React.useState('');

  const addSubreddit = () => {
    if (newSubreddit && !settings.subreddits.includes(newSubreddit)) {
      onChange({
        ...settings,
        subreddits: [...settings.subreddits, newSubreddit]
      });
      setNewSubreddit('');
    }
  };

  const removeSubreddit = (subreddit: string) => {
    onChange({
      ...settings,
      subreddits: settings.subreddits.filter(s => s !== subreddit)
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4" style={{ color: theme.colors.text.primary }}>
          Reddit Community Settings
        </h3>
      </div>

      <div>
        <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
          Add Subreddits
          <div className="flex gap-2 mt-1">
            <input
              type="text"
              value={newSubreddit}
              onChange={e => setNewSubreddit(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border"
              style={{ borderColor: theme.colors.border.light }}
              placeholder="Enter subreddit name"
              onKeyPress={e => e.key === 'Enter' && addSubreddit()}
            />
            <button
              onClick={addSubreddit}
              className="px-4 py-2 rounded-lg text-white"
              style={{ backgroundColor: theme.colors.primary.main }}
            >
              Add
            </button>
          </div>
        </label>

        <div className="flex flex-wrap gap-2 mt-2">
          {settings.subreddits.map(subreddit => (
            <span
              key={subreddit}
              className="px-3 py-1 rounded-full text-sm flex items-center gap-2"
              style={{
                backgroundColor: theme.colors.primary.light,
                color: theme.colors.primary.main
              }}
            >
              {subreddit}
              <button
                onClick={() => removeSubreddit(subreddit)}
                className="hover:opacity-75"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
          Post Template
          <textarea
            value={settings.postTemplate}
            onChange={e => onChange({ ...settings, postTemplate: e.target.value })}
            className="w-full px-4 py-2 mt-1 rounded-lg border"
            style={{ borderColor: theme.colors.border.light }}
            rows={6}
            placeholder="Enter post template"
          />
        </label>
      </div>
    </div>
  );
}