import React from 'react';
import { ListFilter, Settings, Rocket } from 'lucide-react';
import { theme } from '../../../../shared/utils/theme';

interface WizardNavProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const steps = [
  { number: 1, title: 'Select Channels', icon: ListFilter },
  { number: 2, title: 'Channel Settings', icon: Settings },
  { number: 3, title: 'Review & Launch', icon: Rocket },
];

export function WizardNav({ currentStep, onStepClick }: WizardNavProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = currentStep === step.number;
        const isCompleted = currentStep > step.number;

        return (
          <React.Fragment key={step.number}>
            {index > 0 && (
              <div
                className="flex-1 h-1 mx-4 rounded"
                style={{
                  backgroundColor: isCompleted
                    ? theme.colors.primary.main
                    : theme.colors.border.light,
                }}
              />
            )}
            <button
              onClick={() => onStepClick(step.number)}
              className={`flex flex-col items-center ${
                isActive ? '' : 'opacity-50'
              }`}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                style={{
                  backgroundColor: isActive
                    ? theme.colors.primary.main
                    : theme.colors.background.secondary,
                  color: isActive ? '#FFFFFF' : theme.colors.text.primary,
                }}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: theme.colors.text.primary }}
              >
                {step.title}
              </span>
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
}