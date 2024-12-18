import React from 'react';
import { Persona } from '../../types/proposal';
import { theme } from '../../../../shared/utils/theme';

interface PersonaSectionProps {
  persona: Persona;
}

export function PersonaSection({ persona }: PersonaSectionProps) {
  return (
    <div className="bg-white rounded-lg p-6 border mb-6" style={{ borderColor: theme.colors.border.light }}>
      <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.text.primary }}>
        {persona.persona}
      </h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2" style={{ color: theme.colors.text.primary }}>Ideal Customer Profile</h4>
          <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{persona.ICP}</p>
        </div>

        <div>
          <h4 className="font-medium mb-2" style={{ color: theme.colors.text.primary }}>Pain Points</h4>
          <ul className="list-disc list-inside space-y-1">
            {persona.pain_points.map((point, index) => (
              <li key={index} className="text-sm" style={{ color: theme.colors.text.secondary }}>{point}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2" style={{ color: theme.colors.text.primary }}>Value Proposition</h4>
          <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{persona.value_proposition}</p>
        </div>

        <div>
          <h4 className="font-medium mb-2" style={{ color: theme.colors.text.primary }}>Competitive Advantages</h4>
          <ul className="list-disc list-inside space-y-1">
            {persona.competitive_advantage.map((advantage, index) => (
              <li key={index} className="text-sm" style={{ color: theme.colors.text.secondary }}>{advantage}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2" style={{ color: theme.colors.text.primary }}>Results</h4>
          <ul className="list-disc list-inside space-y-1">
            {persona.results.map((result, index) => (
              <li key={index} className="text-sm" style={{ color: theme.colors.text.secondary }}>{result}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}