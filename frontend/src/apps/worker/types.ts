export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  completed: boolean;
  isOverdue: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  deadline: string;
  teamSize: number;
  messages: number;
  progress: number;
  tasks: Task[];
}

export interface WorkerStats {
  projectsCompleted: number;
  activeProjects: number;
  revenueGenerated: string;
  tasksCompleted: number;
  projectsTrend: {
    value: number;
    isPositive: boolean;
  };
  revenueTrend: {
    value: number;
    isPositive: boolean;
  };
}

export interface WorkSample {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
  tags: string[];
  date: Date;
  metrics?: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  category: string;
  skills: string[];
  hourlyRate: number;
  availability: 'full-time' | 'part-time' | 'contract';
  workSamples: WorkSample[];
}