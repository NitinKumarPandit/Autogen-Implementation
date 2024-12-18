import React from 'react';
import { theme } from '../../../shared/utils/theme';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  isOnline: boolean;
}

const mockTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Project Manager',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop',
    isOnline: true
  },
  {
    id: '2',
    name: 'Michael Park',
    role: 'Lead Developer',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop',
    isOnline: true
  },
  {
    id: '3',
    name: 'Emma Wilson',
    role: 'UI Designer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
    isOnline: false
  }
];

interface ProjectTeamProps {
  projectId: string;
}

export function ProjectTeam({ projectId }: ProjectTeamProps) {
  return (
    <div className="bg-white rounded-xl p-6 border" style={{ borderColor: theme.colors.border.light }}>
      <h2 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text.primary }}>
        Team Members
      </h2>
      
      <div className="space-y-4">
        {mockTeam.map(member => (
          <div 
            key={member.id}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-10 h-10 rounded-full"
              />
              {member.isOnline && (
                <div 
                  className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white"
                  style={{ backgroundColor: theme.colors.primary.main }}
                />
              )}
            </div>
            <div>
              <p className="font-medium" style={{ color: theme.colors.text.primary }}>
                {member.name}
              </p>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}