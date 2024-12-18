export interface Persona {
  title: string;
  description: string;
  problem: string;
  solution: string;
  advantage: string;
  results: string;
  pain_points: string[];
  value_proposition: string;
  icp: {
    companyAttributes: string;
    contactAttributes: string;
  };
}