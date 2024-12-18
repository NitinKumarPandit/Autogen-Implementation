import React from 'react';
import { Calendar, Users, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../../shared/utils/theme';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-xl p-6 border cursor-pointer hover:shadow-md transition-shadow"
      style={{ borderColor: theme.colors.border.light }}
      onClick={() => navigate(`/app/worker/project/${project.id}`)}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-medium mb-1" style={{ color: theme.colors.text.primary }}>
            {project.title}
          </h3>
          <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
            {project.description}
          </p>
        </div>
        <span 
          className={`px-3 py-1 rounded-full text-sm ${
            project.status === 'completed' ? 'bg-green-100 text-green-700' :
            project.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
            'bg-orange-100 text-orange-700'
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center gap-2 text-sm" style={{ color: theme.colors.text.secondary }}>
          <Calendar className="w-4 h-4" />
          <span>{project.deadline}</span>
        </div>
        <div className="flex items-center gap-2 text-sm" style={{ color: theme.colors.text.secondary }}>
          <Users className="w-4 h-4" />
          <span>{project.teamSize} members</span>
        </div>
        <div className="flex items-center gap-2 text-sm" style={{ color: theme.colors.text.secondary }}>
          <MessageSquare className="w-4 h-4" />
          <span>{project.messages} messages</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm mb-1">
          <span style={{ color: theme.colors.text.secondary }}>Progress</span>
          <span style={{ color: theme.colors.primary.main }}>{project.progress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-500"
            style={{ 
              width: `${project.progress}%`,
              backgroundColor: theme.colors.primary.main
            }}
          />
        </div>
      </div>
    </div>
  );
}