{
  /* Copy the entire content of src/pages/AgentSelectionPage.tsx here */
}
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Header } from '../components/Header';
import { LoadingScreen } from '../components/LoadingScreen';
import { ProjectObjective } from '../components/ProjectObjective';
import { AgentSection } from '../components/AgentSection';
import { findMatchingAgents } from '../utils/agentMatchingUtils';
import { theme } from '../../../shared/utils/theme';
import type { User } from '../../../types';

const LOADING_DURATION = 3500; // 3.5 seconds loading time

export default function AgentSelectionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const userPrompt = location.state?.prompt || '';
  const [loading, setLoading] = useState(true);
  const [agents, setAgents] = useState<User[]>([]);
  const [showAgents, setShowAgents] = useState(false);
  const [noAgentsMessage, setNoAgentsMessage] = useState<string>();

  useEffect(() => {
    const loadAgents = async () => {
      // Find matching agents immediately
      const { agents, message } = findMatchingAgents(userPrompt);
      setAgents(agents);
      setNoAgentsMessage(message);

      // Show loading state for fixed duration
      await new Promise((resolve) => setTimeout(resolve, LOADING_DURATION));
      setLoading(false);

      // Animate in agents after loading
      setTimeout(() => setShowAgents(true), 500);
    };

    loadAgents();
  }, [userPrompt]);

  const handleStartGroupChat = () => {
    const jobId = 'new-' + Date.now();
    navigate(`/app/customer/chat/${jobId}`, { state: { prompt: userPrompt } });
  };

  const handleStartIndividualChat = (agent: User) => {
    const jobId = 'new-' + Date.now();
    navigate(`/app/customer/chat/${jobId}`, {
      state: {
        prompt: userPrompt,
        selectedAgent: agent,
      },
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header
          showBack
          title="Building Your Dream Team"
          subtitle="Finding the perfect combination of AI and human experts"
        />
        <LoadingScreen
          title="Analyzing Your Requirements"
          subtitle="We're assembling the perfect team by matching your needs with our top AI agents and human experts"
        />
      </div>
    );
  }

  if (noAgentsMessage) {
    return (
      <div className="min-h-screen bg-white">
        <Header
          showBack
          title="No Matching Agents"
          subtitle="We're expanding our team"
        />
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            We're Growing Our Team
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: theme.colors.text.secondary }}
          >
            {noAgentsMessage}
          </p>
          <button
            onClick={() => navigate('/app/customer')}
            className="px-6 py-3 rounded-lg transition-colors"
            style={{
              backgroundColor: theme.colors.primary.main,
              color: '#FFFFFF',
            }}
          >
            Explore Other Services
          </button>
        </div>
      </div>
    );
  }

  const aiAgents = agents.filter((agent) => agent.type === 'AI');
  const humanAgents = agents.filter((agent) => agent.type === 'Human');

  return (
    <div className="min-h-screen bg-white">
      <Header
        showBack
        title="Your Specialized Team"
        subtitle="We've assembled the perfect combination of AI and human experts for your project"
      />

      <div className="max-w-6xl mx-auto p-8">
        <ProjectObjective prompt={userPrompt} showAnimation={showAgents} />

        <AgentSection
          type="AI"
          agents={aiAgents}
          showAgents={showAgents}
          onStartChat={handleStartIndividualChat}
        />
        <AgentSection
          type="Human"
          agents={humanAgents}
          showAgents={showAgents}
          onStartChat={handleStartIndividualChat}
        />

        {agents.length > 0 && (
          <div className="mt-12 text-center">
            <button
              onClick={handleStartGroupChat}
              className="bg-white hover:bg-gray-50 px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 mx-auto border"
              style={{
                backgroundColor: theme.colors.primary.main,
                color: '#FFFFFF',
                borderColor: theme.colors.primary.main,
              }}
            >
              <Users className="w-5 h-5" />
              Start Group Collaboration
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
