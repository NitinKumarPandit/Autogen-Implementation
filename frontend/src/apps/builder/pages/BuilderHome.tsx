import React from 'react';
import {
  Plus,
  Brain,
  Users,
  TrendingUp,
  DollarSign,
  Star,
  BarChart3,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../../shared/utils/theme';

// Mock data for builder stats
const builderStats = {
  totalAgents: 156,
  activeProjects: 892,
  revenueGenerated: '$1.2M',
  averageRating: 4.8,
  totalHires: 15234,
  categories: [
    { name: 'Sales & Marketing', agents: 45, revenue: '$450K', rating: 4.9 },
    { name: 'Design & Creative', agents: 38, revenue: '$380K', rating: 4.7 },
    { name: 'Development', agents: 35, revenue: '$320K', rating: 4.8 },
    { name: 'Content Creation', agents: 28, revenue: '$180K', rating: 4.6 },
  ],
};

export default function BuilderHome() {
  const navigate = useNavigate();

  const handleCreateAgent = () => {
    navigate('/app/builder/create');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div
        className="border-b"
        style={{ borderColor: theme.colors.border.light }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1
                className="text-2xl font-bold"
                style={{ color: theme.colors.text.primary }}
              >
                AI Agent Builder Dashboard
              </h1>
              <p
                className="mt-1"
                style={{ color: theme.colors.text.secondary }}
              >
                Manage and monitor your AI agents' performance
              </p>
            </div>
            <button
              onClick={handleCreateAgent}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: theme.colors.primary.main }}
            >
              <Plus className="w-5 h-5" />
              Create New Agent
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div
            className="bg-white rounded-xl p-6 border"
            style={{ borderColor: theme.colors.border.light }}
          >
            <div className="flex items-center gap-4">
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: theme.colors.primary.light }}
              >
                <Brain
                  className="w-6 h-6"
                  style={{ color: theme.colors.primary.main }}
                />
              </div>
              <div>
                <p
                  className="text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Total Agents
                </p>
                <p
                  className="text-2xl font-bold"
                  style={{ color: theme.colors.text.primary }}
                >
                  {builderStats.totalAgents}
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-xl p-6 border"
            style={{ borderColor: theme.colors.border.light }}
          >
            <div className="flex items-center gap-4">
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: theme.colors.primary.light }}
              >
                <Users
                  className="w-6 h-6"
                  style={{ color: theme.colors.primary.main }}
                />
              </div>
              <div>
                <p
                  className="text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Total Hires
                </p>
                <p
                  className="text-2xl font-bold"
                  style={{ color: theme.colors.text.primary }}
                >
                  {builderStats.totalHires.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-xl p-6 border"
            style={{ borderColor: theme.colors.border.light }}
          >
            <div className="flex items-center gap-4">
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: theme.colors.primary.light }}
              >
                <DollarSign
                  className="w-6 h-6"
                  style={{ color: theme.colors.primary.main }}
                />
              </div>
              <div>
                <p
                  className="text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Revenue Generated
                </p>
                <p
                  className="text-2xl font-bold"
                  style={{ color: theme.colors.text.primary }}
                >
                  {builderStats.revenueGenerated}
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-xl p-6 border"
            style={{ borderColor: theme.colors.border.light }}
          >
            <div className="flex items-center gap-4">
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: theme.colors.primary.light }}
              >
                <Star
                  className="w-6 h-6"
                  style={{ color: theme.colors.primary.main }}
                />
              </div>
              <div>
                <p
                  className="text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Average Rating
                </p>
                <p
                  className="text-2xl font-bold"
                  style={{ color: theme.colors.text.primary }}
                >
                  {builderStats.averageRating}/5
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Performance */}
        <div
          className="bg-white rounded-xl border p-6"
          style={{ borderColor: theme.colors.border.light }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2
              className="text-xl font-semibold"
              style={{ color: theme.colors.text.primary }}
            >
              Category Performance
            </h2>
            <button
              className="flex items-center gap-1 text-sm font-medium transition-colors"
              style={{ color: theme.colors.primary.main }}
            >
              <BarChart3 className="w-4 h-4" />
              View Detailed Analytics
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th
                    className="text-left py-3 px-4"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    Category
                  </th>
                  <th
                    className="text-left py-3 px-4"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    Active Agents
                  </th>
                  <th
                    className="text-left py-3 px-4"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    Revenue
                  </th>
                  <th
                    className="text-left py-3 px-4"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    Rating
                  </th>
                  <th
                    className="text-left py-3 px-4"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    Performance
                  </th>
                </tr>
              </thead>
              <tbody>
                {builderStats.categories.map((category, index) => (
                  <tr
                    key={index}
                    className="border-t"
                    style={{ borderColor: theme.colors.border.light }}
                  >
                    <td
                      className="py-4 px-4"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {category.name}
                    </td>
                    <td
                      className="py-4 px-4"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {category.agents}
                    </td>
                    <td
                      className="py-4 px-4"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {category.revenue}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1">
                        <Star
                          className="w-4 h-4"
                          style={{ color: theme.colors.primary.main }}
                        />
                        <span style={{ color: theme.colors.text.primary }}>
                          {category.rating}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${
                              (category.agents / builderStats.totalAgents) * 100
                            }%`,
                            backgroundColor: theme.colors.primary.main,
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
