import React from 'react';

const aiAgents = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdT9EcQENGWg-LhKhXS7KWgw6Gnz1Gl2Uag&s',
    position: 'top-20'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JZPb-KVA7JuKHIqWmFf16mJWiBqPUhV83g&s',
    position: 'top-64'
  },
  {
    image: 'https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg',
    position: 'top-[28rem]'
  }
];

const humanExperts = [
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop',
    position: 'top-24'
  },
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop',
    position: 'top-80'
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
    position: 'top-[32rem]'
  }
];

interface AgentImagesProps {
  side: 'left' | 'right';
}

export function AgentImages({ side }: AgentImagesProps) {
  const agents = side === 'left' ? aiAgents : humanExperts;
  
  return (
    <div className="absolute inset-y-0 w-36" style={{ [side]: '3rem' }}>
      {agents.map((agent, index) => (
        <div
          key={index}
          className={`absolute ${agent.position} ${side === 'left' ? 'left-0' : 'right-0'} w-24 h-24 rounded-xl overflow-hidden transform transition-all duration-700 hover:scale-105`}
          style={{ 
            boxShadow: '0 0 20px rgba(0,0,0,0.2)',
            animation: `float-${index} 6s ease-in-out infinite`,
            animationDelay: `${index * 2}s`
          }}
        >
          <img
            src={agent.image}
            alt={side === 'left' ? 'AI Agent' : 'Human Expert'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      ))}

      <style>
        {agents.map((_, index) => `
          @keyframes float-${index} {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `).join('\n')}
      </style>
    </div>
  );
}