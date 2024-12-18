import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { CampaignWizard } from '../components/campaign';
import { theme } from '../../../shared/utils/theme';
import type { CampaignData } from '../types/campaign';

export default function CampaignLaunchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const persona = location.state?.persona;

  if (!persona) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 
            className="text-2xl font-bold mb-2"
            style={{ color: theme.colors.text.primary }}
          >
            No Persona Selected
          </h2>
          <button
            onClick={() => navigate('/app/customer/company-profile')}
            className="text-sm"
            style={{ color: theme.colors.primary.main }}
          >
            Return to Company Profile
          </button>
        </div>
      </div>
    );
  }

  const initialData: CampaignData = {
    channels: [],
    channelSettings: {}
  };

  const handleComplete = (data: CampaignData) => {
    console.log('Campaign Data:', data);
    // Handle campaign launch
    navigate('/app/customer/company-profile');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        showBack
        title={`Launch Campaign: ${persona.title}`}
        subtitle="Configure your outreach campaign settings"
      />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <CampaignWizard
          persona={persona}
          initialData={initialData}
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
}