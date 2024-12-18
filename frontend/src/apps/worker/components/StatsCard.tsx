import React from 'react';
import { LucideIcon } from 'lucide-react';
import { theme } from '../../../shared/utils/theme';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function StatsCard({ title, value, icon: Icon, trend }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border" style={{ borderColor: theme.colors.border.light }}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm mb-1" style={{ color: theme.colors.text.secondary }}>{title}</p>
          <h3 className="text-2xl font-semibold" style={{ color: theme.colors.text.primary }}>{value}</h3>
          {trend && (
            <p className={`text-sm mt-1 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}% from last month
            </p>
          )}
        </div>
        <div 
          className="p-3 rounded-lg"
          style={{ backgroundColor: theme.colors.primary.light }}
        >
          <Icon className="w-6 h-6" style={{ color: theme.colors.primary.main }} />
        </div>
      </div>
    </div>
  );
}