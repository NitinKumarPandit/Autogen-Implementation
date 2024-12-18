import React from 'react';
import { MonthlyTargets } from '../../types/proposal';
import { theme } from '../../../../shared/utils/theme';

interface TargetsSectionProps {
  monthlyTargets: MonthlyTargets;
}

export function TargetsSection({ monthlyTargets }: TargetsSectionProps) {
  return (
    <div className="bg-white rounded-lg p-6 border mb-6" style={{ borderColor: theme.colors.border.light }}>
      <h3 className="text-xl font-semibold mb-6" style={{ color: theme.colors.text.primary }}>
        Monthly Targets
      </h3>

      <div className="space-y-6">
        <div className="text-center p-4 rounded-lg" style={{ backgroundColor: theme.colors.background.secondary }}>
          <div className="text-3xl font-bold mb-2" style={{ color: theme.colors.primary.main }}>
            {monthlyTargets.prospects_to_reach.toLocaleString()}
          </div>
          <div className="text-sm" style={{ color: theme.colors.text.secondary }}>
            Total Prospects to Reach
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border" style={{ borderColor: theme.colors.border.light }}>
            <h4 className="font-medium mb-3" style={{ color: theme.colors.text.primary }}>Email Outreach</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: theme.colors.text.secondary }}>Volume:</span>
                <span className="font-medium" style={{ color: theme.colors.text.primary }}>{monthlyTargets.email_outreach.volume}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: theme.colors.text.secondary }}>Goal:</span>
                <span className="font-medium" style={{ color: theme.colors.text.primary }}>{monthlyTargets.email_outreach.goal}</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg border" style={{ borderColor: theme.colors.border.light }}>
            <h4 className="font-medium mb-3" style={{ color: theme.colors.text.primary }}>Cold Calls</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: theme.colors.text.secondary }}>Volume:</span>
                <span className="font-medium" style={{ color: theme.colors.text.primary }}>{monthlyTargets.cold_calls.volume}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: theme.colors.text.secondary }}>Goal:</span>
                <span className="font-medium" style={{ color: theme.colors.text.primary }}>{monthlyTargets.cold_calls.goal}</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg border" style={{ borderColor: theme.colors.border.light }}>
            <h4 className="font-medium mb-3" style={{ color: theme.colors.text.primary }}>LinkedIn Messages</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: theme.colors.text.secondary }}>Volume:</span>
                <span className="font-medium" style={{ color: theme.colors.text.primary }}>{monthlyTargets.linkedin_messages.volume}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: theme.colors.text.secondary }}>Goal:</span>
                <span className="font-medium" style={{ color: theme.colors.text.primary }}>{monthlyTargets.linkedin_messages.goal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}