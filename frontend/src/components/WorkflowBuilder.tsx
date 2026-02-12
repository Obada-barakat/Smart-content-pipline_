// import {  useCallback } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import type { NodeTypes } from "reactflow";
import "reactflow/dist/style.css";

import ConditionNode from "./nodes/ConditionNode";
import TriggerNode from "./nodes/TriggerNode";
import ActionNode from "./nodes/ActionNode";
import { useWorkflowStore } from "../store/Workflowstore";

import Sidebar from "./Sidebar";

const nodeTypes: NodeTypes = {
  trigger: TriggerNode,
  action: ActionNode,
  condition: ConditionNode,
};

const WorkflowBuilder = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } =
    useWorkflowStore();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Sidebar for adding nodes */}
      <Sidebar />

      {/* React Flow canvas */}
      <div style={{ flex: 1, position: "relative" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          snapToGrid
          snapGrid={[15, 15]}
        >
          <Background color="#aaa" gap={16} />
          <Controls
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              border: "none",
              background: "none",
            }}
          />
          <MiniMap
            nodeColor={(node) => {
              switch (node.type) {
                case "trigger":
                  return "#0369a1";
                case "action":
                  return "#1d4ed8";
                case "condition":
                  return "#d97706";
                default:
                  return "#6b7280";
              }
            }}
            maskColor="rgba(0, 0, 0, 0.1)"
          />
        </ReactFlow>
      </div>
    </div>
  );
};

export default WorkflowBuilder;
