import { memo } from "react";
import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";
import type { ActionNodeData } from "../../types/workflow";
import {
  MessageSquare,
  Linkedin,
  Send,
  Database,
  Mail,
  Sparkles,
} from "lucide-react";

// Icon mapping for action types
const actionIcons = {
  "openai-summarize": Sparkles,
  "twitter-post": MessageSquare,
  "linkedin-post": Linkedin,
  "buffer-schedule": Send,
  "notion-save": Database,
  "email-send": Mail,
};

const ActionNode = ({ data, isConnectable }: NodeProps<ActionNodeData>) => {
  const Icon = actionIcons[data.actionType] || Sparkles;

  const handleStyle = {
    width: "12px",
    height: "12px",
    background: "#1d4ed8",
  };

  return (
    <div
      className="action-node"
      style={{
        minWidth: "180px",
        padding: "12px",
        borderRadius: "8px",
        background: "#dbeafe",
        border: "2px solid #1d4ed8",
      }}
    >
      {/* Input handle - actions can receive input */}
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        style={handleStyle}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <Icon size={16} color="#1d4ed8" />
        <strong style={{ fontSize: "14px", color: "#1e3a8a" }}>Action</strong>
      </div>

      <div style={{ fontSize: "13px", color: "#1e40af", marginBottom: "4px" }}>
        {data.label}
      </div>

      {data.description && (
        <div style={{ fontSize: "11px", color: "#64748b", marginTop: "4px" }}>
          {data.description}
        </div>
      )}

      {/* Output handle - actions can also pass data forward */}
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        style={handleStyle}
      />
    </div>
  );
};

export default memo(ActionNode);
