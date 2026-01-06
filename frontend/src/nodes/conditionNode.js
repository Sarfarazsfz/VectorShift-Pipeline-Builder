// conditionNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [expression, setExpression] = useState(data?.expression || 'score > 0.5');

  return (
    <BaseNode
      id={id}
      title="Condition"
      subtitle="Route based on a boolean expression"
      handles={[
        {
          id: `${id}-input`,
          type: 'target',
          position: Position.Left,
          style: { top: '50%' },
        },
        {
          id: `${id}-true`,
          type: 'source',
          position: Position.Right,
          style: { top: '35%' },
        },
        {
          id: `${id}-false`,
          type: 'source',
          position: Position.Right,
          style: { top: '65%' },
        },
      ]}
      minHeight={120}
    >
      <div className="node-card">
        <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span className="node-label">Condition</span>
          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="e.g. score > 0.5"
            className="node-field"
          />
        </label>
      </div>
    </BaseNode>
  );
};
