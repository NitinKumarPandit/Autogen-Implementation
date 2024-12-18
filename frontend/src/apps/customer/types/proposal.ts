export interface Persona {
  persona: string;
  ICP: string;
  pain_points: string[];
  value_proposition: string;
  competitive_advantage: string[];
  results: string[];
}

export interface EmailOutreach {
  volume: number;
  structure: string;
  goal: string;
}

export interface ColdCalls {
  volume: number;
  structure: string;
  goal: string;
}

export interface LinkedInMessages {
  volume: number;
  structure: string;
  goal: string;
}

export interface MonthlyTargets {
  prospects_to_reach: number;
  email_outreach: EmailOutreach;
  cold_calls: ColdCalls;
  linkedin_messages: LinkedInMessages;
}

export interface WeeklyWorkflow {
  week_1: string[];
  week_2: string[];
  week_3: string[];
  week_4: string[];
}

export interface ExecutionPlan {
  preparation: string[];
  weekly_workflow: WeeklyWorkflow;
}

export interface Tools {
  email_automation: string[];
  data_enrichment: string[];
  crm_reporting: string[];
  linkedin_messaging: string[];
  cold_calling: string[];
}

export interface KPIs {
  response_rate: string;
  meetings_booked: string;
  pipeline_value: string;
  conversion_rate: string;
}

export interface ExpectedOutcomes {
  lead_generation: string;
  relationship_building: string;
  pipeline_growth: string;
}

export interface SalesProposal {
  company_name: string;
  short_description: string;
  personas: Persona[];
  channels: string[];
  monthly_targets: MonthlyTargets;
  execution_plan: ExecutionPlan;
  tools: Tools;
  KPIs: KPIs;
  expected_outcomes: ExpectedOutcomes;
}

export interface MockConversation {
  request: {
    sender: "user";
    data: string;
  };
  response: {
    sender: "agent";
    data: {
      reasoning?: string;
      question?: string;
      preview?: Partial<SalesProposal>;
      output?: string;
    };
  };
}