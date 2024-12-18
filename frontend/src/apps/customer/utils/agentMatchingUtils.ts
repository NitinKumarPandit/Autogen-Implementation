import type { User } from '../types';
import { findRelevantAgents } from './agentUtils';

// Keywords mapped to job functions
const keywordMap: Record<string, string[]> = {
  sales: [
    'sales',
    'outbound',
    'gtm',
    'go-to-market',
    'campaign',
    'leads',
    'prospects',
    'revenue',
    'pipeline',
    'deals',
    'customers',
    'accounts',
    'business development',
    'cold calling',
    'email campaigns'
  ],
  marketing: [
    'marketing',
    'advertising',
    'branding',
    'social media',
    'content',
    'seo',
    'ppc',
    'growth',
    'acquisition'
  ],
  development: [
    'development',
    'coding',
    'programming',
    'software',
    'web',
    'app',
    'mobile',
    'frontend',
    'backend'
  ],
  design: [
    'design',
    'ui',
    'ux',
    'user interface',
    'user experience',
    'graphic',
    'visual',
    'brand identity'
  ],
  support: [
    'support',
    'customer service',
    'help desk',
    'technical support',
    'customer success'
  ]
};

export function findMatchingAgents(query: string): { agents: User[], message?: string } {
  // Convert query to lowercase for case-insensitive matching
  const lowercaseQuery = query.toLowerCase();
  
  // Find matching job functions based on keywords
  const matchedFunctions = Object.entries(keywordMap).filter(([_, keywords]) =>
    keywords.some(keyword => lowercaseQuery.includes(keyword))
  ).map(([func]) => func);

  // If no matching job functions found
  if (matchedFunctions.length === 0) {
    return {
      agents: [],
      message: "We're still building our team of agents for this type of project. Join our waitlist to be notified when we have the perfect agents for your needs!"
    };
  }

  // Get all agents
  const allAgents = findRelevantAgents(query);

  // Filter agents by matched job functions
  const matchedAgents = allAgents.filter(agent => 
    matchedFunctions.includes(agent.jobFunction.toLowerCase())
  );

  // If no agents found for the matched functions
  if (matchedAgents.length === 0) {
    return {
      agents: [],
      message: `While we have expertise in ${matchedFunctions.join(', ')}, our agents for this specific request are currently fully booked. Please join our waitlist for priority access!`
    };
  }

  return { agents: matchedAgents };
}