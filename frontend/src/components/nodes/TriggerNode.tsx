import { memo } from "react";
import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";
import type { TriggerNodeData } from "../../types/workflow";
import { Rss, Webhook, Clock, Play } from "lucide-react";

//Icon mapping for trigger types
const triggerIcons = {
  rss: Rss,
  webhook: Webhook,
  schedule: Clock,
  manual: Play,
};

const TriggerNode = ({ data, isConnectable }: NodeProps<TriggerNodeData>) => {
  const Icon = triggerIcons[data.triggerType];

  return (
    <div
      className="trigger-node"
      style={{
        minWidth: "180px",
        padding: "12px",
        borderRadius: "8px",
        background: "#e0f2fe",
        border: "2px solid #0369a1",
      }}
    >
      {/*Output handle - triggers can only output*/}
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        style={{
          background: "#0369a1",
          width: "12px",
          height: "12px",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <Icon size={16} color="#0369a1" />
        <strong style={{ fontSize: "14px", color: "#0c4a6e" }}>Trigger</strong>
      </div>

      <div style={{ fontSize: "13px", color: "#075985", marginBottom: "4px" }}>
        {data.label}
      </div>

      {data.description && (
        <div style={{ fontSize: "11px", color: "#64748b", marginTop: "4px" }}>
          {data.description}
        </div>
      )}

      {/*show some config details*/}
      {data.config.url && (
        <div
          style={{
            fontSize: "10px",
            color: "#94a3b8",
            marginTop: "6px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {data.config.url}
        </div>
      )}
    </div>
  );
};

export default memo(TriggerNode);
