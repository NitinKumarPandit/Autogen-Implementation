import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Wrench, UserCircle, ArrowRight } from 'lucide-react';
import { theme } from '../utils/theme';

const apps = [
  {
    id: 'customer',
    name: 'Customer Platform',
    description: 'Find and collaborate with AI agents and human experts for your projects',
    icon: Users,
    path: '/app/customer',
    stats: [
      { label: 'AI Agents', value: '10,000+' },
      { label: 'Human Experts', value: '50,000+' },
      { label: 'Projects Completed', value: '1M+' }
    ]
  },
  {
    id: 'builder',
    name: 'Builder Platform',
    description: 'Create and manage your own AI agents and services',
    icon: Wrench,
    path: '/app/builder',
    stats: [
      { label: 'Agent Templates', value: '100+' },
      { label: 'Integration Options', value: '50+' },
      { label: 'Active Builders', value: '5,000+' }
    ]
  },
  {
    id: 'worker',
    name: 'Human Worker Platform',
    description: 'Showcase your skills, find projects, and collaborate with AI agents',
    icon: UserCircle,
    path: '/app/worker',
    stats: [
      { label: 'Active Projects', value: '25,000+' },
      { label: 'Average Rating', value: '4.8/5' },
      { label: 'Monthly Earnings', value: '$8,500' }
    ]
  }
];

export function AppSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            Choose Your Platform
          </h1>
          <p 
            className="text-xl"
            style={{ color: theme.colors.text.secondary }}
          >
            Select the platform that best suits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <button
                key={app.id}
                onClick={() => navigate(app.path)}
                className="bg-white rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-xl border group"
                style={{ borderColor: theme.colors.border.light }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: theme.colors.primary.light }}
                  >
                    <Icon 
                      className="w-8 h-8"
                      style={{ color: theme.colors.primary.main }}
                    />
                  </div>
                  <div>
                    <h2 
                      className="text-2xl font-semibold mb-1"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {app.name}
                    </h2>
                    <p style={{ color: theme.colors.text.secondary }}>
                      {app.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {app.stats.map((stat, index) => (
                    <div key={index}>
                      <div 
                        className="text-xl font-bold mb-1"
                        style={{ color: theme.colors.primary.main }}
                      >
                        {stat.value}
                      </div>
                      <div 
                        className="text-sm"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div 
                  className="flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: theme.colors.primary.main }}
                >
                  Enter Platform 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}