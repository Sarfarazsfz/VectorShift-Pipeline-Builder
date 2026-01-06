import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="vs-app-root">
      <PipelineToolbar />
      <div className="vs-app-main">
        <div className="vs-app-canvas">
          <PipelineUI />
        </div>
      </div>
      <SubmitButton />
    </div>
  );
}

export default App;

