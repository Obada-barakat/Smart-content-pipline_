import { memo } from "react";
import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";
import type { ConditionNodeData } from "../../types/workflow";
import { GitBranch } from "lucide-react";

const handleStyle = {
  width: "12px",
  height: "12px",
};

const ConditionNode = ({
  data,
  isConnectable,
}: NodeProps<ConditionNodeData>) => {
  return (
    <div
      className="condition-node"
      style={{
        minWidth: "180px",
        padding: "12px",
        borderRadius: "8px",
        background: "#fef3c7",
        border: "2px solid #d97706",
      }}
    >
      {/* Input handle */}
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        style={{ ...handleStyle, background: "#d97706" }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <GitBranch size={16} color="#d97706" />
        <strong style={{ fontSize: "14px", color: "#92400e" }}>
          Condition
        </strong>
      </div>

      <div style={{ fontSize: "13px", color: "#b45309", marginBottom: "4px" }}>
        {data.label}
      </div>

      {data.description && (
        <div style={{ fontSize: "11px", color: "#64748b", marginTop: "4px" }}>
          {data.description}
        </div>
      )}

      {/* Condition details */}
      {data.config && (
        <div style={{ fontSize: "10px", color: "#78716c", marginTop: "6px" }}>
          {data.config.field} {data.config.operator} {data.config.value}
        </div>
      )}

      {/* Two output handles - true and false branches */}
      <Handle
        type="source"
        position={Position.Right}
        id="true"
        isConnectable={isConnectable}
        style={{ ...handleStyle, background: "#22c55e", top: "30%" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="false"
        isConnectable={isConnectable}
        style={{ ...handleStyle, background: "#ef4444", top: "70%" }}
      />
    </div>
  );
};

export default memo(ConditionNode);
