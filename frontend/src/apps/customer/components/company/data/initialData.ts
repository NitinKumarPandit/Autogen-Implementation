import { CompanyData } from '../types';

export const initialCompanyData: CompanyData = {
  logo: "https://logo.clearbit.com/oneshot.ai",
  name: 'OneShot.ai',
  description: 'OneShot.ai is an AI-powered platform that automates outbound sales prospecting. By leveraging advanced machine learning and generative AI technologies, it enables sales teams to identify ideal customer profiles, source leads, conduct in-depth research, and generate personalized messaging at scale.',
  employeeSize: '5 employees',
  yearFounded: 2020,
  headquarters: 'San Francisco, CA',
  industry: 'AI & Sales Technology',
  personas: [
    {
      title: 'Sales Representatives',
      problem: 'Manual prospecting and outreach are time-consuming, leading to inefficiencies and reduced productivity.',
      solution: 'OneShot.ai automates prospect research and multichannel messaging, enabling sales reps to focus on high-value activities like direct engagement and follow-ups.',
      advantage: 'By crafting personalized messages for email, LinkedIn, and cold calling, OneShot.ai enhances outreach effectiveness and streamlines the sales process.',
      results: 'Companies have reported improved open rates and significant time savings, allowing teams to concentrate on building customer relationships.',
      icp: {
        companyAttributes: 'Companies in Tech industry, Venture funded in Series A+ stage with company sizes between 200-300 employees',
        contactAttributes: 'SDRs with total tenure of 3 years and stays 1 year in the current company'
      }
    },
    {
      title: 'Sales Managers',
      problem: 'Ensuring consistent and effective outreach across the sales team is challenging, often resulting in missed opportunities and inconsistent messaging.',
      solution: 'OneShot.ai provides AI-powered tools that automate and personalize outreach, ensuring uniformity and effectiveness in communication.',
      advantage: 'The platform integrates seamlessly with existing sales tools like Salesloft, Outreach, and Apollo, enhancing team productivity without overhauling current workflows.',
      results: 'Organizations have experienced doubled results without increasing hiring, as OneShot.ai allows teams to focus on high-value activities.',
      icp: {
        companyAttributes: 'Companies in Tech industry, Venture funded in Series A+ stage with company sizes between 200-300 employees',
        contactAttributes: 'Sales Managers with 5+ years experience managing SDR teams of 5+ people'
      }
    },
    {
      title: 'Revenue Operations Professionals',
      problem: 'Optimizing sales processes and strategies is complex, especially with disparate data sources and manual workflows.',
      solution: 'OneShot.ai automates prospecting processes, providing deep insights and personalized outreach at scale, which streamlines operations and enhances data-driven decision-making.',
      advantage: 'The platform\'s advanced AI capabilities and integration with leading sales tools enable efficient process optimization and improved sales strategies.',
      results: 'Companies like HuLoop have built multichannel demand generation machines with AI, leading to increased industry profiles and sales pipelines.',
      icp: {
        companyAttributes: 'Companies in Tech industry, Venture funded in Series A+ stage with company sizes between 200-300 employees',
        contactAttributes: 'RevOps leaders with experience in implementing and managing sales tech stacks'
      }
    }
  ]
};