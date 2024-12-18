import React from 'react';
import {
  X,
  MousePointer,
  Webhook,
  Clock,
  MessageSquare,
  Workflow,
  FileText,
  MoreHorizontal,
} from 'lucide-react';
import { theme } from '../../../../shared/utils/theme';

interface TriggerDrawerProps {
  onSelect: (triggerType: string) => void;
  onClose: () => void;
}

const triggers = [
  {
    id: 'manual',
    name: 'Trigger manually',
    description:
      'Runs the flow on clicking a button. Good for getting started quickly',
    icon: MousePointer,
  },
  {
    id: 'webhook',
    name: 'On webhook call',
    description: 'Runs the flow on receiving an HTTP request',
    icon: Webhook,
  },
  {
    id: 'schedule',
    name: 'On a schedule',
    description: 'Runs the flow every day, hour, or custom interval',
    icon: Clock,
  },
  {
    id: 'chat',
    name: 'On chat message',
    description:
      'Runs the flow when a user sends a chat message. For use with AI nodes',
    icon: MessageSquare,
  },
  {
    id: 'workflow',
    name: 'When called by another workflow',
    description:
      'Runs the flow when called by the Execute Workflow node from a different workflow',
    icon: Workflow,
  },
  {
    id: 'form',
    name: 'On form submission',
    description: 'Generate webforms and pass their responses to the workflow',
    icon: FileText,
  },
  {
    id: 'other',
    name: 'Other ways...',
    description: 'Runs the flow on workflow errors, file changes, etc.',
    icon: MoreHorizontal,
  },
];

export function TriggerDrawer({ onSelect, onClose }: TriggerDrawerProps) {
  return (
    <div className="h-full flex flex-col">
      <div
        className="p-4 border-b flex items-center justify-between"
        style={{ borderColor: theme.colors.border.light }}
      >
        <div>
          <h3
            className="text-lg font-semibold"
            style={{ color: theme.colors.text.primary }}
          >
            What triggers this workflow?
          </h3>
          <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
            A trigger is a step that starts your workflow
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" style={{ color: theme.colors.text.primary }} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {triggers.map((trigger) => {
            const Icon = trigger.icon;
            return (
              <button
                key={trigger.id}
                onClick={() => onSelect(trigger.name)}
                className="w-full p-4 rounded-lg border hover:border-primary-500 hover:bg-gray-50 transition-colors text-left flex gap-4"
                style={{ borderColor: theme.colors.border.light }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: theme.colors.primary.light }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: theme.colors.primary.main }}
                  />
                </div>
                <div>
                  <h4
                    className="font-medium"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {trigger.name}
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    {trigger.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
