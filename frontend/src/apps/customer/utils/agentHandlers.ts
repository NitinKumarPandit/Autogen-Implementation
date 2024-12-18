import type { User, MessageContent } from '../../../types';
import { mockConversation, mockProposal } from './mockProposalData';

let conversationIndex = 0;

// Strategy Consultant Handler
export const strategyConsultantHandler = {
  handleMessage: async (message: string): Promise<MessageContent> => {
    // Simulate response delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Get next mock response
    const response = mockConversation[conversationIndex + 1];
    conversationIndex = (conversationIndex + 2) % mockConversation.length;

    return response;
  },

  getInitialMessage: (): MessageContent => ({
    type: 'text',
    data: "I'm your Strategy Consultant. I'll help you develop and optimize your sales strategy. What are your main business objectives?"
  })
};

// List Builder Agent Handler
export const listBuilderHandler = {
  handleMessage: async (message: string): Promise<MessageContent> => {
    if (message.toLowerCase().includes('company') || message.toLowerCase().includes('companies')) {
      return {
        type: 'agent-response',
        data: {
          reasoning: "I've analyzed your requirements and found relevant companies matching your criteria. Here's my analysis:",
          output: {
            type: 'companies',
            data: []
          }
        }
      };
    }
    return {
      type: 'text',
      data: 'I can help you find relevant companies. Please specify your criteria (industry, location, size, etc.).'
    };
  },
  getInitialMessage: (): MessageContent => ({
    type: 'text',
    data: "I'm your AI List Builder. I can help you find and analyze companies based on your criteria. For example, try asking me about SaaS companies in the Bay Area."
  })
};

// Get handler for specific agent
export function getAgentHandler(agent: User) {
  switch (agent.role) {
    case 'Strategy Planning':
      return strategyConsultantHandler;
    case 'List Generation':
      return listBuilderHandler;
    default:
      return {
        handleMessage: async (message: string) => ({
          type: 'text',
          data: `I'll help you with your request: "${message}"`
        }),
        getInitialMessage: () => ({
          type: 'text',
          data: "How can I assist you today?"
        })
      };
  }
}