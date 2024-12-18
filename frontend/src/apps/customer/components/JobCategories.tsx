import React from 'react';
import { Code2, Palette, MessageSquare, HeadphonesIcon, BrainCircuit, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 'dev',
    name: 'Development & IT',
    icon: Code2,
    color: 'blue',
    description: 'Software, Web, Mobile & More'
  },
  {
    id: 'ai',
    name: 'AI Services',
    icon: BrainCircuit,
    color: 'purple',
    description: 'Machine Learning & AI Solutions'
  },
  {
    id: 'design',
    name: 'Design & Creative',
    icon: Palette,
    color: 'pink',
    description: 'Graphics, UI/UX & Branding'
  },
  {
    id: 'sales',
    name: 'Sales & Marketing',
    icon: MessageSquare,
    color: 'green',
    description: 'Growth & Customer Acquisition'
  },
  {
    id: 'support',
    name: 'Admin & Customer Support',
    icon: HeadphonesIcon,
    color: 'orange',
    description: 'Operations & Customer Service'
  },
  {
    id: 'more',
    name: 'More Categories',
    icon: MoreHorizontal,
    color: 'gray',
    description: 'Explore All Services'
  }
];

export function JobCategories() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-3 px-4">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => navigate('/select-agents', { state: { category: category.id } })}
            className="flex flex-col items-center text-center p-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group shadow-sm"
          >
            <div className={`w-10 h-10 rounded-full bg-${category.color}-50 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
              <Icon className={`w-5 h-5 text-${category.color}-600`} />
            </div>
            <h3 className="text-sm text-gray-900 font-medium mb-0.5">{category.name}</h3>
            <p className="text-xs text-gray-600 line-clamp-2">{category.description}</p>
          </button>
        );
      })}
    </div>
  );
}