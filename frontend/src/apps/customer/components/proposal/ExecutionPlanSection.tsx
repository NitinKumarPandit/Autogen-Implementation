import React from 'react';
import { ExecutionPlan } from '../../types/proposal';
import { theme } from '../../../../shared/utils/theme';

interface ExecutionPlanSectionProps {
  executionPlan: ExecutionPlan;
}

export function ExecutionPlanSection({ executionPlan }: ExecutionPlanSectionProps) {
  if (!executionPlan || !executionPlan.preparation || !executionPlan.weekly_workflow) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg p-6 border mb-6" style={{ borderColor: theme.colors.border.light }}>
      <h3 className="text-xl font-semibold mb-6" style={{ color: theme.colors.text.primary }}>
        Execution Plan
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3" style={{ color: theme.colors.text.primary }}>Preparation</h4>
          <ul className="list-disc list-inside space-y-2">
            {executionPlan.preparation.map((step, index) => (
              <li key={index} className="text-sm" style={{ color: theme.colors.text.secondary }}>{step}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3" style={{ color: theme.colors.text.primary }}>Weekly Workflow</h4>
          
          <div className="space-y-4">
            {Object.entries(executionPlan.weekly_workflow).map(([week, tasks]) => (
              <div key={week}>
                <h5 className="font-medium mb-2" style={{ color: theme.colors.text.primary }}>
                  {week.replace('_', ' ').toUpperCase()}
                </h5>
                <ul className="list-disc list-inside space-y-1">
                  {Array.isArray(tasks) && tasks.map((task, index) => (
                    <li key={index} className="text-sm" style={{ color: theme.colors.text.secondary }}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}