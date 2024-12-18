import { MessageContent as BaseMessageContent, Message as BaseMessage } from '../../types';
import { SalesProposal } from './types/proposal';
import { CompanyData } from '../../components/company/types';

export interface AgentResponse {
  reasoning: string;
  question?: string;
  output: {
    type: 'companies' | 'table' | 'strategy' | 'analysis' | 'proposal' | 'company_profile';
    data: any;
  };
}

export interface MessageContent extends BaseMessageContent {
  type: 'text' | 'agent-response';
  data: string | AgentResponse;
}

export interface Message extends BaseMessage {
  content: MessageContent;
}