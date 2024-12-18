import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BuilderHome from './pages/BuilderHome';
import CreateAgentPage from './pages/CreateAgentPage';

export function BuilderApp() {
  return (
    <Routes>
      <Route path="/" element={<BuilderHome />} />
      <Route path="/create" element={<CreateAgentPage />} />
    </Routes>
  );
}