import React from "react";
import { Header } from "../components/Header";
import { CompanyProfile } from "../components/company/CompanyProfile";

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        showBack
        title="Company Profile"
        subtitle="View and edit your company information"
      />
      <CompanyProfile />
    </div>
  );
}
