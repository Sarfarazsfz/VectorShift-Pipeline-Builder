// apiNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ApiNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');
  const [method, setMethod] = useState(data?.method || 'POST');

  return (
    <BaseNode
      id={id}
      title="API Call"
      subtitle="Call an external HTTP endpoint"
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
      minHeight={130}
    >
      <div className="node-card">
        <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span className="node-label">URL</span>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="node-field"
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span className="node-label">Method</span>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="node-field"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
