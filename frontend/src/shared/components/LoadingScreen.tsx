import React from 'react';
import { theme } from '../../utils/theme';

interface LoadingScreenProps {
  title: string;
  subtitle: string;
}

export function LoadingScreen({ title, subtitle }: LoadingScreenProps) {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <div className="text-center max-w-lg px-4">
        <div className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-6" 
          style={{ borderColor: `${theme.colors.primary.main} transparent transparent transparent` }} 
        />
        <h3 
          className="text-2xl font-medium mb-4"
          style={{ color: theme.colors.text.primary }}
        >
          {title}
        </h3>
        <p 
          className="text-lg"
          style={{ color: theme.colors.text.secondary }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}