import React from "react";
import { ReactFlowProvider } from "reactflow";
import { WorkflowCanvas } from "./WorkflowCanvas";

export function WorkflowStep() {
  return (
    <ReactFlowProvider>
      <WorkflowCanvas />
    </ReactFlowProvider>
  );
}
