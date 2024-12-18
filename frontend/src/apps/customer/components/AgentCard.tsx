import React, { useState } from 'react';
import {
  Brain,
  Users2,
  Briefcase,
  Zap,
  CheckCircle,
  Clock,
  FileText,
  MessageSquare,
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { theme } from '../../../shared/utils/theme';
import type { User } from '../types';
import { WorkSampleModal } from './WorkSampleModal';

interface AgentCardProps {
  agent: User;
  index: number;
  showAgents: boolean;
  onStartChat: (agent: User) => void;
}

export function AgentCard({
  agent,
  index,
  showAgents,
  onStartChat,
}: AgentCardProps) {
  const [showWorkSamples, setShowWorkSamples] = useState(false);

  return (
    <>
      <div
        className={`transform transition-all duration-500 ${
          showAgents
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div
          className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: theme.colors.border.light }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <img
                src={agent.avatar}
                alt={agent.name}
                className="w-16 h-16 rounded-full border-2"
                style={{ borderColor: theme.colors.primary.light }}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: theme.colors.text.primary }}
                >
                  {agent.name}
                </h3>
                {agent.type === 'AI' && (
                  <div
                    className="flex items-center gap-1 px-2 py-1 rounded-full"
                    style={{ backgroundColor: `${theme.colors.primary.light}` }}
                  >
                    <Brain
                      className="w-4 h-4"
                      style={{ color: theme.colors.primary.main }}
                    />
                    <span
                      className="text-xs font-medium"
                      style={{ color: theme.colors.primary.main }}
                    >
                      AI Agent
                    </span>
                  </div>
                )}
                {agent.type === 'Human' && (
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50">
                    <Users2 className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium text-green-600">
                      Human Expert
                    </span>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <p
                  className="mb-2"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {agent.description}
                </p>
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>{agent.role}</span>
                  <span className="mx-2">•</span>
                  <Zap className="w-4 h-4" />
                  <span>
                    Last active:{' '}
                    {formatDistanceToNow(agent.lastActive, { addSuffix: true })}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div
                  className="bg-gray-50 rounded-lg p-3 border"
                  style={{ borderColor: theme.colors.border.light }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span
                      className="text-sm"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      Projects Completed
                    </span>
                  </div>
                  <span
                    className="text-xl font-semibold"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {agent.metrics.projectsCompleted}
                  </span>
                </div>
                <div
                  className="bg-gray-50 rounded-lg p-3 border"
                  style={{ borderColor: theme.colors.border.light }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span
                      className="text-sm"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      Avg. Response Time
                    </span>
                  </div>
                  <span
                    className="text-xl font-semibold"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {agent.metrics.responseTime}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowWorkSamples(true)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors border"
                  style={{
                    backgroundColor: theme.colors.background.secondary,
                    borderColor: theme.colors.border.light,
                    color: theme.colors.text.primary,
                  }}
                >
                  <FileText className="w-4 h-4" />
                  View Work Samples
                </button>
                <button
                  onClick={() => onStartChat(agent)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors"
                  style={{
                    backgroundColor: theme.colors.primary.main,
                    color: '#FFFFFF',
                  }}
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat with Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showWorkSamples && (
        <WorkSampleModal
          samples={agent.workSamples}
          onClose={() => setShowWorkSamples(false)}
          agentName={agent.name}
        />
      )}
    </>
  );
}
