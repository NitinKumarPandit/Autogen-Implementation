export interface ICP {
  companyAttributes: string;
  contactAttributes: string;
}

export interface Persona {
  title: string;
  problem: string;
  solution: string;
  advantage: string;
  results: string;
  icp: ICP;
}

export interface CompanyData {
  logo: string;
  name: string;
  description: string;
  employeeSize: string;
  yearFounded: number;
  headquarters?: string;
  industry?: string;
  personas: Persona[];
}