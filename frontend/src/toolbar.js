// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="vs-toolbar">
      <div className="vs-toolbar-inner">
        <div className="vs-toolbar-title">VectorShift Pipeline Builder</div>
        <div className="vs-toolbar-subtitle">
          Drag nodes into the canvas and connect them to define your flow.
        </div>
        <div className="vs-toolbar-nodes">
          <DraggableNode type="customInput" label="Input" />
          <DraggableNode type="text" label="Text" />
          <DraggableNode type="llm" label="LLM" />
          <DraggableNode type="customOutput" label="Output" />
          <DraggableNode type="condition" label="Condition" />
          <DraggableNode type="delay" label="Delay" />
          <DraggableNode type="merge" label="Merge" />
          <DraggableNode type="api" label="API Call" />
          <DraggableNode type="logger" label="Logger" />
        </div>
      </div>
    </div>
  );
};

