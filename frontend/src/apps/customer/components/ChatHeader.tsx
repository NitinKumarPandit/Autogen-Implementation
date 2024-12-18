import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../../shared/utils/theme';

interface ChatHeaderProps {
  title: string;
  subtitle: string;
  showBack?: boolean;
  onViewProposal?: () => void;
}

export function ChatHeader({
  title,
  subtitle,
  showBack = false,
  onViewProposal,
}: ChatHeaderProps) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white border-b"
      style={{ borderColor: theme.colors.border.light }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBack && (
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <ArrowLeft
                  className="w-6 h-6"
                  style={{ color: theme.colors.text.primary }}
                />
              </button>
            )}
            <div>
              <h1
                className="text-xl font-semibold"
                style={{ color: theme.colors.text.primary }}
              >
                {title}
              </h1>
              <p
                className="text-sm mt-1"
                style={{ color: theme.colors.text.secondary }}
              >
                {subtitle}
              </p>
            </div>
          </div>

          {onViewProposal && (
            <button
              onClick={onViewProposal}
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
              style={{
                backgroundColor: theme.colors.background.secondary,
                color: theme.colors.text.primary,
              }}
            >
              <FileText className="w-5 h-5" />
              View Proposal
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
