import React from 'react';
import { theme } from '../../../shared/utils/theme';

const trustedCompanies = [
  { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
  { name: 'Meta', logo: 'https://logo.clearbit.com/meta.com' },
  { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Apple', logo: 'https://logo.clearbit.com/apple.com' },
  { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' },
];

export function TrustedBy() {
  return (
    <div className="mt-12 mb-16 text-center">
      <p
        className="text-sm mb-6"
        style={{ color: theme.colors.text.secondary }}
      >
        TRUSTED BY LEADING COMPANIES WORLDWIDE
      </p>
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {trustedCompanies.map((company) => (
          <div
            key={company.name}
            className="transition-transform hover:scale-105"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-8 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
