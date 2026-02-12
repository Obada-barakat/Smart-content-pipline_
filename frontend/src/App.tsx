import { ReactFlowProvider } from "reactflow";
import WorkflowBuilder from "./components/WorkflowBuilder";

function App() {
  return (
    <ReactFlowProvider>
      <div style={{ width: "100vw", height: "100vh" }}>
        <WorkflowBuilder />
      </div>
    </ReactFlowProvider>
  );
}

export default App;
