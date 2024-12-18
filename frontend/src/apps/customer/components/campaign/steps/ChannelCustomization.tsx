import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Phone,
  Share2,
  MessageCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { theme } from "../../../../../shared/utils/theme";
import {
  LinkedInSettings,
  ColdCallSettings,
  SocialSettings,
  CommunitySettings,
} from "../channel-settings";

import EmailSequence from "../channel-settings/EmailSequence";
import type {
  Channel,
  ChannelSettings as ChannelSettingsType,
} from "../../../types/campaign";

interface ChannelCustomizationProps {
  channels: Channel[];
  settings: Partial<ChannelSettingsType>;
  onChange: (settings: Partial<ChannelSettingsType>) => void;
}

export function ChannelCustomization({
  channels,
  settings,
  onChange,
}: ChannelCustomizationProps) {
  const [currentChannelIndex, setCurrentChannelIndex] = useState(0);
  const currentChannel = channels[currentChannelIndex];

  const handleNext = () => {
    if (currentChannelIndex < channels.length - 1) {
      setCurrentChannelIndex(currentChannelIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentChannelIndex > 0) {
      setCurrentChannelIndex(currentChannelIndex - 1);
    }
  };

  const updateSettings = (channelSettings: any) => {
    onChange({
      ...settings,
      [currentChannel]: channelSettings,
    });
  };

  const channelComponents = {
    email: EmailSequence,
    linkedin: LinkedInSettings,
    "cold-call": ColdCallSettings,
    social: SocialSettings,
    community: CommunitySettings,
  };

  const ChannelComponent = channelComponents[currentChannel];

  return (
    <div>
      <div className="text-center mb-8">
        <h2
          className="text-2xl font-semibold mb-2"
          style={{ color: theme.colors.text.primary }}
        >
          Customize Your Channels
        </h2>
        <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
          Configure settings for each selected channel
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevious}
          disabled={currentChannelIndex === 0}
          className="p-2 rounded-lg transition-colors disabled:opacity-50"
          style={{ color: theme.colors.text.secondary }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="text-center">
          <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
            Channel {currentChannelIndex + 1} of {channels.length}
          </p>
        </div>
        <button
          onClick={handleNext}
          disabled={currentChannelIndex === channels.length - 1}
          className="p-2 rounded-lg transition-colors disabled:opacity-50"
          style={{ color: theme.colors.text.secondary }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div>
        <ChannelComponent
          settings={settings[currentChannel]}
          onChange={updateSettings}
        />
      </div>
    </div>
  );
}
