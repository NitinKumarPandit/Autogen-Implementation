import React from 'react';
import { Mail, Linkedin, Phone, Share2, MessageCircle, Check } from 'lucide-react';
import { theme } from '../../../../../shared/utils/theme';
import type { CampaignData } from '../../../types/campaign';
import type { Persona } from '../../../types/persona';

interface CampaignReviewProps {
  persona: Persona;
  campaignData: CampaignData;
}

const channelIcons = {
  email: Mail,
  linkedin: Linkedin,
  'cold-call': Phone,
  social: Share2,
  community: MessageCircle
};

const channelNames = {
  email: 'Email Outreach',
  linkedin: 'LinkedIn',
  'cold-call': 'Cold Calling',
  social: 'Social Selling',
  community: 'Reddit Community'
};

export function CampaignReview({ persona, campaignData }: CampaignReviewProps) {
  // Extract pain points from the problem description if not available directly
  const painPoints = persona.pain_points || [persona.problem];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6" style={{ color: theme.colors.text.primary }}>
        Campaign Review
      </h2>

      {/* Target Persona */}
      <div 
        className="bg-white rounded-lg p-6 border mb-6"
        style={{ borderColor: theme.colors.border.light }}
      >
        <h3 className="text-lg font-medium mb-4" style={{ color: theme.colors.text.primary }}>
          Target Persona
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2" style={{ color: theme.colors.text.primary }}>
              {persona.title}
            </h4>
            <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
              {persona.description || persona.solution}
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2" style={{ color: theme.colors.text.primary }}>
              Pain Points & Challenges
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {painPoints.map((point, index) => (
                <li key={index} className="text-sm" style={{ color: theme.colors.text.secondary }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2" style={{ color: theme.colors.text.primary }}>
              Value Proposition
            </h4>
            <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
              {persona.value_proposition || persona.solution}
            </p>
          </div>
        </div>
      </div>

      {/* Selected Channels */}
      <div 
        className="bg-white rounded-lg p-6 border mb-6"
        style={{ borderColor: theme.colors.border.light }}
      >
        <h3 className="text-lg font-medium mb-4" style={{ color: theme.colors.text.primary }}>
          Selected Channels
        </h3>
        <div className="space-y-4">
          {campaignData.channels.map(channel => {
            const Icon = channelIcons[channel];
            const settings = campaignData.channelSettings[channel];

            return (
              <div 
                key={channel}
                className="flex items-start gap-4 p-4 rounded-lg"
                style={{ backgroundColor: theme.colors.background.secondary }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: theme.colors.primary.light }}
                >
                  <Icon className="w-5 h-5" style={{ color: theme.colors.primary.main }} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2" style={{ color: theme.colors.text.primary }}>
                    {channelNames[channel]}
                  </h4>
                  <div className="space-y-2">
                    {settings && Object.entries(settings).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <Check className="w-4 h-4" style={{ color: theme.colors.primary.main }} />
                        <span className="text-sm" style={{ color: theme.colors.text.secondary }}>
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}: {
                            Array.isArray(value) ? value.join(', ') : value
                          }
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Campaign Summary */}
      <div 
        className="bg-white rounded-lg p-6 border"
        style={{ borderColor: theme.colors.border.light }}
      >
        <h3 className="text-lg font-medium mb-4" style={{ color: theme.colors.text.primary }}>
          Campaign Summary
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
              This campaign will target {persona.title} using {campaignData.channels.length} channels.
              The campaign is configured to address their key pain points through personalized outreach
              across {campaignData.channels.map(c => channelNames[c]).join(', ')}.
            </p>
          </div>
          <div 
            className="p-4 rounded-lg"
            style={{ backgroundColor: theme.colors.primary.light }}
          >
            <p 
              className="text-sm font-medium"
              style={{ color: theme.colors.primary.main }}
            >
              Ready to launch! Review the settings above and click "Launch Campaign" to begin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}