import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { theme } from '../../utils/theme';

interface HeaderProps {
  showBack?: boolean;
  title: string;
  subtitle?: string;
}

export function Header({ showBack = false, title, subtitle }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b" style={{ borderColor: theme.colors.border.light }}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6" style={{ color: theme.colors.text.primary }} />
            </button>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6" style={{ color: theme.colors.primary.main }} />
              <h1 className="text-xl font-semibold" style={{ color: theme.colors.text.primary }}>{title}</h1>
            </div>
            {subtitle && (
              <p className="text-sm mt-1" style={{ color: theme.colors.text.secondary }}>{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}