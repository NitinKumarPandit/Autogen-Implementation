import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WorkerHome from './pages/WorkerHome';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

export function WorkerApp() {
  return (
    <Routes>
      <Route path="/" element={<WorkerHome />} />
      <Route path="/project/:projectId" element={<ProjectDetailsPage />} />
    </Routes>
  );
}