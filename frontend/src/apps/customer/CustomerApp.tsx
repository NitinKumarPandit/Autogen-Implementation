import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AgentSelectionPage from "./pages/AgentSelectionPage";
import ChatPage from "./pages/ChatPage";
import { CompanyProvider } from "./context/CompanyContext";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import CampaignLaunchPage from "./pages/CampaignLaunchPage";

export function CustomerApp() {
  return (
    <CompanyProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/select-agents" element={<AgentSelectionPage />} />
        <Route path="/chat/:jobId" element={<ChatPage />} />
        <Route path="/company-profile" element={<CompanyProfilePage />} />
        <Route path="/campaign/launch" element={<CampaignLaunchPage />} />
      </Routes>
    </CompanyProvider>
  );
}
