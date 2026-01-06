// outputNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Output"
      subtitle="Expose a pipeline output"
      handles={[
        {
          id: `${id}-value`,
          type: 'target',
          position: Position.Left,
          style: { top: '50%' },
        },
      ]}
      minHeight={110}
    >
      <div className="node-card">
        <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span className="node-label">Name</span>
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            className="node-field"
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span className="node-label">Type</span>
          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            className="node-field"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
