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
  <div
    className="input-node-card"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: 12,
      background: '#020617',
      borderRadius: 12,
      border: '1px solid #1e293b',
      transition: 'all 0.25s ease',
    }}
  >
    {/* Textarea */}
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span
        style={{
          fontSize: 10,
          color: '#94a3b8',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        Text (use {'{{variable}}'} to add inputs)
      </span>
      <textarea
        value={currText}
        onChange={handleTextChange}
        rows={Math.min(8, Math.max(3, lines.length))}
        style={{
          resize: 'none',
          fontSize: 13,
          padding: '8px 10px',
          borderRadius: 8,
          border: '1px solid #334155',
          background: '#020617',
          color: '#e5e7eb',
          width: '100%',
          boxSizing: 'border-box',
          outline: 'none',
          transition: 'border 0.2s, box-shadow 0.2s',
        }}
      />
    </label>

    {/* Variables display */}
    {variables.length > 0 && (
      <div
        style={{
          fontSize: 11,
          color: '#94a3b8',
          padding: '6px 8px',
          borderRadius: 8,
          background: '#020617',
          border: '1px dashed #334155',
        }}
      >
        Variables:{' '}
        <span style={{ color: '#e5e7eb' }}>
          {variables.map((v) => `{{${v}}}`).join(', ')}
        </span>
      </div>
    )}
  </div>

  {/* SAME CSS as InputNode */}
  <style>
    {`
    .input-node-card:hover {
      box-shadow: 0 0 0 1px rgba(59,130,246,0.5),
                  0 12px 30px rgba(0,0,0,0.6);
    }

    .input-node-card:focus-within {
      border-color: #3b82f6;
      animation: pulseBorder 1.4s ease-out;
    }

    .input-node-card textarea:focus-visible {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59,130,246,0.4);
    }
  `}
  </style>
</BaseNode>
  );
};

