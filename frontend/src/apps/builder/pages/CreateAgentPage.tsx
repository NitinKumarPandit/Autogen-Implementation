import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { WizardNav } from '../components/wizard/WizardNav';
import { BasicInfoStep } from '../components/wizard/BasicInfoStep';
import { WorkflowStep } from '../components/wizard/WorkflowStep';
import { PublishStep } from '../components/wizard/PublishStep';
import { theme } from '../../../shared/utils/theme';

export default function CreateAgentPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    role: '',
    backstory: '',
  });
  const [publishInfo, setPublishInfo] = useState({
    icon: '',
    screenshots: [],
    categories: [],
    pricing: 'free',
    description: '',
  });

  const handleBasicInfoChange = (field: string, value: string) => {
    setBasicInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handlePublishInfoChange = (field: string, value: any) => {
    setPublishInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handlePublish = () => {
    // Implement publish logic
    console.log('Publishing agent:', { basicInfo, publishInfo });
    navigate('/app/builder');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div
        className="border-b"
        style={{ borderColor: theme.colors.border.light }}
      >
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/app/builder')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft
                className="w-5 h-5"
                style={{ color: theme.colors.text.primary }}
              />
            </button>
            <div>
              <h1
                className="text-2xl font-bold"
                style={{ color: theme.colors.text.primary }}
              >
                Create New AI Agent
              </h1>
              <p style={{ color: theme.colors.text.secondary }}>
                Configure and test your AI agent before publishing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <WizardNav currentStep={currentStep} onStepClick={setCurrentStep} />

        <div
          className="bg-white rounded-xl border p-6 mb-8"
          style={{ borderColor: theme.colors.border.light }}
        >
          {currentStep === 1 && (
            <BasicInfoStep
              formData={basicInfo}
              onChange={handleBasicInfoChange}
            />
          )}
          {currentStep === 2 && <WorkflowStep />}
          {currentStep === 3 && (
            <PublishStep
              formData={publishInfo}
              onChange={handlePublishInfoChange}
            />
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

          {currentStep < 3 ? (
            <button
              onClick={handleNext}
              className="px-6 py-2 rounded-lg text-white"
              style={{ backgroundColor: theme.colors.primary.main }}
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handlePublish}
              className="px-6 py-2 rounded-lg text-white"
              style={{ backgroundColor: theme.colors.primary.main }}
            >
              Publish Agent
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
