// loggerNode.js
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Logger"
      subtitle="Inspect values as they flow through"
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
      minHeight={110} // optional for uniform height
    >
      <div className="node-card">
        <p style={{ margin: 0, fontSize: 12, color: '#d1d5db' }}>
          Use this node to tap into the pipeline for debugging and analytics.
        </p>
      </div>
    </BaseNode>
  );
};
