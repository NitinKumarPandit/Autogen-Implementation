import React from 'react';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { theme } from '../../../shared/utils/theme';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onTaskComplete: (taskId: string) => void;
}

export function TaskList({ tasks, onTaskComplete }: TaskListProps) {
  const getPriorityColor = (priority: 'high' | 'medium' | 'low') => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-orange-600 bg-orange-50';
      case 'low':
        return 'text-green-600 bg-green-50';
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div 
          key={task.id}
          className="bg-white rounded-lg p-4 border"
          style={{ borderColor: theme.colors.border.light }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-medium" style={{ color: theme.colors.text.primary }}>
                  {task.title}
                </h4>
                <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
              </div>
              <p className="text-sm mb-3" style={{ color: theme.colors.text.secondary }}>
                {task.description}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1" style={{ color: theme.colors.text.secondary }}>
                  <Clock className="w-4 h-4" />
                  <span>Due {task.dueDate}</span>
                </div>
                {task.isOverdue && (
                  <div className="flex items-center gap-1 text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    <span>Overdue</span>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={() => onTaskComplete(task.id)}
              className="p-2 rounded-lg transition-colors"
              style={{ 
                backgroundColor: task.completed ? theme.colors.primary.light : 'transparent',
                color: theme.colors.primary.main
              }}
            >
              <CheckCircle2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}