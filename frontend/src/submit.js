// submit.js

import { useCallback } from 'react';
import { shallow } from 'zustand/shallow';
import { useStore } from './store';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = useCallback(async () => {
    try {
      // Log the data being sent for debugging
      console.log('Submitting pipeline:', { nodes, edges });
      
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('Backend response:', data);

      const { num_nodes, num_edges, is_dag } = data;

      alert(
        `Pipeline summary:\n\n` +
          `• Number of nodes: ${num_nodes}\n` +
          `• Number of edges: ${num_edges}\n` +
          `• Is DAG: ${is_dag ? 'Yes' : 'No'}`
      );
    } catch (err) {
      console.error('Submit error:', err);
      alert(
        'Failed to analyze pipeline. Please make sure the backend is running on http://127.0.0.1:8000.'
      );
    }
  }, [nodes, edges]);

  return (
    <div className="vs-submit-container">
      <button type="button" className="vs-submit-button" onClick={handleSubmit}>
        Submit pipeline
      </button>
    </div>
  );
};

