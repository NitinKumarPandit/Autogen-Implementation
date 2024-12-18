import { SalesProposal, MockConversation } from "../types/proposal";

export const mockProposal: SalesProposal = {
  company_name: "TechSales AI",
  short_description:
    "An AI-powered sales enablement platform that combines automation with human expertise to accelerate B2B sales cycles and increase conversion rates.",
  personas: [
    {
      persona: "Sales Managers",
      ICP: "B2B SaaS companies with 50-500 employees, $5M-$50M ARR, primarily in North America and Europe",
      pain_points: [
        "Manual and time-consuming sales processes",
        "Inconsistent sales performance across team members",
        "Difficulty scaling outreach efforts effectively",
      ],
      value_proposition:
        "Automate repetitive sales tasks while maintaining personalization, enabling sales teams to focus on high-value activities and close more deals",
      competitive_advantage: [
        "AI-powered personalization at scale",
        "Seamless integration with existing CRM systems",
        "Real-time performance analytics",
      ],
      results: [
        "40% increase in sales team productivity",
        "2.5x improvement in response rates",
        "30% reduction in sales cycle length",
      ],
    },
  ],
  channels: ["Email", "LinkedIn", "Cold Calling"],
  monthly_targets: {
    prospects_to_reach: 1000,
    email_outreach: {
      volume: 800,
      structure: "Multi-step sequences with specified touchpoints",
      goal: "10% response rate",
    },
    cold_calls: {
      volume: 500,
      structure: "Follow-up process specified for two rounds",
      goal: "15% conversation rate",
    },
    linkedin_messages: {
      volume: 400,
      structure:
        "Personalized outreach with connection requests and follow-ups",
      goal: "20% connection acceptance rate, 5% response rate",
    },
  },
  KPIs: {
    response_rate: "10% across email and LinkedIn",
    meetings_booked: "20-30 qualified meetings/month",
    pipeline_value: "$50,000-$75,000 in new pipeline monthly",
    conversion_rate: "20% of booked meetings lead to opportunities",
  },
  execution_plan: {
    detail: "Detailed week-by-week plan for outreach efforts",
  },
  tools: ["CRM", "Email Automation", "Analytics Dashboard"],
  expected_outcomes: "Increased sales efficiency and higher conversion rates",
};

export const mockConversation: MockConversation[] = [
  {
    request: {
      sender: "user",
      data: "Help me put together an outbound strategy.",
    },
    response: {
      sender: "agent",
      data: {
        reasoning:
          "Sure, I'll help you build the strategy, but I need to understand your company first. What is your company's website?",
      },
    },
  },
  {
    request: {
      sender: "user",
      data: "oneshot.ai",
    },
    response: {
      sender: "agent",
      data: {
        reasoning: "I've found your company profile. Let me analyze it for you.",
        output: {
          type: "company_profile",
          data: null
        }
      },
    },
  },
  {
    request: {
      sender: "user",
      data: "Yes, let's add target audiences.",
    },
    response: {
      sender: "agent",
      data: {
        reasoning:
          "Okay, I've now added target audiences like Sales Managers and SDR Managers based on your company profile.",
        preview: {
          personas: mockProposal.personas,
        },
        question: "Do you want to add key metrics for your outbound campaign?",
      },
    },
  },
  {
    request: {
      sender: "user",
      data: "Yes, let's add key metrics.",
    },
    response: {
      sender: "agent",
      data: {
        reasoning:
          "I've added key metrics like response rates, meetings booked, and pipeline growth for your campaign.",
        preview: {
          KPIs: mockProposal.KPIs,
        },
        question: "Should I prepare an execution plan next?",
      },
    },
  },
  {
    request: {
      sender: "user",
      data: "Yes, prepare an execution plan.",
    },
    response: {
      sender: "agent",
      data: {
        reasoning:
          "I've prepared a detailed week-by-week execution plan for multi-channel outreach.",
        preview: {
          execution_plan: mockProposal.execution_plan,
        },
        question: "Do you want to prioritize certain channels?",
      },
    },
  },
  {
    request: {
      sender: "user",
      data: "Yes, let's prioritize Email and LinkedIn.",
    },
    response: {
      sender: "agent",
      data: {
        reasoning:
          "I've prioritized Email and LinkedIn for your outreach efforts and updated the plan.",
        preview: {
          channels: mockProposal.channels,
        },
        question: "Should we set monthly volume targets for these channels?",
      },
    },
  },
  {
    request: {
      sender: "user",
      data: "Yes, set monthly targets.",
    },
    response: {
      sender: "agent",
      data: {
        reasoning:
          "Monthly targets have been set for Email, LinkedIn, and Cold Calling, ensuring alignment with your strategy.",
        preview: {
          monthly_targets: mockProposal.monthly_targets,
        },
        question: "Would you like me to add specific tools for this strategy?",
      },
    },
  },
  {
    request: {
      sender: "user",
      data: "Yes, let's add tools like CRM and Analytics Dashboard.",
    },
    response: {
      sender: "agent",
      data: {
        reasoning:
          "I've included CRM, Email Automation, and an Analytics Dashboard to support your strategy.",
        preview: {
          tools: mockProposal.tools,
        },
        question: "Do you want to define expected outcomes?",
      },
    },
  },
  {
    request: {
      sender: "user",
      data: "Yes, define expected outcomes.",
    },
    response: {
      sender: "agent",
      data: {
        reasoning:
          "I've defined expected outcomes like increased sales efficiency and higher conversion rates.",
        preview: {
          expected_outcomes: mockProposal.expected_outcomes,
        },
        question: "Anything else to add?",
      },
    },
  },
  {
    request: {
      sender: "user",
      data: "No, this looks good.",
    },
    response: {
      sender: "agent",
      data: {
        reasoning:
          "Your outbound strategy is now complete, covering all aspects from target audiences to tools and outcomes.",
        output: {
          type: "proposal",
          data: mockProposal
        },
      },
    },
  },
];