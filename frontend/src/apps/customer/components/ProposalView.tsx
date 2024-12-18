import React from 'react';
import { Calendar, Clock, CheckCircle2, Users2, Target, ArrowRight, X } from 'lucide-react';
import type { User } from '../types';

interface Task {
  id: string;
  title: string;
  description: string;
  assignee: User;
  timeline: string;
  status: 'pending' | 'in-progress' | 'completed';
}

interface ProposalViewProps {
  projectGoal: string;
  tasks: Task[];
  timeline: string;
  budget: string;
  team: User[];
  onHire: () => void;
  onClose: () => void;
}

export function ProposalView({ 
  projectGoal, 
  tasks, 
  timeline, 
  budget,
  team,
  onHire,
  onClose
}: ProposalViewProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Project Proposal</h2>
          <p className="text-purple-200">Review the detailed breakdown of your project</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
        {/* Project Goal */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2 text-lg font-medium text-white mb-3">
            <Target className="w-5 h-5 text-purple-300" />
            Project Goal
          </div>
          <p className="text-purple-200">{projectGoal}</p>
        </div>

        {/* Timeline & Budget */}
        <div className="grid md:grid-cols-2 gap-4 p-6 border-b border-white/10">
          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex items-center gap-2 text-white mb-2">
              <Calendar className="w-5 h-5 text-purple-300" />
              Timeline
            </div>
            <p className="text-purple-200">{timeline}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex items-center gap-2 text-white mb-2">
              <Clock className="w-5 h-5 text-purple-300" />
              Budget
            </div>
            <p className="text-purple-200">{budget}</p>
          </div>
        </div>

        {/* Tasks */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2 text-lg font-medium text-white mb-4">
            <CheckCircle2 className="w-5 h-5 text-purple-300" />
            Project Tasks
          </div>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-white font-medium mb-1">{task.title}</h4>
                    <p className="text-purple-200 text-sm mb-2">{task.description}</p>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-1 text-purple-300">
                        <Clock className="w-4 h-4" />
                        {task.timeline}
                      </div>
                      <div className="flex items-center gap-1">
                        <img
                          src={task.assignee.avatar}
                          alt={task.assignee.name}
                          className="w-5 h-5 rounded-full"
                        />
                        <span className="text-purple-200">{task.assignee.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${
                    task.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                    task.status === 'in-progress' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-purple-500/20 text-purple-300'
                  }`}>
                    {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2 text-lg font-medium text-white mb-4">
            <Users2 className="w-5 h-5 text-purple-300" />
            Project Team
          </div>
          <div className="flex flex-wrap gap-3">
            {team.map((member) => (
              <div key={member.id} className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-purple-200">{member.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Button - Fixed at bottom */}
      <div className="p-6 border-t border-white/10 bg-white/5">
        <button
          onClick={onHire}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-6 py-3 font-medium flex items-center justify-center gap-2 transition-colors"
        >
          Hire Team & Start Project
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}