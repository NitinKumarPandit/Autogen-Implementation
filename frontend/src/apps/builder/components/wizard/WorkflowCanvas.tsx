import React, { useState, useCallback, useRef } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  ReactFlowInstance,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Plus } from 'lucide-react';
import { CustomNode } from './CustomNode';
import { TriggerDrawer } from './TriggerDrawer';
import { theme } from '../../../../shared/utils/theme';

const nodeTypes = {
  customNode: CustomNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

export function WorkflowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onInit = useCallback((instance: ReactFlowInstance) => {
    setReactFlowInstance(instance);
  }, []);

  const handleAddTrigger = (triggerType: string) => {
    if (!reactFlowInstance) return;

    const position = reactFlowInstance.project({
      x: window.innerWidth / 2 - 100,
      y: window.innerHeight / 3,
    });

    const newNode: Node = {
      id: `node-${nodes.length + 1}`,
      type: 'customNode',
      position,
      data: { label: triggerType },
    };

    setNodes((nds) => [...nds, newNode]);
    setShowDrawer(false);
  };

  return (
    <div className="relative" ref={reactFlowWrapper}>
      <div
        className="h-[600px] bg-white rounded-lg border"
        style={{ borderColor: theme.colors.border.light }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={onInit}
          nodeTypes={nodeTypes}
          defaultViewport={defaultViewport}
          minZoom={0.5}
          maxZoom={2}
          fitView
        >
          <Controls />
          <Background gap={16} size={1} />

          {nodes.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setShowDrawer(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-dashed hover:bg-gray-50 transition-colors"
                style={{ borderColor: theme.colors.border.light }}
              >
                <Plus
                  className="w-5 h-5"
                  style={{ color: theme.colors.primary.main }}
                />
                <span style={{ color: theme.colors.text.primary }}>
                  Add your first step
                </span>
              </button>
            </div>
          )}
        </ReactFlow>
      </div>

      {showDrawer && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowDrawer(false)}
          />
          <div
            className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl overflow-auto"
            style={{ borderLeft: `1px solid ${theme.colors.border.light}` }}
          >
            <TriggerDrawer
              onSelect={handleAddTrigger}
              onClose={() => setShowDrawer(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
