//Node types in out workflow
export type NodeType = "trigger" | "action" | "condition";

// Trigger node types
export type TriggerType = "rss" | "webhook" | "schedule" | "manual";

//action node types
export type ActionType =
  | "openai-summarize"
  | "twitter-post"
  | "linkedin-post"
  | "buffer-schedule"
  | "notion-save"
  | "email-send";

//condition node types
export type ConditionType = "if-contains" | "if-greater" | "if-equals";

//Base node data structure
export interface BaseNodeData {
  label: string;
  description?: string;
  config: Record<string, unknown>; //generic config object, specific shape depends on node type
}

//Trigger node data
export interface TriggerNodeData extends BaseNodeData {
  triggerType: TriggerType;
  config: {
    url?: string; //for RSS
    schedule?: string; //for scheduled triggers
    webhookUrl?: string; //for webhook triggers
  };
}

//Action node data
export interface ActionNodeData extends BaseNodeData {
  actionType: ActionType;
  config: Record<string, unknown>; //Each action has its own config shape
  description?: string;
}

//condition node data
export interface ConditionNodeData extends BaseNodeData {
  conditionType: ConditionType;
  config: {
    field: string;
    operator: string;
    value: string;
  };
}

//Union type for all node data
export type WorkflowNodeData =
  | TriggerNodeData
  | ActionNodeData
  | ConditionNodeData;

//workflow definition (what we save to the database)
export interface Workflow {
  id: string;
  name: string;
  description?: string;
  nodes: Array<{
    id: string;
    type: NodeType;
    position: { x: number; y: number };
    data: WorkflowNodeData;
  }>;
  edges: Array<{
    id: string;
    source: string;
    target: string;
    sourceHandle?: string;
    targetHandle?: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

//workflow execution status
export type ExecutionStatus = "pending" | "running" | "success" | "failed";

//workflow execution record
export interface WorkflowExecution {
  id: string;
  workflowId: string;
  status: ExecutionStatus;
  startedAt: string;
  completedAt?: string;
  error?: string;
  logs: Array<{
    nodeId: string;
    timestamp: string;
    message: string;
    status: "success" | "error" | "info";
  }>;
}
