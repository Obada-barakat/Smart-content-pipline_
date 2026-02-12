# Phase 1 Architecture - What We Built

## 🎨 Visual Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    SMART CONTENT PIPELINE                        │
│                         (Phase 1)                                │
└─────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                         REACT FRONTEND                              │
│ ┌────────────────┐  ┌──────────────────────────────────────────┐  │
│ │                │  │         WorkflowBuilder                    │  │
│ │   Sidebar      │  │  ┌──────────────────────────────────────┐ │  │
│ │                │  │  │                                        │ │  │
│ │  [Triggers]    │  │  │    React Flow Canvas                  │ │  │
│ │  • RSS         │  │  │                                        │ │  │
│ │  • Webhook     │  │  │    ┌─────────┐                        │ │  │
│ │  • Schedule    │  │  │    │ TRIGGER │                        │ │  │
│ │  • Manual      │  │  │    │  RSS    │──┐                     │ │  │
│ │                │  │  │    └─────────┘  │                     │ │  │
│ │  [Actions]     │  │  │                 ▼                     │ │  │
│ │  • AI Summary  │  │  │           ┌─────────┐                │ │  │
│ │  • Twitter     │  │  │           │ ACTION  │                │ │  │
│ │  • LinkedIn    │  │  │           │   AI    │──┐             │ │  │
│ │  • Buffer      │  │  │           └─────────┘  │             │ │  │
│ │  • Notion      │  │  │                        ▼             │ │  │
│ │  • Email       │  │  │                  ┌─────────┐         │ │  │
│ │                │  │  │                  │ ACTION  │         │ │  │
│ │  [Conditions]  │  │  │                  │ Twitter │         │ │  │
│ │  • If/Then     │  │  │                  └─────────┘         │ │  │
│ │                │  │  │                                        │ │  │
│ │  [Controls]    │  │  │    • Drag nodes                       │ │  │
│ │  • Save        │  │  │    • Connect nodes                    │ │  │
│ │  • Clear       │  │  │    • Zoom/Pan                         │ │  │
│ └────────────────┘  │  └──────────────────────────────────────┘ │  │
│                     └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────┘
                                    ↕
                         Zustand Store (State)
                                    ↕
┌────────────────────────────────────────────────────────────────────┐
│                      STATE MANAGEMENT                               │
│  {                                                                  │
│    nodes: [                                                         │
│      { id, type, position, data },                                  │
│      { id, type, position, data },                                  │
│      ...                                                            │
│    ],                                                               │
│    edges: [                                                         │
│      { id, source, target },                                        │
│      ...                                                            │
│    ],                                                               │
│    workflows: [ /* saved workflows */ ],                            │
│    currentExecution: null  /* for Phase 4 */                        │
│  }                                                                  │
└────────────────────────────────────────────────────────────────────┘
```

## 📂 File Structure

```
smart-content-pipeline/
│
├── README.md                 ← Project overview
│
├── frontend/
│   ├── index.html            ← HTML entry point
│   ├── package.json          ← Dependencies
│   ├── tsconfig.json         ← TypeScript config
│   ├── vite.config.ts        ← Vite bundler config
│   │
│   └── src/
│       ├── main.tsx          ← React entry point
│       ├── App.tsx           ← Root component
│       ├── index.css         ← Global styles
│       │
│       ├── components/
│       │   ├── WorkflowBuilder.tsx   ← Main canvas
│       │   ├── Sidebar.tsx           ← Node palette
│       │   │
│       │   └── nodes/
│       │       ├── TriggerNode.tsx   ← Custom trigger node
│       │       ├── ActionNode.tsx    ← Custom action node
│       │       └── ConditionNode.tsx ← Custom condition node
│       │
│       ├── store/
│       │   └── workflowStore.ts      ← Zustand state
│       │
│       └── types/
│           └── workflow.ts           ← TypeScript types
│
├── backend/                  ← (Phase 2 - Not built yet)
│
└── docker/                   ← (Phase 6 - Not built yet)
```

## 🔄 Data Flow

### Adding a Node

```
User clicks "RSS Feed"
         ↓
   Sidebar.tsx
   onClick={() => createNode(...)}
         ↓
   Create node object:
   {
     id: "trigger-123",
     type: "trigger",
     position: { x: 250, y: 100 },
     data: {
       label: "RSS Feed",
       triggerType: "rss",
       config: {}
     }
   }
         ↓
   workflowStore.addNode(node)
         ↓
   Zustand updates state:
   set({ nodes: [...nodes, newNode] })
         ↓
   React re-renders
         ↓
   WorkflowBuilder sees new node
         ↓
   React Flow renders TriggerNode
         ↓
   User sees node on canvas!
```

### Connecting Nodes

```
User drags from source handle
         ↓
   React Flow tracks drag
         ↓
User drops on target handle
         ↓
   onConnect() fired
         ↓
   workflowStore.onConnect(connection)
         ↓
   Zustand adds edge:
   set({ edges: addEdge(connection, edges) })
         ↓
   React re-renders
         ↓
   Connection line appears!
```

## 🎯 What Each File Does

### Core Components

**App.tsx**

- Root component
- Wraps everything in ReactFlowProvider
- Renders WorkflowBuilder

**WorkflowBuilder.tsx**

- Main React Flow canvas
- Registers custom node types
- Handles node/edge changes
- Shows Background, Controls, MiniMap

**Sidebar.tsx**

- Node palette on the left
- Lists all available nodes
- Creates nodes when clicked
- Has Save/Clear buttons
- Workflow name editor

### Custom Nodes

**TriggerNode.tsx**

- Blue colored
- Shows trigger icon (RSS, Webhook, etc.)
- Has SOURCE handle (output only)
- Displays trigger config

**ActionNode.tsx**

- Light blue colored
- Shows action icon (AI, Twitter, etc.)
- Has TARGET handle (input)
- Has SOURCE handle (output)
- Can chain actions

**ConditionNode.tsx**

- Yellow colored
- Shows branch icon
- Has TARGET handle (input)
- Has TWO SOURCE handles (true/false)
- For conditional logic

### State & Types

**workflowStore.ts**

- Zustand store (global state)
- Holds nodes, edges, workflows
- Actions to modify state
- saveWorkflow(), loadWorkflow(), etc.

**workflow.ts**

- TypeScript type definitions
- Node types (trigger, action, condition)
- Workflow structure
- Execution status (for Phase 4)

## 🧠 Key Concepts

### 1. React Flow Nodes

Each node needs:

- `id` - Unique identifier
- `type` - Maps to custom component
- `position` - { x, y } coordinates
- `data` - Whatever you want to pass

### 2. Handles

Connection points on nodes:

- `type="source"` - Output (can connect FROM this)
- `type="target"` - Input (can connect TO this)

### 3. Zustand Store

Simple state management:

```typescript
const useStore = create((set, get) => ({
  count: 0,
  increment: () => set({ count: get().count + 1 }),
}));

// In component:
const { count, increment } = useStore();
```

### 4. TypeScript Benefits

Type-safe everything:

- Autocomplete in editor
- Catch errors before runtime
- Self-documenting code
- Refactoring with confidence

## 📚 What we've Learned

✅ React Flow for node-based UIs  
✅ Zustand for state management  
✅ TypeScript with React  
✅ Custom React components  
✅ Event handling in React  
✅ State updates and re-renders  
✅ Component composition  
✅ Props and data flow

## 🚀 Next Steps

**Phase 2: Backend API**

- Express.js server
- PostgreSQL database
- REST API endpoints
- Workflow persistence

**Phase 3: n8n Integration**

- Translate workflows to n8n
- Execute workflows
- Get results

**Phase 4: Real-Time Updates**

- WebSockets
- Live execution status
- Progress tracking

**Phase 5: Advanced Automation**

- Temporal.io workflows
- BullMQ job queue
- Error handling
