// mergeNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Merge"
      subtitle="Combine multiple inputs into one payload"
      handles={[
        {
          id: `${id}-in-a`,
          type: 'target',
          position: Position.Left,
          style: { top: '30%' },
        },
        {
          id: `${id}-in-b`,
          type: 'target',
          position: Position.Left,
          style: { top: '70%' },
        },
        {
          id: `${id}-out`,
          type: 'source',
          position: Position.Right,
          style: { top: '50%' },
        },
      ]}
      minHeight={110}
    >
      <p style={{ margin: 0, fontSize: 12, color: '#d1d5db' }}>
        Use this node to merge branches back into a single flow.
      </p>
    </BaseNode>
  );
};

