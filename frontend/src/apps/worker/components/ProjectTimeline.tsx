import React from 'react';
import { theme } from '../../../shared/utils/theme';

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'milestone' | 'update' | 'task';
}

const mockTimeline: TimelineEvent[] = [
  {
    id: '1',
    title: 'Project Kickoff',
    description: 'Initial team meeting and project planning session',
    date: '2 days ago',
    type: 'milestone'
  },
  {
    id: '2',
    title: 'Design Phase Complete',
    description: 'UI/UX designs approved by stakeholders',
    date: 'Yesterday',
    type: 'milestone'
  },
  {
    id: '3',
    title: 'Development Sprint 1',
    description: 'Core features implementation started',
    date: '5 hours ago',
    type: 'update'
  }
];

interface ProjectTimelineProps {
  projectId: string;
}

export function ProjectTimeline({ projectId }: ProjectTimelineProps) {
  return (
    <div className="bg-white rounded-xl p-6 border" style={{ borderColor: theme.colors.border.light }}>
      <h2 className="text-xl font-semibold mb-6" style={{ color: theme.colors.text.primary }}>
        Project Timeline
      </h2>
      
      <div className="relative">
        {mockTimeline.map((event, index) => (
          <div key={event.id} className="flex gap-4 mb-8 last:mb-0">
            <div className="relative">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ 
                  backgroundColor: event.type === 'milestone' ? theme.colors.primary.main : '#FFF',
                  border: `2px solid ${theme.colors.primary.main}`
                }}
              />
              {index !== mockTimeline.length - 1 && (
                <div 
                  className="absolute top-4 left-1/2 w-0.5 h-full -translate-x-1/2"
                  style={{ backgroundColor: theme.colors.border.light }}
                />
              )}
            </div>
            <div>
              <h3 className="font-medium mb-1" style={{ color: theme.colors.text.primary }}>
                {event.title}
              </h3>
              <p className="text-sm mb-2" style={{ color: theme.colors.text.secondary }}>
                {event.description}
              </p>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                {event.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}