// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

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
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 11, color: '#9ca3af' }}>Name</span>
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
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
      <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 11, color: '#9ca3af' }}>Type</span>
        <select
          value={outputType}
          onChange={handleTypeChange}
          style={{
            fontSize: 12,
            padding: '4px 6px',
            borderRadius: 6,
            border: '1px solid #374151',
            background: '#020617',
            color: '#e5e7eb',
          }}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};

