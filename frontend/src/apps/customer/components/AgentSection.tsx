import React from 'react';
import { Brain, Users2 } from 'lucide-react';
import { AgentCard } from './AgentCard';
import type { User } from '../types';

interface AgentSectionProps {
  type: 'AI' | 'Human';
  agents: User[];
  showAgents: boolean;
  onStartChat: (agent: User) => void;
}

export function AgentSection({ type, agents, showAgents, onStartChat }: AgentSectionProps) {
  const Icon = type === 'AI' ? Brain : Users2;
  const title = type === 'AI' ? 'AI Powerhouse' : 'Human Experts';
  const iconColor = type === 'AI' ? 'text-blue-300' : 'text-green-300';

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Icon className={`w-6 h-6 ${iconColor}`} />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <div className="grid gap-6">
        {agents.map((agent, index) => (
          <AgentCard 
            key={agent.id} 
            agent={agent} 
            index={index} 
            showAgents={showAgents}
            onStartChat={onStartChat}
          />
        ))}
      </div>
    </div>
  );
}