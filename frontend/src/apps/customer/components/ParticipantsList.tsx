import React from 'react';
import { Brain, Users2, User as UserIcon } from 'lucide-react';
import { theme } from '../../../shared/utils/theme';
import type { User } from '../types';

interface ParticipantsListProps {
  participants: User[];
}

function AgentTypeIcon({ type }: { type: User['type'] }) {
  switch (type) {
    case 'AI':
      return (
        <div
          className="flex items-center gap-1 px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: theme.colors.primary.light,
            color: theme.colors.primary.main,
          }}
        >
          <Brain className="w-3 h-3" />
          <span className="text-xs font-medium">AI Agent</span>
        </div>
      );
    case 'Human':
      return (
        <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full text-green-600">
          <Users2 className="w-3 h-3" />
          <span className="text-xs font-medium">Human Expert</span>
        </div>
      );
  }
}

export function ParticipantsList({ participants }: ParticipantsListProps) {
  const currentUser = participants.find((p) => p.role === 'User');
  const otherParticipants = participants.filter((p) => p.role !== 'User');

  return (
    <div className="p-4">
      <h2
        className="text-lg font-semibold mb-4"
        style={{ color: theme.colors.text.primary }}
      >
        Chat Participants
      </h2>

      {/* Current User Section */}
      {currentUser && (
        <div className="mb-6">
          <h3
            className="text-sm font-medium mb-3 flex items-center gap-2"
            style={{ color: theme.colors.text.secondary }}
          >
            <UserIcon className="w-4 h-4" />
            Current User
          </h3>
          <div
            className="bg-white rounded-lg p-3 border"
            style={{ borderColor: theme.colors.border.light }}
          >
            <div className="flex items-center gap-3">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-10 h-10 rounded-full border"
                style={{ borderColor: theme.colors.border.light }}
              />
              <div>
                <div
                  className="font-medium"
                  style={{ color: theme.colors.text.primary }}
                >
                  You
                </div>
                <div
                  className="text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {currentUser.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Participants Section */}
      {otherParticipants.length > 0 && (
        <div>
          <h3
            className="text-sm font-medium mb-3 flex items-center gap-2"
            style={{ color: theme.colors.text.secondary }}
          >
            <Users2 className="w-4 h-4" />
            Other Participants
          </h3>
          <div className="space-y-4">
            {otherParticipants.map((participant) => (
              <div
                key={participant.id}
                className="bg-white rounded-lg p-3 border"
                style={{ borderColor: theme.colors.border.light }}
              >
                <div className="flex items-start gap-3">
                  <img
                    src={participant.avatar}
                    alt={participant.name}
                    className="w-10 h-10 rounded-full border"
                    style={{
                      borderColor:
                        participant.type === 'AI'
                          ? theme.colors.primary.light
                          : '#86efac',
                    }}
                  />
                  <div className="flex-1">
                    <div
                      className="font-medium mb-1"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {participant.name}
                    </div>
                    <div
                      className="text-sm mb-2"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {participant.role}
                    </div>
                    <AgentTypeIcon type={participant.type} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
