// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      subtitle="Large language model call"
      handles={[
        {
          id: `${id}-system`,
          type: 'target',
          position: Position.Left,
          style: { top: '30%' },
        },
        {
          id: `${id}-prompt`,
          type: 'target',
          position: Position.Left,
          style: { top: '70%' },
        },
        {
          id: `${id}-response`,
          type: 'source',
          position: Position.Right,
          style: { top: '50%' },
        },
      ]}
      minHeight={110}
    >
      <div className="node-card">
        <p style={{ margin: 0, color: '#d1d5db' }}>
        Connect system and prompt text to produce a model response.
      </p>
      </div>
      
    </BaseNode>
  );
};

