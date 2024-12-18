import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare, Users, ArrowRight } from 'lucide-react';
import type { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">
              {job.title}
            </h3>
            <p className="text-sm text-gray-500">
              Created {formatDistanceToNow(job.createdAt, { addSuffix: true })}
            </p>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm ${
            job.status === 'completed' ? 'bg-green-100 text-green-700' :
            job.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
            'bg-yellow-100 text-yellow-700'
          }`}>
            {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>{job.teamMembers} team members</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MessageSquare className="w-4 h-4" />
            <span>{job.messages} messages</span>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>{job.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2 transition-all duration-500"
                style={{ width: `${job.progress}%` }}
              />
            </div>
          </div>

          {job.outcomes && (
            <div className="text-sm text-gray-600">
              <strong className="font-medium">Outcomes:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                {job.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={() => navigate(`/chat/${job.id}`)}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}