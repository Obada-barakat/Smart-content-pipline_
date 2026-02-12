import { create } from "zustand";
import { addEdge, applyNodeChanges, applyEdgeChanges } from "reactflow";
import type { Node, Edge, Connection, NodeChange, EdgeChange } from "reactflow";
import type {
  Workflow,
  WorkflowExecution,
  NodeType,
  WorkflowNodeData,
} from "../types/workflow";

// This is our global state for the workflow builder
interface WorkflowStore {
  // Current workflow being edited
  nodes: Node[];
  edges: Edge[];

  // Workflow metadata
  workflowName: string;
  workflowDescription: string;

  // Saved workflows
  workflows: Workflow[];

  // Execution history
  executions: WorkflowExecution[];
  currentExecution: WorkflowExecution | null;

  // Actions to modify state
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;

  addNode: (node: Node) => void;
  deleteNode: (nodeId: string) => void;
  updateNodeData: (nodeId: string, data: Partial<WorkflowNodeData>) => void;

  setWorkflowName: (name: string) => void;
  setWorkflowDescription: (description: string) => void;

  saveWorkflow: () => Promise<void>;
  loadWorkflow: (workflowId: string) => Promise<void>;
  clearWorkflow: () => void;

  setCurrentExecution: (execution: WorkflowExecution | null) => void;
}

export const useWorkflowStore = create<WorkflowStore>((set, get) => ({
  // Initial state
  nodes: [],
  edges: [],
  workflowName: "Untitled Workflow",
  workflowDescription: "",
  workflows: [],
  executions: [],
  currentExecution: null,

  // Node and edge setters
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),

  // React Flow's built-in change handlers
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },

  // Add a new node
  addNode: (node) => {
    set({
      nodes: [...get().nodes, node],
    });
  },

  // Delete a node
  deleteNode: (nodeId) => {
    set({
      nodes: get().nodes.filter((n) => n.id !== nodeId),
      edges: get().edges.filter(
        (e) => e.source !== nodeId && e.target !== nodeId,
      ),
    });
  },

  // Update node data
  updateNodeData: (nodeId, data) => {
    set({
      nodes: get().nodes.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, ...data } }
          : node,
      ),
    });
  },

  // Set workflow metadata
  setWorkflowName: (name) => set({ workflowName: name }),
  setWorkflowDescription: (description) =>
    set({ workflowDescription: description }),

  // Save workflow (we'll implement API call later)
  saveWorkflow: async () => {
    const { nodes, edges, workflowName, workflowDescription } = get();

    const workflow: Workflow = {
      id: Date.now().toString(), // Temporary ID, will come from backend
      name: workflowName,
      description: workflowDescription,
      nodes: nodes.map((n) => ({
        id: n.id,
        type: n.type as NodeType,
        position: n.position,
        data: n.data,
      })),
      edges: edges.map((e) => ({
        id: e.id,
        source: e.source,
        target: e.target,
        sourceHandle: e.sourceHandle ?? undefined,
        targetHandle: e.targetHandle ?? undefined,
      })),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // For now, just save to local state
    // Later we'll call: await axios.post('/api/workflows', workflow)
    set({
      workflows: [...get().workflows, workflow],
    });

    console.log("Workflow saved:", workflow);
  },

  // Load a workflow
  loadWorkflow: async (workflowId) => {
    // Later we'll call: const { data } = await axios.get(`/api/workflows/${workflowId}`)
    const workflow = get().workflows.find((w) => w.id === workflowId);

    if (workflow) {
      set({
        nodes: workflow.nodes.map((n) => ({
          id: n.id,
          type: n.type,
          position: n.position,
          data: n.data,
        })),
        edges: workflow.edges,
        workflowName: workflow.name,
        workflowDescription: workflow.description || "",
      });
    }
  },

  // Clear the current workflow
  clearWorkflow: () => {
    set({
      nodes: [],
      edges: [],
      workflowName: "Untitled Workflow",
      workflowDescription: "",
    });
  },

  // Set current execution
  setCurrentExecution: (execution) => set({ currentExecution: execution }),
}));
