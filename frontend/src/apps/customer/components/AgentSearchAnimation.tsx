import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { theme } from '../../../shared/utils/theme';

const aiAvatars = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdT9EcQENGWg-LhKhXS7KWgw6Gnz1Gl2Uag&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JZPb-KVA7JuKHIqWmFf16mJWiBqPUhV83g&s',
  'https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg',
  'https://pub-static.fotor.com/assets/ai-avatar/styles/9fnbdd0ui900.jpg',
  'https://pub-static.fotor.com/assets/ai-avatar/styles/fotorWeb/pqti6k8ypxh7.jpg',
];

const humanAvatars = [
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
];

export function AgentSearchAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const allAvatars = [...aiAvatars, ...humanAvatars];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allAvatars.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Large Search Icon */}
      <div className="relative w-32 h-32 mx-auto mb-8">
        <Search
          className="w-full h-full animate-pulse"
          style={{ color: theme.colors.primary.main }}
        />

        {/* Orbiting Avatars */}
        <div className="absolute inset-0 animate-spin-slow">
          {allAvatars.map((avatar, index) => (
            <div
              key={index}
              className={`absolute w-12 h-12 rounded-full transition-opacity duration-500 ${
                index === currentIndex
                  ? 'opacity-100 scale-110'
                  : 'opacity-40 scale-90'
              }`}
              style={{
                transform: `rotate(${
                  (360 / allAvatars.length) * index
                }deg) translateY(-80px)`,
                transformOrigin: 'center center',
              }}
            >
              <img
                src={avatar}
                alt="Agent Avatar"
                className="w-full h-full rounded-full object-cover border-2"
                style={{ borderColor: theme.colors.primary.main }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0">
        <div
          className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent animate-scan"
          style={{ backgroundColor: theme.colors.primary.light }}
        />
      </div>
    </div>
  );
}
