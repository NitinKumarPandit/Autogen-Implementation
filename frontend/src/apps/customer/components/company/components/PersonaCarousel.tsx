import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import { theme } from "../../../../../shared/utils/theme";
import { PersonaCard } from "./PersonaCard";
import type { Persona } from "../types";

interface PersonaCarouselProps {
  personas: Persona[];
  isEditing: boolean;
  onUpdate: (index: number, updatedPersona: Persona) => void;
  onEdit: () => void;
  onLaunchCampaign: (persona: Persona) => void;
}

export function PersonaCarousel({
  personas,
  isEditing,
  onUpdate,
  onEdit,
  onLaunchCampaign,
}: PersonaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? personas.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === personas.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <h2
            className="text-2xl font-semibold"
            style={{ color: theme.colors.text.primary }}
          >
            Target Personas
          </h2>
          <div
            className="px-3 py-1 rounded-full flex items-center gap-2 text-sm"
            style={{
              backgroundColor: theme.colors.primary.light,
              color: theme.colors.primary.main,
            }}
          >
            <Users className="w-4 h-4" />
            <span>{personas.length} Personas</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-lg border transition-colors hover:bg-gray-50"
            style={{ borderColor: theme.colors.border.light }}
          >
            <ChevronLeft
              className="w-5 h-5"
              style={{ color: theme.colors.text.primary }}
            />
          </button>
          <div
            className="px-3 py-1 rounded-lg text-sm font-medium"
            style={{ color: theme.colors.text.primary }}
          >
            {currentIndex + 1} / {personas.length}
          </div>
          <button
            onClick={handleNext}
            className="p-2 rounded-lg border transition-colors hover:bg-gray-50"
            style={{ borderColor: theme.colors.border.light }}
          >
            <ChevronRight
              className="w-5 h-5"
              style={{ color: theme.colors.text.primary }}
            />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {personas.map((persona, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ minWidth: "100%" }}
            >
              <PersonaCard
                persona={persona}
                isEditing={isEditing}
                onUpdate={(updatedPersona) => onUpdate(index, updatedPersona)}
                onEdit={onEdit}
                onLaunchCampaign={() => onLaunchCampaign(persona)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {personas.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="w-2 h-2 rounded-full transition-all"
            style={{
              backgroundColor:
                index === currentIndex
                  ? theme.colors.primary.main
                  : theme.colors.border.light,
            }}
          />
        ))}
      </div>
    </div>
  );
}