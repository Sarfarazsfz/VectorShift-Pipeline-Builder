// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
  id={id}
  title="Input"
  subtitle="Define a pipeline input"
  handles={[
    {
      id: `${id}-value`,
      type: 'source',
      position: Position.Right,
      style: { top: '50%' },
    },
  ]}
>
  <div
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
    className="input-node-card"
  >
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span
        style={{
          fontSize: 10,
          color: '#94a3b8',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        Name
      </span>
      <input
        type="text"
        value={currName}
        onChange={handleNameChange}
        style={{
          fontSize: 13,
          padding: '8px 10px',
          borderRadius: 8,
          border: '1px solid #334155',
          background: '#020617',
          color: '#e5e7eb',
          outline: 'none',
          transition: 'border 0.2s, box-shadow 0.2s',
        }}
      />
    </label>

    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span
        style={{
          fontSize: 10,
          color: '#94a3b8',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        Type
      </span>
      <select
        value={inputType}
        onChange={handleTypeChange}
        style={{
          fontSize: 13,
          padding: '8px 10px',
          borderRadius: 8,
          border: '1px solid #334155',
          background: '#020617',
          color: '#e5e7eb',
          cursor: 'pointer',
          outline: 'none',
          transition: 'border 0.2s, box-shadow 0.2s',
        }}
      >
        <option value="Text">Text</option>
        <option value="File">File</option>
      </select>
    </label>
  </div>

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

    .input-node-card input:focus-visible,
    .input-node-card select:focus-visible {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59,130,246,0.4);
    }
  `}
  </style>
</BaseNode>


  );
};

