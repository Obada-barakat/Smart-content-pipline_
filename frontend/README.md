# Smart Content Pipeline

A visual workflow builder for automating content creation and distribution using React, TypeScript, and n8n.

![Phase 1 Complete](https://img.shields.io/badge/Phase-1%20Complete-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Live Demo

🔗 **[View Live Demo](#)** _(Add your Vercel URL here after deployment)_

## ✨ Features (Phase 1)

✅ **Visual Workflow Builder**

- Drag-and-drop node-based interface
- Custom node types: Triggers, Actions, Conditions
- Visual connections between nodes
- Real-time canvas updates

✅ **Node Types**

- **Triggers**: RSS, Webhook, Schedule, Manual
- **Actions**: AI Summarize, Twitter, LinkedIn, Buffer, Notion, Email
- **Conditions**: If/Then branching logic

✅ **UI Features**

- Collapsible sidebar
- Zoom and pan controls
- Mini-map for navigation
- Background grid for alignment
- Editable workflow names

✅ **State Management**

- Zustand for global state
- Save workflows (local storage for now)
- Load and clear workflows

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/smart-content-pipeline.git
cd smart-content-pipeline

# Install dependencies
cd frontend
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🏗️ Project Structure

```
smart-content-pipeline/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── WorkflowBuilder.tsx  # Main canvas
│   │   │   ├── Sidebar.tsx          # Node palette
│   │   │   └── nodes/               # Custom node types
│   │   ├── store/
│   │   │   └── workflowStore.ts     # Zustand state
│   │   └── types/
│   │       └── workflow.ts          # TypeScript types
│   └── package.json
├── backend/                          # Coming in Phase 2
└── README.md
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **State Management**: Zustand
- **UI Library**: React Flow
- **Icons**: Lucide React
- **Styling**: Inline CSS (for now)

## 📚 Documentation

- [Getting Started Guide](./GETTING-STARTED.md)
- [Development Guide](./GUIDE.md)
- [Architecture Overview](./ARCHITECTURE.md)
- [Quick Reference](./QUICK-REFERENCE.md)

## 🗺️ Roadmap

### ✅ Phase 1: Visual Workflow Builder (Complete)

- [x] React Flow integration
- [x] Custom node components
- [x] Zustand state management
- [x] Sidebar with node palette
- [x] Save/load workflows (local)

### 🚧 Phase 2: Backend API (Next)

- [ ] Express.js server
- [ ] PostgreSQL database
- [ ] REST API for workflows
- [ ] Persistent storage
- [ ] Authentication

### 📅 Phase 3: n8n Integration

- [ ] Translate workflows to n8n format
- [ ] Execute workflows via n8n API
- [ ] Error handling

### 📅 Phase 4: Real-Time Monitoring

- [ ] WebSockets for live updates
- [ ] Execution history
- [ ] Progress tracking

### 📅 Phase 5: Advanced Automation

- [ ] Temporal.io integration
- [ ] BullMQ job queue
- [ ] Complex error handling

## 🤝 Contributing

This is a learning project, but suggestions and feedback are welcome!

## 📝 License

MIT License - feel free to use this for learning purposes.

## 🙏 Acknowledgments

- Built while learning React, TypeScript, and automation
- Inspired by n8n, Zapier, and Make.com
- Special thanks to Claude for the step-by-step guidance

## 📧 Contact

**Your Name** - [@YourTwitter](https://twitter.com/yourhandle)

Project Link: [https://github.com/YOUR_USERNAME/smart-content-pipeline](https://github.com/YOUR_USERNAME/smart-content-pipeline)

---

⭐ If you find this project helpful for learning, please consider giving it a star!

### Frontend Architecture

We've just created a complete React + TypeScript workflow builder with:

1. **Visual Workflow Editor** (React Flow)
   - Drag-and-drop node-based interface
   - Custom node types: Triggers, Actions, Conditions
   - Visual connections between nodes
   - Zoom, pan, minimap controls

2. **State Management** (Zustand)
   - Global workflow state
   - Node and edge management
   - Workflow save/load functionality
   - Execution tracking (prepared for Phase 4)

3. **Custom Node Components**
   - **TriggerNode**: RSS, Webhook, Schedule, Manual triggers
   - **ActionNode**: AI Summarize, Social media posting, Email, etc.
   - **ConditionNode**: Branching logic with true/false paths

4. **TypeScript Types**
   - Fully typed workflow definitions
   - Node data structures
   - Execution status types

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── nodes/
│   │   │   ├── TriggerNode.tsx     # RSS, webhook, schedule triggers
│   │   │   ├── ActionNode.tsx      # AI, social media, email actions
│   │   │   └── ConditionNode.tsx   # If/else branching
│   │   ├── WorkflowBuilder.tsx     # Main React Flow canvas
│   │   └── Sidebar.tsx             # Node palette + controls
│   ├── store/
│   │   └── workflowStore.ts        # Zustand state management
│   ├── types/
│   │   └── workflow.ts             # TypeScript definitions
│   ├── App.tsx                     # Root component
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Styles
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🔧 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **React Flow** - Node-based editor
- **Zustand** - Lightweight state management
- **Lucide React** - Icons

## 🚀 How to Run

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000

## 🎨 How It Works

### Creating a Workflow

1. **Add Triggers**: Click on trigger types in the sidebar
2. **Add Actions**: Click on action types to add processing steps
3. **Connect Nodes**: Drag from output handles to input handles
4. **Add Conditions**: Branch your workflow logic
5. **Save**: Click the Save button

### Current Features

✅ Visual workflow builder with drag-and-drop  
✅ Multiple node types (triggers, actions, conditions)  
✅ Node connections with validation  
✅ Workflow naming and metadata  
✅ Save workflows to local state  
✅ Clear/reset functionality

### Coming Next (Phase 2)

⏳ Backend API (Express + PostgreSQL)  
⏳ Persistent workflow storage  
⏳ n8n integration for execution  
⏳ Real-time execution monitoring  
⏳ Authentication

## 🎓 Learning Points

### What You Just Learned

1. **React Flow Basics**
   - Custom node components
   - Handles (connection points)
   - Node and edge state management
   - Canvas controls

2. **Zustand State Management**
   - Creating stores with `create()`
   - State actions and setters
   - Derived state and computed values

3. **TypeScript with React**
   - Defining component props
   - Union types for node data
   - Type-safe state management

4. **Component Architecture**
   - Separation of concerns
   - Reusable node components
   - Props drilling vs global state

## 📝 Understanding the Code

### Node System

Each node type has:

- **Type**: `trigger`, `action`, or `condition`
- **Data**: Configuration specific to the node
- **Handles**: Connection points (source/target)
- **Position**: X/Y coordinates on canvas

### State Flow

```
User clicks node in Sidebar
  → addNode() called in Zustand store
  → New node added to nodes array
  → React Flow re-renders
  → Node component receives data via props
```

### Connection Validation

React Flow automatically handles:

- Preventing circular connections
- Visual feedback during dragging
- Edge creation and removal

## 🐛 Known Limitations

- No backend yet (workflows only saved in memory)
- No actual execution (just visual editor)
- No node configuration UI (coming in Phase 3)
- Network calls will fail (we'll add backend next)

## 📚 Next Steps

**Phase 2: Backend API** We'll build:

1. Express.js server
2. PostgreSQL database with Prisma
3. REST API for workflows
4. CRUD operations
5. Connect frontend to backend
