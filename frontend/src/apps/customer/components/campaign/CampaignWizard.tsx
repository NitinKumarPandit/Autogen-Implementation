import React, { useState } from 'react';
import { WizardNav } from './WizardNav';
import { ChannelSelection } from './steps/ChannelSelection';
import { ChannelCustomization } from './steps/ChannelCustomization';
import { CampaignReview } from './steps/CampaignReview';
import { theme } from '../../../../shared/utils/theme';
import type { CampaignData } from '../../types/campaign';
import type { Persona } from '../../types/persona';

interface CampaignWizardProps {
  persona: Persona;
  initialData: CampaignData;
  onComplete: (data: CampaignData) => void;
}

export function CampaignWizard({
  persona,
  initialData,
  onComplete,
}: CampaignWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<CampaignData>(initialData);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(data);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateData = (updates: Partial<CampaignData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const canContinue = () => {
    switch (currentStep) {
      case 1:
        return data.channels.length > 0;
      case 2:
        return Object.keys(data.channelSettings).length >= data.channels.length;
      default:
        return true;
    }
  };

  return (
    <div>
      <WizardNav currentStep={currentStep} onStepClick={setCurrentStep} />

      <div
        className="bg-white rounded-xl border p-6 mb-8"
        style={{ borderColor: theme.colors.border.light }}
      >
        {currentStep === 1 && (
          <ChannelSelection
            selectedChannels={data.channels}
            onChange={(channels) => updateData({ channels })}
          />
        )}
        {currentStep === 2 && (
          <ChannelCustomization
            channels={data.channels}
            settings={data.channelSettings}
            onChange={(channelSettings) => updateData({ channelSettings })}
          />
        )}
        {currentStep === 3 && (
          <CampaignReview persona={persona} campaignData={data} />
        )}
      </div>

      <div className="flex justify-between">
        {currentStep > 1 ? (
          <button
            onClick={handleBack}
            className="px-6 py-2 rounded-lg border"
            style={{ borderColor: theme.colors.border.light }}
          >
            Back
          </button>
        ) : (
          <div />
        )}

        <button
          onClick={handleNext}
          disabled={!canContinue()}
          className="px-6 py-2 rounded-lg text-white disabled:opacity-50"
          style={{ backgroundColor: theme.colors.primary.main }}
        >
          {currentStep === 3 ? 'Launch Campaign' : 'Continue'}
        </button>
      </div>
    </div>
  );
}