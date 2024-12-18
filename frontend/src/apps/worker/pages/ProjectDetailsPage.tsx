import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, MessageSquare, Link2, FileText, CheckCircle } from 'lucide-react';
import { TaskList } from '../components/TaskList';
import { ProjectTimeline } from '../components/ProjectTimeline';
import { ProjectTeam } from '../components/ProjectTeam';
import { mockProjects } from '../utils/mockData';
import { theme } from '../../../shared/utils/theme';

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = mockProjects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
            Project Not Found
          </h2>
          <button
            onClick={() => navigate('/app/worker')}
            className="text-sm"
            style={{ color: theme.colors.primary.main }}
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b" style={{ borderColor: theme.colors.border.light }}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <button
            onClick={() => navigate('/app/worker')}
            className="flex items-center gap-2 mb-4 text-sm"
            style={{ color: theme.colors.text.secondary }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                {project.title}
              </h1>
              <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
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

          <div className="grid grid-cols-4 gap-8 mt-8">
            <div className="flex items-center gap-2" style={{ color: theme.colors.text.secondary }}>
              <Calendar className="w-5 h-5" />
              <div>
                <p className="text-sm">Deadline</p>
                <p className="font-medium" style={{ color: theme.colors.text.primary }}>{project.deadline}</p>
              </div>
            </div>
            <div className="flex items-center gap-2" style={{ color: theme.colors.text.secondary }}>
              <Users className="w-5 h-5" />
              <div>
                <p className="text-sm">Team Size</p>
                <p className="font-medium" style={{ color: theme.colors.text.primary }}>{project.teamSize} members</p>
              </div>
            </div>
            <div className="flex items-center gap-2" style={{ color: theme.colors.text.secondary }}>
              <MessageSquare className="w-5 h-5" />
              <div>
                <p className="text-sm">Messages</p>
                <p className="font-medium" style={{ color: theme.colors.text.primary }}>{project.messages} total</p>
              </div>
            </div>
            <div className="flex items-center gap-2" style={{ color: theme.colors.text.secondary }}>
              <CheckCircle className="w-5 h-5" />
              <div>
                <p className="text-sm">Progress</p>
                <p className="font-medium" style={{ color: theme.colors.text.primary }}>{project.progress}% complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-8">
            {/* Progress */}
            <div className="bg-white rounded-xl p-6 border" style={{ borderColor: theme.colors.border.light }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: theme.colors.text.primary }}>
                Project Progress
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm mb-2">
                  <span style={{ color: theme.colors.text.secondary }}>Overall Completion</span>
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

            {/* Timeline */}
            <ProjectTimeline projectId={project.id} />

            {/* Tasks */}
            <div className="bg-white rounded-xl p-6 border" style={{ borderColor: theme.colors.border.light }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: theme.colors.text.primary }}>
                Project Tasks
              </h2>
              <TaskList tasks={project.tasks} onTaskComplete={() => {}} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Team Members */}
            <ProjectTeam projectId={project.id} />

            {/* Documents */}
            <div className="bg-white rounded-xl p-6 border" style={{ borderColor: theme.colors.border.light }}>
              <h2 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text.primary }}>
                Project Documents
              </h2>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <FileText className="w-5 h-5" style={{ color: theme.colors.primary.main }} />
                  <div>
                    <p className="font-medium" style={{ color: theme.colors.text.primary }}>
                      Project Brief
                    </p>
                    <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                      PDF • 2.4 MB
                    </p>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <Link2 className="w-5 h-5" style={{ color: theme.colors.primary.main }} />
                  <div>
                    <p className="font-medium" style={{ color: theme.colors.text.primary }}>
                      Design Assets
                    </p>
                    <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                      Figma Link
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}