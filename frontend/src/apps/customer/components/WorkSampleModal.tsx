import React from 'react';
import { X, ExternalLink, Calendar, Trophy } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import type { WorkSample } from '../types';

interface WorkSampleModalProps {
  samples: WorkSample[];
  onClose: () => void;
  agentName: string;
}

export function WorkSampleModal({ samples, onClose, agentName }: WorkSampleModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">
              {agentName}'s Work Portfolio
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
          <div className="grid gap-4">
            {samples.map((sample, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      {sample.title}
                    </h4>
                    <p className="text-purple-200 mb-3">{sample.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-purple-300">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDistanceToNow(sample.date, { addSuffix: true })}</span>
                      </div>
                      {sample.metrics && (
                        <div className="flex items-center gap-1 text-green-300">
                          <Trophy className="w-4 h-4" />
                          <span>{sample.metrics}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <a
                    href={sample.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-200 text-sm transition-colors"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}