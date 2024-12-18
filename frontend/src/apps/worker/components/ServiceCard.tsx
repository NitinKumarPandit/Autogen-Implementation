import React from 'react';
import { DollarSign, Clock, FileText, Edit, Trash } from 'lucide-react';
import { theme } from '../../../shared/utils/theme';
import type { ServiceOffering } from '../types';

interface ServiceCardProps {
  service: ServiceOffering;
  onEdit: (service: ServiceOffering) => void;
  onDelete: (serviceId: string) => void;
}

export function ServiceCard({ service, onEdit, onDelete }: ServiceCardProps) {
  return (
    <div 
      className="bg-white rounded-xl p-6 border"
      style={{ borderColor: theme.colors.border.light }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-medium mb-1" style={{ color: theme.colors.text.primary }}>
            {service.title}
          </h3>
          <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
            {service.description}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(service)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Edit className="w-5 h-5" style={{ color: theme.colors.text.secondary }} />
          </button>
          <button
            onClick={() => onDelete(service.id)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Trash className="w-5 h-5" style={{ color: theme.colors.text.secondary }} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center gap-2" style={{ color: theme.colors.text.secondary }}>
          <DollarSign className="w-4 h-4" />
          <span>${service.hourlyRate}/hr</span>
        </div>
        <div className="flex items-center gap-2" style={{ color: theme.colors.text.secondary }}>
          <Clock className="w-4 h-4" />
          <span>{service.availability}</span>
        </div>
        <div className="flex items-center gap-2" style={{ color: theme.colors.text.secondary }}>
          <FileText className="w-4 h-4" />
          <span>{service.workSamples.length} samples</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {service.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-sm"
            style={{ backgroundColor: theme.colors.primary.light, color: theme.colors.primary.main }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}