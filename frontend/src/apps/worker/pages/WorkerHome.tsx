import React, { useState } from 'react';
import { Briefcase, DollarSign, CheckCircle, ListTodo, Plus } from 'lucide-react';
import { StatsCard } from '../components/StatsCard';
import { TaskList } from '../components/TaskList';
import { ProjectCard } from '../components/ProjectCard';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceOfferingForm } from '../components/ServiceOfferingForm';
import { mockProjects, mockStats, mockTasks, mockServices } from '../utils/mockData';
import { theme } from '../../../shared/utils/theme';
import type { ServiceOffering } from '../types';

export default function WorkerHome() {
  const [tasks, setTasks] = useState(mockTasks);
  const [services, setServices] = useState(mockServices);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [editingService, setEditingService] = useState<ServiceOffering | null>(null);

  const handleTaskComplete = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddService = (service: Omit<ServiceOffering, 'id'>) => {
    const newService = {
      ...service,
      id: `service-${services.length + 1}`,
      workSamples: []
    };
    setServices([...services, newService]);
  };

  const handleEditService = (service: ServiceOffering) => {
    setEditingService(service);
    setShowServiceForm(true);
  };

  const handleDeleteService = (serviceId: string) => {
    setServices(services.filter(service => service.id !== serviceId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
            Worker Dashboard
          </h1>
          <p style={{ color: theme.colors.text.secondary }}>
            Track your projects, tasks, and performance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Projects Completed"
            value={mockStats.projectsCompleted}
            icon={Briefcase}
            trend={mockStats.projectsTrend}
          />
          <StatsCard
            title="Revenue Generated"
            value={mockStats.revenueGenerated}
            icon={DollarSign}
            trend={mockStats.revenueTrend}
          />
          <StatsCard
            title="Active Projects"
            value={mockStats.activeProjects}
            icon={ListTodo}
          />
          <StatsCard
            title="Tasks Completed"
            value={mockStats.tasksCompleted}
            icon={CheckCircle}
          />
        </div>

        {/* Service Offerings */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold" style={{ color: theme.colors.text.primary }}>
              Service Offerings
            </h2>
            <button
              onClick={() => setShowServiceForm(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white"
              style={{ backgroundColor: theme.colors.primary.main }}
            >
              <Plus className="w-5 h-5" />
              Add Service
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onEdit={handleEditService}
                onDelete={handleDeleteService}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Projects */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold" style={{ color: theme.colors.text.primary }}>
              Active Projects
            </h2>
            <div className="grid gap-6">
              {mockProjects
                .filter(project => project.status !== 'completed')
                .map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>

          {/* Pending Tasks */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold" style={{ color: theme.colors.text.primary }}>
              Pending Tasks
            </h2>
            <TaskList tasks={tasks} onTaskComplete={handleTaskComplete} />
          </div>
        </div>
      </div>

      {/* Service Offering Form Modal */}
      {showServiceForm && (
        <ServiceOfferingForm
          onSubmit={handleAddService}
          onClose={() => {
            setShowServiceForm(false);
            setEditingService(null);
          }}
        />
      )}
    </div>
  );
}