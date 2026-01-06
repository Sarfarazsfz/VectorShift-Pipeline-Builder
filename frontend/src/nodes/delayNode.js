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
      minHeight={100} // optional for uniformity
    >
      <div className="node-card">
        <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span className="node-label">Delay (ms)</span>
          <input
            type="number"
            min={0}
            value={ms}
            onChange={(e) => setMs(e.target.value)}
            className="node-field"
          />
        </label>
      </div>
    </BaseNode>
  );
};
