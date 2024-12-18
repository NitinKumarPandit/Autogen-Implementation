import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { ChatHeader } from "../components/ChatHeader";
import { ChatContainer } from "../components/chat/ChatContainer";
import { CompanyProfile } from "../components/company/CompanyProfile";
import { useChat } from "../hooks/useChat";
import { theme } from "../../../shared/utils/theme";
import { v4 as uuidv4 } from "uuid";
import { User } from "../../../types";
import { ErrorBoundary } from "../components/ErrorBoundary";

const currentUser: User = {
  id: uuidv4(),
  name: "You",
  role: "User",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&q=80",
  isOnline: true,
  type: "Human",
  description: "Project Owner",
  jobFunction: "Sales",
  metrics: {
    projectsCompleted: 0,
    responseTime: "N/A",
    satisfactionRate: 0,
    lastActive: new Date(),
  },
  workSamples: [],
  lastActive: new Date(),
};

const strategyAgent: User = {
  id: uuidv4(),
  name: "Strategy Consultant",
  role: "Strategy Planning",
  avatar:
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop",
  isOnline: true,
  type: "Human",
  description: "Develops and optimizes go-to-market strategies",
  jobFunction: "Sales",
  metrics: {
    projectsCompleted: 156,
    responseTime: "< 30 mins",
    satisfactionRate: 99,
    lastActive: new Date(),
  },
  workSamples: [],
  lastActive: new Date(),
};

export default function ChatPage() {
  const location = useLocation();
  const userPrompt = location.state?.prompt || "";
  const [isChatExpanded, setIsChatExpanded] = React.useState(true);

  const { messages, isTyping, handleSendMessage, initializeChat, toolCalls } =
    useChat({
      currentUser,
      recipient: strategyAgent,
    });

  useEffect(() => {
    if (userPrompt) {
      initializeChat(userPrompt);
    }
  }, [userPrompt, initializeChat]);

  return (
    <ErrorBoundary>
      <div className="flex h-screen bg-white relative">
        <div
          className={`h-full flex flex-col border-r transition-all duration-300 relative ${
            isChatExpanded ? "w-[30%]" : "w-[60px]"
          }`}
          style={{ borderColor: theme.colors.border.light }}
        >
          <button
            onClick={() => setIsChatExpanded(!isChatExpanded)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-50 w-8 h-16 bg-white border rounded-r-xl shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            style={{ borderColor: theme.colors.border.light }}
          >
            {isChatExpanded ? (
              <ChevronLeft
                className="w-5 h-5"
                style={{ color: theme.colors.text.secondary }}
              />
            ) : (
              <ChevronRight
                className="w-5 h-5"
                style={{ color: theme.colors.text.secondary }}
              />
            )}
          </button>

          <div
            className={`h-full flex flex-col ${
              isChatExpanded ? "" : "overflow-hidden"
            }`}
          >
            {isChatExpanded ? (
              <>
                <ChatHeader
                  title={`Chat with ${strategyAgent.name}`}
                  subtitle="Strategy Planning Expert"
                  showBack
                />
                <ChatContainer
                  messages={messages}
                  isTyping={isTyping}
                  typingUser={strategyAgent}
                  onSendMessage={handleSendMessage}
                  toolCalls={toolCalls}
                />
              </>
            ) : (
              <div className="h-full flex flex-col items-center py-8">
                <MessageSquare
                  className="w-6 h-6 mb-4"
                  style={{ color: theme.colors.primary.main }}
                />
                <div
                  className="writing-mode-vertical text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Chat
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <CompanyProfile />
        </div>
      </div>
    </ErrorBoundary>
  );
}
