import React from 'react';
import { SalesProposal } from '../../types/proposal';
import { PersonaSection } from './PersonaSection';
import { ExecutionPlanSection } from './ExecutionPlanSection';
import { TargetsSection } from './TargetsSection';
import { theme } from '../../../../shared/utils/theme';

interface ProposalViewProps {
  proposal: SalesProposal;
}

export function ProposalView({ proposal }: ProposalViewProps) {
  if (!proposal) {
    return null;
  }

  const renderTools = () => {
    if (!proposal.tools || typeof proposal.tools !== 'object') {
      return null;
    }

    return Object.entries(proposal.tools).map(([category, tools]) => (
      <div key={category} className="mb-6 last:mb-0">
        <h4 className="text-lg font-medium mb-3" style={{ color: theme.colors.text.primary }}>
          {category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </h4>
        <div className="flex flex-wrap gap-2">
          {Array.isArray(tools) && tools.map((tool, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: theme.colors.primary.light, color: theme.colors.primary.main }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Company Overview Section */}
      <div className="bg-white rounded-xl p-8 border mb-8" style={{ borderColor: theme.colors.border.light }}>
        <h1 className="text-3xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>
          {proposal.company_name}
        </h1>
        <div>
          <h2 className="text-xl font-semibold mb-4" style={{ color: theme.colors.text.primary }}>
            Company Overview
          </h2>
          <p 
            className="text-lg leading-relaxed"
            style={{ color: theme.colors.text.secondary }}
          >
            {proposal.short_description}
          </p>
        </div>
      </div>

      {/* Target Personas Section */}
      {proposal.personas && proposal.personas.length > 0 && (
        <div className="mb-8">
          <h2 
            className="text-2xl font-semibold mb-6 px-8" 
            style={{ color: theme.colors.text.primary }}
          >
            Target Personas
          </h2>
          {proposal.personas.map((persona, index) => (
            <PersonaSection key={index} persona={persona} />
          ))}
        </div>
      )}

      {/* Monthly Targets Section */}
      {proposal.monthly_targets && (
        <div className="mb-8">
          <TargetsSection monthlyTargets={proposal.monthly_targets} />
        </div>
      )}

      {/* Execution Plan Section */}
      {proposal.execution_plan && (
        <div className="mb-8">
          <ExecutionPlanSection executionPlan={proposal.execution_plan} />
        </div>
      )}

      {/* Tools and KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Tools Section */}
        {proposal.tools && (
          <div className="bg-white rounded-xl p-8 border h-fit" style={{ borderColor: theme.colors.border.light }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: theme.colors.text.primary }}>
              Tools & Technology
            </h3>
            {renderTools()}
          </div>
        )}

        {/* KPIs and Outcomes Section */}
        {(proposal.KPIs || proposal.expected_outcomes) && (
          <div className="bg-white rounded-xl p-8 border h-fit" style={{ borderColor: theme.colors.border.light }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: theme.colors.text.primary }}>
              KPIs & Expected Outcomes
            </h3>
            
            {proposal.KPIs && (
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4" style={{ color: theme.colors.text.primary }}>
                  Key Performance Indicators
                </h4>
                <div className="space-y-3">
                  {Object.entries(proposal.KPIs).map(([metric, value]) => (
                    <div key={metric} className="flex justify-between items-center">
                      <span className="text-base" style={{ color: theme.colors.text.secondary }}>
                        {metric.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                      <span 
                        className="font-medium text-base"
                        style={{ color: theme.colors.primary.main }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {proposal.expected_outcomes && (
              <div>
                <h4 className="text-lg font-medium mb-4" style={{ color: theme.colors.text.primary }}>
                  Expected Outcomes
                </h4>
                <div className="space-y-4">
                  {Object.entries(proposal.expected_outcomes).map(([outcome, description]) => (
                    <div key={outcome} className="pb-4 border-b last:border-0 last:pb-0" style={{ borderColor: theme.colors.border.light }}>
                      <h5 className="font-medium mb-2" style={{ color: theme.colors.text.primary }}>
                        {outcome.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </h5>
                      <p className="text-base leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}