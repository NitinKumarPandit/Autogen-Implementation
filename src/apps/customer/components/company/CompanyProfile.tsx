import React from "react";
import { CompanyHeader } from "./sections/CompanyHeader";
import { CompanyDescription } from "./sections/CompanyDescription";
import { CompanyMetrics } from "./sections/CompanyMetrics";
import { PersonaCarousel } from "./components/PersonaCarousel";
import { theme } from "../../../../shared/utils/theme";
import { useNavigate } from "react-router-dom";
import { useCompany } from "../../context/CompanyContext";
import type { Persona } from "./types";

export function CompanyProfile() {
  const navigate = useNavigate();
  const { companyData: data, updateCompanyData: handleUpdate } = useCompany();
  const [isEditing, setIsEditing] = React.useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleLaunchCampaign = (persona: Persona) => {
    navigate("/app/customer/campaign/launch", {
      state: { persona },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div
          className="bg-white rounded-2xl shadow-sm border overflow-hidden"
          style={{ borderColor: theme.colors.border.light }}
        >
          <CompanyHeader
            data={data}
            isEditing={isEditing}
            onUpdate={handleUpdate}
            onToggleEdit={() => setIsEditing(!isEditing)}
          />

          <div className="p-8 space-y-12">
            <CompanyDescription
              data={data}
              isEditing={isEditing}
              onUpdate={handleUpdate}
            />

            <CompanyMetrics
              data={data}
              isEditing={isEditing}
              onUpdate={handleUpdate}
            />

            <PersonaCarousel
              personas={data.personas}
              isEditing={isEditing}
              onUpdate={(index, updatedPersona) => {
                const newPersonas = [...data.personas];
                newPersonas[index] = updatedPersona;
                handleUpdate({ personas: newPersonas });
              }}
              onEdit={handleEdit}
              onLaunchCampaign={handleLaunchCampaign}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
