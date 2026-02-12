import { useState } from "react";
import { useWorkflowStore } from "../store/Workflowstore";
import {
  Rss,
  Webhook,
  Clock,
  Play,
  MessageSquare,
  Linkedin,
  Send,
  Database,
  Mail,
  Sparkles,
  GitBranch,
  Save,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const {
    addNode,
    clearWorkflow,
    saveWorkflow,
    workflowName,
    setWorkflowName,
  } = useWorkflowStore();
  const [isEditingName, setIsEditingName] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  //Helper function to create a new node with default data
  //eslint-disable-next-line react-hooks/exhaustive-deps
  const createNode = (
    type: "trigger" | "action" | "condition",
    nodeData: unknown,
  ) => {
    //These impure functions are intentionally called here
    // (only on user click, not during render)
    //  to generate unique IDs and default positions for new nodes

    const id = `${type}-${Date.now()}`;
    const newNode = {
      id,
      type,
      position: { x: 250, y: 100 + Math.random() * 200 },
      data: nodeData,
    };
    addNode(newNode);
  };

  //Trigger options
  const triggers = [
    {
      icon: Rss,
      label: "RSS Feed",
      triggerType: "rss",
      description: "Trigger on new RSS items",
    },
    {
      icon: Webhook,
      label: "Webhook",
      triggerType: "webhook",
      description: "Trigger on incoming webhooks",
    },
    {
      icon: Clock,
      label: "Schedule",
      triggerType: "schedule",
      description: "Trigger on a schedule",
    },
    {
      icon: Play,
      label: "Manual",
      triggerType: "manual",
      description: "Trigger manually",
    },
  ];

  //Action options
  const actions = [
    {
      icon: Sparkles,
      label: "AI Summarize",
      actionType: "openai-summarize",
      description: "Summarize text using OpenAI",
    },
    {
      icon: MessageSquare,
      label: "Post to Twitter",
      actionType: "twitter-post",
      description: "Create a new tweet",
    },
    {
      icon: Linkedin,
      label: "Post to LinkedIn",
      actionType: "linkedin-post",
      description: "Create a new LinkedIn post",
    },
    {
      icon: Send,
      label: "Schedule with Buffer",
      actionType: "buffer-schedule",
      description: "Schedule a post with Buffer",
    },
    {
      icon: Database,
      label: "Save to Notion",
      actionType: "notion-save",
      description: "Save data to Notion",
    },
    {
      icon: Mail,
      label: "Send Email",
      actionType: "email-send",
      description: "Send an email",
    },
  ];

  return (
    <aside
      style={{
        position: "relative",
        width: "280px",
        left: isOpen ? "0" : "-280px",
        transition: "all 0.3s ease-in-out",
        direction: "rtl",
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "absolute",
          right: "-32px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "32px",
          height: "62px",
          borderTopRightRadius: "22px",
          borderBottomRightRadius: "22px",
          background: "#3b82f6",
          color: "white",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease-in-out",
          zIndex: 1000,
        }}
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>
      <main
        style={{
          width: "100%",
          height: "100%",
          background: "white",
          borderRight: "1px solid #e5e7eb",
          padding: isOpen ? "20px" : "0",
          transition: "all 0.3s ease-in-out",
          overflowY: "scroll",
          position: "relative",
          direction: "ltr",
        }}
      >
        {/*Only show conent when open*/}

        {isOpen && (
          <>
            {/*Workflow Name*/}
            <div style={{ marginBottom: "20px" }}>
              {isEditingName ? (
                <input
                  type="text"
                  value={workflowName}
                  onChange={(e) => setWorkflowName(e.target.value)}
                  onBlur={() => setIsEditingName(false)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && setIsEditingName(false)
                  }
                  autoFocus
                  style={{
                    width: "100%",
                    padding: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "2px solid #3b82f6",
                    borderRadius: "4px",
                  }}
                />
              ) : (
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: "#1f2937",
                  }}
                  onClick={() => setIsEditingName(true)}
                >
                  {workflowName}
                </h2>
              )}
            </div>

            {/*Actions*/}
            <div style={{ marginBottom: "20px", display: "flex", gap: "8px" }}>
              <button
                onClick={saveWorkflow}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "all 0.1s linear",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#2563eb";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#3b82f6";
                }}
              >
                <Save size={16} />
                Save
              </button>
              <button
                onClick={clearWorkflow}
                style={{
                  padding: "10px",
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "all 0.2s linear",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e81717";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ef4444";
                }}
              >
                <Trash2 size={16} />
              </button>
            </div>

            {/*Triggers Section*/}
            <div style={{ marginBottom: "24px" }}>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#6b7280",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                Triggers
              </h3>
              {triggers.map((trigger) => (
                <div
                  key={trigger.triggerType}
                  onClick={() =>
                    createNode("trigger", {
                      label: trigger.label,
                      description: trigger.description,
                      triggerType: trigger.triggerType,
                      config: {},
                    })
                  }
                  style={{
                    padding: "12px",
                    marginBottom: "8px",
                    background: "#f9fafb",
                    border: "1px solid #e5e7eb",
                    borderRadius: "6px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#e0f2fe";
                    e.currentTarget.style.borderColor = "#0369a1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f9fafb";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  <trigger.icon size={18} color="#0369a1" />
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#1f2937",
                      }}
                    >
                      {trigger.label}
                    </div>
                    <div style={{ fontSize: "11px", color: "#6b7280" }}>
                      {trigger.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions section */}
            <div style={{ marginBottom: "24px" }}>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#6b7280",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                Actions
              </h3>
              {actions.map((action) => (
                <div
                  key={action.actionType}
                  onClick={() =>
                    createNode("action", {
                      label: action.label,
                      description: action.description,
                      actionType: action.actionType,
                      config: {},
                    })
                  }
                  style={{
                    padding: "12px",
                    marginBottom: "8px",
                    background: "#f9fafb",
                    border: "1px solid #e5e7eb",
                    borderRadius: "6px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#dbeafe";
                    e.currentTarget.style.borderColor = "#1d4ed8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f9fafb";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  <action.icon size={18} color="#1d4ed8" />
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#1f2937",
                      }}
                    >
                      {action.label}
                    </div>
                    <div style={{ fontSize: "11px", color: "#6b7280" }}>
                      {action.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Conditions Section */}
            <div>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#6b7280",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                Conditions
              </h3>
              <div
                onClick={() =>
                  createNode("condition", {
                    label: "If Condition",
                    description: "Branch based on condition",
                    conditionType: "if-contains",
                    config: {
                      field: "content",
                      operator: "contains",
                      value: "",
                    },
                  })
                }
                style={{
                  padding: "12px",
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fef3c7";
                  e.currentTarget.style.borderColor = "#d97706";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f9fafb";
                  e.currentTarget.style.borderColor = "#e5e7eb";
                }}
              >
                <GitBranch size={18} color="#d97706" />
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#1f2937",
                    }}
                  >
                    If Condition
                  </div>
                  <div style={{ fontSize: "11px", color: "#6b7280" }}>
                    Branch workflow logic
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </aside>
  );
};

export default Sidebar;
