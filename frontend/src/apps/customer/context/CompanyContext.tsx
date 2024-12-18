import React, { createContext, useContext, useState } from "react";
import { CompanyData } from "../components/company/types";
import { initialCompanyData } from "../components/company/data/initialData";

interface CompanyContextType {
  companyData: CompanyData;
  updateCompanyData: (updates: Partial<CompanyData>) => void;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export function CompanyProvider({ children }: { children: React.ReactNode }) {
  const [companyData, setCompanyData] =
    useState<CompanyData>(initialCompanyData);

  const updateCompanyData = (updates: Partial<CompanyData>) => {
    console.log("Updating Company data: ", updates);
    setCompanyData((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  return (
    <CompanyContext.Provider value={{ companyData, updateCompanyData }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }
  return context;
}
