// delayNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DelayNode = ({ id, data }) => {
  const [ms, setMs] = useState(data?.delayMs || 1000);

  return (
    <BaseNode
      id={id}
      title="Delay"
      subtitle="Pause the pipeline for a duration"
      handles={[
        {
          id: `${id}-input`,
          type: 'target',
          position: Position.Left,
          style: { top: '50%' },
        },
        {
          id: `${id}-output`,
          type: 'source',
          position: Position.Right,
          style: { top: '50%' },
        },
      ]}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 11, color: '#9ca3af' }}>Delay (ms)</span>
        <input
          type="number"
          min={0}
          value={ms}
          onChange={(e) => setMs(e.target.value)}
          style={{
            fontSize: 12,
            padding: '4px 6px',
            borderRadius: 6,
            border: '1px solid #374151',
            background: '#020617',
            color: '#e5e7eb',
          }}
        />
      </label>
    </BaseNode>
  );
};

