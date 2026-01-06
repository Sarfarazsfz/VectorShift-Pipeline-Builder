// textNode.js

import { useMemo, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

// Extract variables like {{ input }} from text
const extractVariables = (text) => {
  const regex = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text)) !== null) {
    vars.add(match[1]);
  }
  return Array.from(vars);
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const variables = useMemo(() => extractVariables(currText), [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Size node based on content
  const lines = currText.split('\n');
  const longestLine = lines.reduce(
    (max, line) => Math.max(max, line.length),
    0
  );
  const dynamicWidth = Math.min(420, 180 + longestLine * 6);
  const dynamicHeight = Math.min(260, 90 + lines.length * 18);

  const variableHandles = variables.map((v, index) => ({
    id: `${id}-var-${v}`,
    type: 'target',
    position: Position.Left,
    style: {
      top: `${((index + 1) * 100) / (variables.length + 1)}%`,
    },
  }));

  return (
    <BaseNode
      id={id}
      title="Text"
      subtitle="Compose templated text with variables"
      handles={[
        ...variableHandles,
        {
          id: `${id}-output`,
          type: 'source',
          position: Position.Right,
          style: { top: '50%' },
        },
      ]}
      minWidth={dynamicWidth}
      minHeight={dynamicHeight}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 11, color: '#9ca3af' }}>
          Text (use {'{{variable}}'} to add inputs)
        </span>
        <textarea
          value={currText}
          onChange={handleTextChange}
          rows={Math.min(8, Math.max(3, lines.length))}
          style={{
            resize: 'none',
            fontSize: 12,
            padding: '4px 6px',
            borderRadius: 6,
            border: '1px solid #374151',
            background: '#020617',
            color: '#e5e7eb',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />
      </label>
      {variables.length > 0 && (
        <div style={{ fontSize: 11, color: '#9ca3af' }}>
          Variables:{' '}
          <span style={{ color: '#e5e7eb' }}>
            {variables.map((v) => `{{${v}}}`).join(', ')}
          </span>
        </div>
      )}
    </BaseNode>
  );
};

