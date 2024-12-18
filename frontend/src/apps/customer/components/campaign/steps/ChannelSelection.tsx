import React from 'react';
import { Mail, Linkedin, Phone, Share2, MessageCircle, Info } from 'lucide-react';
import { theme } from '../../../../../shared/utils/theme';
import type { Channel } from '../../../types/campaign';

interface ChannelSelectionProps {
  selectedChannels: Channel[];
  onChange: (channels: Channel[]) => void;
}

const channels: Array<{
  id: Channel;
  name: string;
  icon: React.ElementType;
  description: string;
  benefits: string[];
  metrics?: string;
}> = [
  {
    id: 'email',
    name: 'Email Outreach',
    icon: Mail,
    description: 'Automate personalized email sequences with smart follow-ups',
    benefits: [
      'Average 35% open rates',
      'Automated follow-up sequences',
      'A/B testing capabilities',
      'Performance analytics'
    ],
    metrics: '3x higher response rates with personalization'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Outreach',
    icon: Linkedin,
    description: 'Connect and engage through voice notes, messages, and videos',
    benefits: [
      'Voice notes increase reply rates by 20%',
      'Direct access to decision makers',
      'Professional network building',
      'InMail credits included'
    ],
    metrics: '89% of B2B executives prefer LinkedIn'
  },
  {
    id: 'cold-call',
    name: 'Cold Calling',
    icon: Phone,
    description: 'Professional cold callers with proven scripts and training',
    benefits: [
      'Live conversation opportunities',
      'Immediate feedback and insights',
      'Territory management',
      'Call recording and analytics'
    ],
    metrics: '15% average meeting booking rate'
  },
  {
    id: 'social',
    name: 'LinkedIn Social Selling',
    icon: Share2,
    description: 'Build brand trust through strategic content and engagement',
    benefits: [
      'Thought leadership positioning',
      'Content strategy included',
      'Engagement automation',
      'Network growth'
    ],
    metrics: '2.5x higher engagement rates'
  },
  {
    id: 'community',
    name: 'Reddit Community',
    icon: MessageCircle,
    description: 'Engage niche communities to build authentic relationships',
    benefits: [
      'Access to targeted communities',
      'Authentic engagement',
      'Brand awareness building',
      'Community insights'
    ],
    metrics: '78% trust recommendations from communities'
  },
];

export function ChannelSelection({ selectedChannels, onChange }: ChannelSelectionProps) {
  const toggleChannel = (channelId: Channel) => {
    if (selectedChannels.includes(channelId)) {
      onChange(selectedChannels.filter((id) => id !== channelId));
    } else {
      onChange([...selectedChannels, channelId]);
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 
          className="text-2xl font-semibold mb-2" 
          style={{ color: theme.colors.text.primary }}
        >
          Where would you like to reach your audience?
        </h2>
        <p 
          className="text-lg"
          style={{ color: theme.colors.text.secondary }}
        >
          Choose the channels that best align with your outreach strategy
        </p>
      </div>

      <div className="grid gap-6">
        {channels.map((channel) => {
          const Icon = channel.icon;
          const isSelected = selectedChannels.includes(channel.id);

          return (
            <button
              key={channel.id}
              onClick={() => toggleChannel(channel.id)}
              className={`flex items-start gap-6 p-6 rounded-xl border transition-all hover:shadow-md ${
                isSelected ? 'border-2' : ''
              }`}
              style={{
                borderColor: isSelected
                  ? theme.colors.primary.main
                  : theme.colors.border.light,
                backgroundColor: isSelected
                  ? theme.colors.primary.light
                  : theme.colors.background.main,
              }}
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: isSelected
                    ? theme.colors.primary.main
                    : theme.colors.background.secondary,
                }}
              >
                <Icon
                  className="w-8 h-8"
                  style={{
                    color: isSelected ? '#FFFFFF' : theme.colors.primary.main,
                  }}
                />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <h3
                    className="text-lg font-medium"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {channel.name}
                  </h3>
                  {channel.metrics && (
                    <div 
                      className="px-2 py-1 rounded-full text-xs"
                      style={{ 
                        backgroundColor: theme.colors.primary.main,
                        color: '#FFFFFF'
                      }}
                    >
                      {channel.metrics}
                    </div>
                  )}
                </div>
                <p
                  className="text-sm mb-4"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {channel.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {channel.benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: theme.colors.primary.main }}
                      />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selectedChannels.length > 0 && (
        <div 
          className="mt-8 p-4 rounded-lg text-center"
          style={{ backgroundColor: theme.colors.background.secondary }}
        >
          <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
            <span className="font-medium" style={{ color: theme.colors.primary.main }}>
              {selectedChannels.length} channels selected
            </span>
            {' '}• Click Continue to customize each channel's settings
          </p>
        </div>
      )}
    </div>
  );
}