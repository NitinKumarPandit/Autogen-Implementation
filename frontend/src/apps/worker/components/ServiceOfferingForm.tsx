import React, { useState } from 'react';
import { Plus, X, Upload } from 'lucide-react';
import { theme } from '../../../shared/utils/theme';
import type { ServiceOffering, WorkSample } from '../types';

interface ServiceOfferingFormProps {
  onSubmit: (service: Omit<ServiceOffering, 'id'>) => void;
  onClose: () => void;
}

export function ServiceOfferingForm({ onSubmit, onClose }: ServiceOfferingFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    skills: [] as string[],
    hourlyRate: 0,
    availability: 'full-time' as ServiceOffering['availability'],
    workSamples: [] as WorkSample[]
  });

  const [newSkill, setNewSkill] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b" style={{ borderColor: theme.colors.border.light }}>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold" style={{ color: theme.colors.text.primary }}>
              Add New Service Offering
            </h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5" style={{ color: theme.colors.text.secondary }} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="space-y-6">
            {/* Basic Information */}
            <div>
              <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
                Service Title *
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-2 mt-1 rounded-lg border"
                  style={{ borderColor: theme.colors.border.light }}
                  placeholder="e.g., Full Stack Development"
                />
              </label>
            </div>

            <div>
              <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
                Description *
                <textarea
                  required
                  value={formData.description}
                  onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-2 mt-1 rounded-lg border"
                  style={{ borderColor: theme.colors.border.light }}
                  rows={4}
                  placeholder="Describe your service offering..."
                />
              </label>
            </div>

            {/* Category and Rate */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
                  Category *
                  <select
                    required
                    value={formData.category}
                    onChange={e => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-2 mt-1 rounded-lg border"
                    style={{ borderColor: theme.colors.border.light }}
                  >
                    <option value="">Select category</option>
                    <option value="development">Development</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="writing">Writing</option>
                  </select>
                </label>
              </div>
              <div>
                <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
                  Hourly Rate ($) *
                  <input
                    type="number"
                    required
                    min="0"
                    value={formData.hourlyRate}
                    onChange={e => setFormData(prev => ({ ...prev, hourlyRate: Number(e.target.value) }))}
                    className="w-full px-4 py-2 mt-1 rounded-lg border"
                    style={{ borderColor: theme.colors.border.light }}
                  />
                </label>
              </div>
            </div>

            {/* Skills */}
            <div>
              <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
                Skills
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={e => setNewSkill(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg border"
                    style={{ borderColor: theme.colors.border.light }}
                    placeholder="Add a skill"
                    onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  />
                  <button
                    type="button"
                    onClick={addSkill}
                    className="px-4 py-2 rounded-lg"
                    style={{ backgroundColor: theme.colors.primary.main, color: '#FFFFFF' }}
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    style={{ backgroundColor: theme.colors.primary.light, color: theme.colors.primary.main }}
                  >
                    {skill}
                    <button type="button" onClick={() => removeSkill(skill)}>
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
                Availability *
                <select
                  required
                  value={formData.availability}
                  onChange={e => setFormData(prev => ({ ...prev, availability: e.target.value as ServiceOffering['availability'] }))}
                  className="w-full px-4 py-2 mt-1 rounded-lg border"
                  style={{ borderColor: theme.colors.border.light }}
                >
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                </select>
              </label>
            </div>

            {/* Work Samples */}
            <div>
              <label className="block mb-2" style={{ color: theme.colors.text.secondary }}>
                Work Samples
                <div
                  className="mt-1 border-2 border-dashed rounded-lg p-8 text-center"
                  style={{ borderColor: theme.colors.border.light }}
                >
                  <Upload className="w-8 h-8 mx-auto mb-2" style={{ color: theme.colors.text.secondary }} />
                  <p style={{ color: theme.colors.text.secondary }}>
                    Drag and drop work samples here, or click to select files
                  </p>
                </div>
              </label>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg border"
              style={{ borderColor: theme.colors.border.light }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg text-white"
              style={{ backgroundColor: theme.colors.primary.main }}
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}