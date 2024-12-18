import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { theme } from '../../../../shared/utils/theme';

export const CustomNode = memo(({ data }: NodeProps) => {
  return (
    <div
      className="px-4 py-2 shadow-md rounded-md bg-white border min-w-[150px]"
      style={{ borderColor: theme.colors.border.light }}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 border-2 !bg-white"
        style={{ borderColor: theme.colors.primary.main }}
      />
      <div
        className="text-sm font-medium text-center"
        style={{ color: theme.colors.text.primary }}
      >
        {data.label}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 border-2 !bg-white"
        style={{ borderColor: theme.colors.primary.main }}
      />
    </div>
  );
});

CustomNode.displayName = 'CustomNode';
