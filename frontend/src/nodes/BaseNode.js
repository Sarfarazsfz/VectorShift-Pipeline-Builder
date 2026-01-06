// BaseNode.js
import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  subtitle,
  children,
  handles = [],
  minWidth = 220,
  minHeight = 100,
}) => {
  return (
    <div
      className="vs-node-card animated-background" // <- add the class here
      style={{
        minWidth,
        minHeight,
        borderRadius: 10,
        border: '1px solid #1f2937',
        color: '#e5e7eb',
        boxShadow: '0 10px 25px rgba(0,0,0,0.35)',
        padding: '10px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        // Remove the static background from here
        // background: '#020617',
      }}
    >
      {handles.map((h) => (
        <Handle
          key={h.id}
          id={h.id}
          type={h.type || 'target'}
          position={h.position || Position.Left}
          style={h.style}
        />
      ))}

      <div
        className="vs-node-header"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          marginBottom: 4,
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 0.4,
            textTransform: 'uppercase',
            color: '#7dd3fc',
          }}
        >
          {title}
        </span>
        {subtitle && (
          <span
            style={{
              fontSize: 11,
              color: '#9ca3af',
            }}
          >
            {subtitle}
          </span>
        )}
      </div>

      <div
        className="vs-node-body"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          fontSize: 12,
        }}
      >
        {children}
      </div>
    </div>
  );
};
