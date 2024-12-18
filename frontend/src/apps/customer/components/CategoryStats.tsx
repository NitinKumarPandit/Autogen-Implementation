import React from 'react';
import { Star, TrendingUp, Users, CheckCircle, DollarSign } from 'lucide-react';
import { theme } from '../../../shared/utils/theme';

interface CategoryStat {
  name: string;
  rating: number;
  skills: number;
  aiAgents: number;
  humanExperts: number;
  projectsCompleted: number;
  revenue: string;
}

const categoryStats: CategoryStat[] = [
  {
    name: 'Development & IT',
    rating: 4.85,
    skills: 1853,
    aiAgents: 2500,
    humanExperts: 15000,
    projectsCompleted: 250000,
    revenue: '$1.5B+',
  },
  {
    name: 'AI Services',
    rating: 4.8,
    skills: 294,
    aiAgents: 5000,
    humanExperts: 8000,
    projectsCompleted: 150000,
    revenue: '$800M+',
  },
  {
    name: 'Design & Creative',
    rating: 4.91,
    skills: 968,
    aiAgents: 1800,
    humanExperts: 12000,
    projectsCompleted: 200000,
    revenue: '$1B+',
  },
  {
    name: 'Sales & Marketing',
    rating: 4.77,
    skills: 392,
    aiAgents: 3000,
    humanExperts: 9000,
    projectsCompleted: 180000,
    revenue: '$1.2B+',
  },
];

export function CategoryStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 mt-16">
      {categoryStats.map((category, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 border transition-all duration-300 hover:shadow-lg"
          style={{ borderColor: theme.colors.border.light }}
        >
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            {category.name}
          </h3>

          <div className="flex items-center gap-1 mb-4">
            <Star
              className="w-4 h-4"
              style={{ color: theme.colors.primary.main }}
            />
            <span
              className="font-medium"
              style={{ color: theme.colors.text.primary }}
            >
              {category.rating}/5
            </span>
            <span
              className="text-sm ml-2"
              style={{ color: theme.colors.text.secondary }}
            >
              ({category.skills} skills)
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp
                  className="w-4 h-4"
                  style={{ color: theme.colors.primary.main }}
                />
                <span
                  className="text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  AI Agents
                </span>
                <span
                  className="text-sm font-semibold ml-auto"
                  style={{ color: theme.colors.text.primary }}
                >
                  {category.aiAgents.toLocaleString()}+
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full overflow-hidden bg-gray-100">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: '75%',
                    backgroundColor: theme.colors.primary.main,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <Users
                  className="w-4 h-4"
                  style={{ color: theme.colors.primary.main }}
                />
                <span
                  className="text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Human Experts
                </span>
                <span
                  className="text-sm font-semibold ml-auto"
                  style={{ color: theme.colors.text.primary }}
                >
                  {category.humanExperts.toLocaleString()}+
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full overflow-hidden bg-gray-100">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: '85%',
                    backgroundColor: theme.colors.primary.main,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle
                  className="w-4 h-4"
                  style={{ color: theme.colors.primary.main }}
                />
                <span
                  className="text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Projects Done
                </span>
                <span
                  className="text-sm font-semibold ml-auto"
                  style={{ color: theme.colors.text.primary }}
                >
                  {category.projectsCompleted.toLocaleString()}+
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full overflow-hidden bg-gray-100">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: '90%',
                    backgroundColor: theme.colors.primary.main,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <DollarSign
                  className="w-4 h-4"
                  style={{ color: theme.colors.primary.main }}
                />
                <span
                  className="text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Revenue Generated
                </span>
                <span
                  className="text-sm font-semibold ml-auto"
                  style={{ color: theme.colors.primary.main }}
                >
                  {category.revenue}
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full overflow-hidden bg-gray-100">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: '95%',
                    backgroundColor: theme.colors.primary.main,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
