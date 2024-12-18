import React from 'react';
import { AgentSearchAnimation } from './AgentSearchAnimation';
import { theme } from '../../../shared/utils/theme';

interface LoadingScreenProps {
  title: string;
  subtitle: string;
}

export function LoadingScreen({ title, subtitle }: LoadingScreenProps) {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <div className="text-center max-w-lg px-4">
        <AgentSearchAnimation />
        <h3
          className="text-2xl font-medium mb-4"
          style={{ color: theme.colors.text.primary }}
        >
          {title}
        </h3>
        <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
