import { useState } from 'react';
import { CompanyData } from '../types';
import { initialCompanyData } from '../data/initialData';

export function useCompanyData() {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState<CompanyData>(initialCompanyData);

  const handleUpdate = (section: keyof CompanyData, value: any) => {
    setData(prev => ({
      ...prev,
      [section]: value
    }));
  };

  return {
    data,
    isEditing,
    setIsEditing,
    handleUpdate
  };
}