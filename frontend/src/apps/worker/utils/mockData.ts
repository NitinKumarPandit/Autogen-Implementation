import { Project, Task, WorkerStats, ServiceOffering } from '../types';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete Project Documentation',
    description: 'Write technical documentation for the new feature implementation',
    priority: 'high',
    dueDate: 'Tomorrow',
    completed: false,
    isOverdue: true
  },
  {
    id: '2',
    title: 'Review Pull Requests',
    description: 'Review and provide feedback on team members\' code submissions',
    priority: 'medium',
    dueDate: 'Today',
    completed: false,
    isOverdue: false
  },
  {
    id: '3',
    title: 'Client Meeting Preparation',
    description: 'Prepare presentation and demos for upcoming client meeting',
    priority: 'high',
    dueDate: 'In 2 days',
    completed: false,
    isOverdue: false
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    description: 'Modernizing the user interface and improving user experience',
    status: 'in-progress',
    deadline: 'Mar 30, 2024',
    teamSize: 5,
    messages: 128,
    progress: 65,
    tasks: mockTasks
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Building a cross-platform mobile application',
    status: 'pending',
    deadline: 'Apr 15, 2024',
    teamSize: 4,
    messages: 89,
    progress: 25,
    tasks: []
  },
  {
    id: '3',
    title: 'API Integration Project',
    description: 'Implementing third-party API integrations',
    status: 'completed',
    deadline: 'Mar 10, 2024',
    teamSize: 3,
    messages: 256,
    progress: 100,
    tasks: []
  }
];

export const mockStats: WorkerStats = {
  projectsCompleted: 48,
  activeProjects: 3,
  revenueGenerated: '$124,500',
  tasksCompleted: 256,
  projectsTrend: {
    value: 12,
    isPositive: true
  },
  revenueTrend: {
    value: 8,
    isPositive: true
  }
};

export const mockServices: ServiceOffering[] = [
  {
    id: '1',
    title: 'Full Stack Development',
    description: 'End-to-end web application development using modern technologies',
    category: 'development',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    hourlyRate: 85,
    availability: 'full-time',
    workSamples: []
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces',
    category: 'design',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    hourlyRate: 75,
    availability: 'contract',
    workSamples: []
  }
];