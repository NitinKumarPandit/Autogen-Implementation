import React from 'react';
import { Mail, Webhook, Database, MessageSquare, Cog } from 'lucide-react';
import { theme } from '../../../../utils/theme';

const nodeTypes = [
  {
    category: 'Triggers',
    items: [
      { name: 'Email Received', icon: Mail },
      { name: 'Webhook', icon: Webhook },
      { name: 'Database Change', icon: Database },
    ],
  },
  {
    category: 'Actions',
    items: [
      { name: 'Send Message', icon: MessageSquare },
      { name: 'Process Data', icon: Cog },
    ],
  },
];

export function NodePalette() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div 
      className="w-64 border-r overflow-y-auto p-4"
      style={{ borderColor: theme.colors.border.light }}
    >
      <h3 className="font-medium mb-4" style={{ color: theme.colors.text.primary }}>
        Node Palette
      </h3>
      
      <div className="space-y-6">
        {nodeTypes.map((category) => (
          <div key={category.category}>
            <h4 
              className="text-sm font-medium mb-2"
              style={{ color: theme.colors.text.secondary }}
            >
              {category.category}
            </h4>
            <div className="space-y-2">
              {category.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 p-2 rounded-lg border cursor-move hover:bg-gray-50 transition-colors"
                    draggable
                    onDragStart={(e) => onDragStart(e, item.name)}
                    style={{ borderColor: theme.colors.border.light }}
                  >
                    <Icon className="w-4 h-4" style={{ color: theme.colors.primary.main }} />
                    <span className="text-sm" style={{ color: theme.colors.text.primary }}>
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}