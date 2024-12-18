export type Channel = 'email' | 'linkedin' | 'cold-call' | 'social' | 'community';

export interface ChannelSettings {
  email?: {
    subject: string;
    template: string;
    followUpDays: number[];
  };
  linkedin?: {
    connectionMessage: string;
    followUpMessage: string;
  };
  'cold-call'?: {
    script: string;
    voicemailScript: string;
  };
  social?: {
    platforms: string[];
    message: string;
  };
  community?: {
    subreddits: string[];
    postTemplate: string;
  };
}

export interface CampaignData {
  channels: Channel[];
  channelSettings: Partial<ChannelSettings>;
}