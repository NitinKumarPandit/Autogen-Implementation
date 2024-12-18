import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppSelection } from './shared/components/AppSelection';
import { CustomerApp } from './apps/customer/CustomerApp';
import { BuilderApp } from './apps/builder/BuilderApp';
import { WorkerApp } from './apps/worker/WorkerApp';

function App() {
  return (
    <Routes>
      {/* Root shows app selection */}
      <Route path="/" element={<AppSelection />} />

      {/* Customer App Routes */}
      <Route path="/app/customer/*" element={<CustomerApp />} />

      {/* Builder App Routes */}
      <Route path="/app/builder/*" element={<BuilderApp />} />

      {/* Worker App Routes */}
      <Route path="/app/worker/*" element={<WorkerApp />} />
    </Routes>
  );
}

export default App;
