import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Users, ArrowRight } from 'lucide-react';
import { JobCategories } from '../components/JobCategories';
import { AgentImages } from '../components/AgentImages';
import { CategoryStats } from '../components/CategoryStats';
import { TrustedBy } from '../components/TrustedBy';
import JobCard from '../components/JobCard';
import { mockJobs } from '../utils/mockData';
import { theme } from '../../../shared/utils/theme';
import { v4 as uuidv4 } from 'uuid';

export default function HomePage() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');

  const handleStartChat = (userPrompt: string) => {
    if (!userPrompt.trim()) return;
    const jobId = 'new-' + uuidv4();
    navigate(`/app/customer/chat/${jobId}`, { 
      state: { 
        prompt: userPrompt,
        directChat: true
      } 
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleStartChat(prompt);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-16 relative overflow-hidden">
        <AgentImages side="left" />
        <AgentImages side="right" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div
              className="inline-block mb-4 px-4 py-1.5 rounded-full"
              style={{ backgroundColor: theme.colors.primary.light }}
            >
              <div
                className="flex items-center gap-2"
                style={{ color: theme.colors.primary.main }}
              >
                <Brain className="w-4 h-4" />
                <span className="text-sm">AI + Human Collaboration</span>
                <Users className="w-4 h-4" />
              </div>
            </div>
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: theme.colors.text.primary }}
            >
              We bring AI Agents and Human Agents
              <br />
              to bring projects to life
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: theme.colors.text.secondary }}
            >
              Find AI autonomous agents and highly skilled human talent for your
              project
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <JobCategories />
          </div>

          <div className="max-w-3xl mx-auto relative z-20">
            <div
              className="bg-white shadow-xl rounded-xl p-6 border"
              style={{ borderColor: theme.colors.border.light }}
            >
              <div className="relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask AI anything..."
                  className="w-full px-4 py-3 text-base rounded-lg border-2 bg-white outline-none transition-all"
                  style={{
                    borderColor: theme.colors.border.light,
                    color: theme.colors.text.primary,
                  }}
                />
                <button
                  onClick={() => handleStartChat(prompt)}
                  disabled={!prompt.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white px-4 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: theme.colors.primary.main,
                    ':hover': { backgroundColor: theme.colors.primary.hover },
                  }}
                >
                  Start Project <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <TrustedBy />
          <CategoryStats />
        </div>
      </div>

      {/* Recent Projects Section */}
      <div
        className="max-w-6xl mx-auto px-4 py-16"
        style={{ backgroundColor: theme.colors.background.secondary }}
      >
        <div className="mb-8">
          <h2
            className="text-2xl font-bold mb-2"
            style={{ color: theme.colors.text.primary }}
          >
            Recent Success Stories
          </h2>
          <p style={{ color: theme.colors.text.secondary }}>
            See how AI and human experts collaborate to deliver amazing results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}