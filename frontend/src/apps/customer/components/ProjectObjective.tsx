import React from 'react';
import { Brain, Target, Users2 } from 'lucide-react';
import { theme } from '../../../shared/utils/theme';

interface ProjectObjectiveProps {
  prompt: string;
  showAnimation: boolean;
}

export function ProjectObjective({
  prompt,
  showAnimation,
}: ProjectObjectiveProps) {
  return (
    <div
      className={`mb-12 transform transition-all duration-500 ${
        showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div
        className="bg-white rounded-xl p-6 border shadow-sm"
        style={{ borderColor: theme.colors.border.light }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Target
            className="w-6 h-6"
            style={{ color: theme.colors.primary.main }}
          />
          <h2
            className="text-xl font-semibold"
            style={{ color: theme.colors.text.primary }}
          >
            Project Objective
          </h2>
        </div>
        <p className="mb-6" style={{ color: theme.colors.text.secondary }}>
          {prompt}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="bg-gray-50 rounded-lg p-4 border"
            style={{ borderColor: theme.colors.border.light }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-5 h-5 text-blue-500" />
              <h3
                className="font-medium"
                style={{ color: theme.colors.text.primary }}
              >
                AI Capabilities
              </h3>
            </div>
            <ul
              className="space-y-2 text-sm"
              style={{ color: theme.colors.text.secondary }}
            >
              <li>• Instant response and 24/7 availability</li>
              <li>• Data-driven decision making</li>
              <li>• Automated task execution</li>
            </ul>
          </div>
          <div
            className="bg-gray-50 rounded-lg p-4 border"
            style={{ borderColor: theme.colors.border.light }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Users2 className="w-5 h-5 text-green-500" />
              <h3
                className="font-medium"
                style={{ color: theme.colors.text.primary }}
              >
                Human Expertise
              </h3>
            </div>
            <ul
              className="space-y-2 text-sm"
              style={{ color: theme.colors.text.secondary }}
            >
              <li>• Strategic oversight and guidance</li>
              <li>• Complex problem solving</li>
              <li>• Quality assurance and refinement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
