import { v4 as uuidv4 } from 'uuid';
import type { User } from '../types';

export function findRelevantAgents(prompt: string): User[] {
  const now = new Date();

  // AI Design Agents
  const uiDesigner: User = {
    id: uuidv4(),
    name: 'AI UI Designer',
    avatar: 'https://pub-static.fotor.com/assets/ai-avatar/styles/9fnbdd0ui900.jpg',
    isOnline: true,
    type: 'AI',
    description: 'Creates stunning user interfaces and web designs',
    role: 'UI/UX Design',
    jobFunction: 'Design',
    lastActive: new Date(now.getTime() - 10 * 60000),
    metrics: {
      projectsCompleted: 847,
      responseTime: '< 2 mins',
      satisfactionRate: 98,
      lastActive: new Date(now.getTime() - 10 * 60000),
    },
    workSamples: [
      {
        title: 'E-commerce Redesign',
        description: 'Increased conversion rate by 45%',
        link: '#',
        date: new Date(now.getTime() - 48 * 60 * 60000),
        metrics: '45% conversion increase',
      },
      {
        title: 'Mobile App UI',
        description: 'Enhanced user engagement by 60%',
        link: '#',
        date: new Date(now.getTime() - 72 * 60 * 60000),
        metrics: '4.8/5 user rating',
      },
    ],
  };

  const brandDesigner: User = {
    id: uuidv4(),
    name: 'AI Brand Designer',
    avatar: 'https://pub-static.fotor.com/assets/ai-avatar/styles/fotorWeb/pqti6k8ypxh7.jpg',
    isOnline: true,
    type: 'AI',
    description: 'Specializes in brand identity and visual design',
    role: 'Brand Design',
    jobFunction: 'Design',
    lastActive: new Date(now.getTime() - 15 * 60000),
    metrics: {
      projectsCompleted: 632,
      responseTime: '< 3 mins',
      satisfactionRate: 97,
      lastActive: new Date(now.getTime() - 15 * 60000),
    },
    workSamples: [
      {
        title: 'Brand Identity System',
        description: 'Complete brand redesign for tech startup',
        link: '#',
        date: new Date(now.getTime() - 96 * 60 * 60000),
        metrics: 'Brand recognition +85%',
      },
      {
        title: 'Visual Guidelines',
        description: 'Created comprehensive brand guidelines',
        link: '#',
        date: new Date(now.getTime() - 120 * 60 * 60000),
        metrics: '100% client satisfaction',
      },
    ],
  };

  const motionDesigner: User = {
    id: uuidv4(),
    name: 'AI Motion Designer',
    avatar: 'https://pub-static.fotor.com/assets/ai-avatar/styles/fotorWeb/5z312ey4f7qs.jpg',
    isOnline: true,
    type: 'AI',
    description: 'Creates engaging animations and motion graphics',
    role: 'Motion Design',
    jobFunction: 'Design',
    lastActive: new Date(now.getTime() - 20 * 60000),
    metrics: {
      projectsCompleted: 423,
      responseTime: '< 5 mins',
      satisfactionRate: 99,
      lastActive: new Date(now.getTime() - 20 * 60000),
    },
    workSamples: [
      {
        title: 'Product Launch Video',
        description: 'Viral marketing animation campaign',
        link: '#',
        date: new Date(now.getTime() - 144 * 60 * 60000),
        metrics: '2M+ views',
      },
      {
        title: 'App Interactions',
        description: 'Micro-animations for mobile app',
        link: '#',
        date: new Date(now.getTime() - 168 * 60 * 60000),
        metrics: 'User engagement +40%',
      },
    ],
  };

  // Existing Sales Agents
  const supportAgent: User = {
    id: uuidv4(),
    name: 'AI Support Agent',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdT9EcQENGWg-LhKhXS7KWgw6Gnz1Gl2Uag&s',
    isOnline: true,
    type: 'AI',
    description: 'Coordinates project execution and ensures smooth collaboration',
    role: 'Project Coordination',
    jobFunction: 'Sales',
    lastActive: new Date(now.getTime() - 5 * 60000),
    metrics: {
      projectsCompleted: 1247,
      responseTime: '< 1 min',
      satisfactionRate: 98,
      lastActive: new Date(now.getTime() - 5 * 60000),
    },
    workSamples: [
      {
        title: 'E-commerce Launch',
        description: 'Coordinated 15 agents for successful product launch',
        link: '#',
        date: new Date(now.getTime() - 24 * 60 * 60000),
        metrics: '15% increase in efficiency',
      },
      {
        title: 'Marketing Campaign',
        description: 'Managed cross-functional team of 8 agents',
        link: '#',
        date: new Date(now.getTime() - 48 * 60 * 60000),
        metrics: '25% cost reduction',
      },
    ],
  };

  const listBuilderAgent: User = {
    id: uuidv4(),
    name: 'AI List Builder',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JZPb-KVA7JuKHIqWmFf16mJWiBqPUhV83g&s',
    isOnline: true,
    type: 'AI',
    description: 'Generates and validates target prospect lists',
    role: 'List Generation',
    jobFunction: 'Sales',
    lastActive: new Date(now.getTime() - 15 * 60000),
    metrics: {
      projectsCompleted: 892,
      responseTime: '< 2 mins',
      satisfactionRate: 96,
      lastActive: new Date(now.getTime() - 15 * 60000),
    },
    workSamples: [
      {
        title: 'Tech Startup List',
        description: 'Generated 500+ verified prospects',
        link: '#',
        date: new Date(now.getTime() - 72 * 60 * 60000),
        metrics: '92% accuracy rate',
      },
      {
        title: 'Enterprise Contacts',
        description: 'Built list of 1000+ decision makers',
        link: '#',
        date: new Date(now.getTime() - 96 * 60 * 60000),
        metrics: '85% response rate',
      },
    ],
  };

  const copywriterAgent: User = {
    id: uuidv4(),
    name: 'AI Copywriter',
    avatar: 'https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg',
    isOnline: true,
    type: 'AI',
    description: 'Creates personalized outreach messages and content',
    role: 'Content Creation',
    jobFunction: 'Sales',
    lastActive: new Date(now.getTime() - 25 * 60000),
    metrics: {
      projectsCompleted: 1563,
      responseTime: '< 3 mins',
      satisfactionRate: 97,
      lastActive: new Date(now.getTime() - 25 * 60000),
    },
    workSamples: [
      {
        title: 'Email Campaign',
        description: '45% open rate, 12% response rate',
        link: '#',
        date: new Date(now.getTime() - 120 * 60 * 60000),
        metrics: '45% open rate',
      },
      {
        title: 'LinkedIn Messages',
        description: '35% acceptance rate, 8% meeting rate',
        link: '#',
        date: new Date(now.getTime() - 144 * 60 * 60000),
        metrics: '35% acceptance rate',
      },
    ],
  };

  const strategyConsultant: User = {
    id: uuidv4(),
    name: 'Strategy Consultant',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop',
    isOnline: true,
    type: 'Human',
    description: 'Develops and optimizes go-to-market strategies',
    role: 'Strategy Planning',
    jobFunction: 'Sales',
    lastActive: new Date(now.getTime() - 35 * 60000),
    metrics: {
      projectsCompleted: 156,
      responseTime: '< 30 mins',
      satisfactionRate: 99,
      lastActive: new Date(now.getTime() - 35 * 60000),
    },
    workSamples: [
      {
        title: 'SaaS GTM Strategy',
        description: '3x growth in 6 months',
        link: '#',
        date: new Date(now.getTime() - 168 * 60 * 60000),
        metrics: '300% growth',
      },
      {
        title: 'Market Entry Plan',
        description: 'Successfully entered 3 new markets',
        link: '#',
        date: new Date(now.getTime() - 192 * 60 * 60000),
        metrics: '3 markets launched',
      },
    ],
  };

  const salesExpert: User = {
    id: uuidv4(),
    name: 'Sales Expert',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    isOnline: true,
    type: 'Human',
    description: 'Conducts sales calls and handles prospect communication',
    role: 'Sales Execution',
    jobFunction: 'Sales',
    lastActive: new Date(now.getTime() - 45 * 60000),
    metrics: {
      projectsCompleted: 234,
      responseTime: '< 1 hour',
      satisfactionRate: 98,
      lastActive: new Date(now.getTime() - 45 * 60000),
    },
    workSamples: [
      {
        title: 'Enterprise Sales',
        description: '$2.5M in closed deals',
        link: '#',
        date: new Date(now.getTime() - 216 * 60 * 60000),
        metrics: '$2.5M revenue',
      },
      {
        title: 'Sales Training',
        description: 'Trained 25+ SDR teams',
        link: '#',
        date: new Date(now.getTime() - 240 * 60 * 60000),
        metrics: '25+ teams trained',
      },
    ],
  };

  return [
    supportAgent,
    listBuilderAgent,
    copywriterAgent,
    strategyConsultant,
    salesExpert,
    uiDesigner,
    brandDesigner,
    motionDesigner
  ];
}