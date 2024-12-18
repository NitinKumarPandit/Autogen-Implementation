import { Job } from '../types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Outbound Campaign Launch',
    status: 'in-progress',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    teamMembers: 4,
    messages: 28,
    progress: 65,
    outcomes: [
      '15 qualified leads identified',
      '8 meetings scheduled',
      'Email templates created'
    ]
  },
  {
    id: '2',
    title: 'Website Redesign Project',
    status: 'completed',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    teamMembers: 3,
    messages: 45,
    progress: 100,
    outcomes: [
      'New website launched',
      'Mobile responsive design',
      'SEO optimization complete'
    ]
  },
  {
    id: '3',
    title: 'Marketing Strategy Development',
    status: 'pending',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    teamMembers: 5,
    messages: 12,
    progress: 25,
    outcomes: [
      'Market research initiated',
      'Competitor analysis in progress'
    ]
  }
];