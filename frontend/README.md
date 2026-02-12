# Smart Content Pipeline

A visual workflow builder for automating content creation and distribution using React, TypeScript, and n8n.

![Phase 1 Complete](https://img.shields.io/badge/Phase-1%20Complete-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Live Demo

🔗 **[View Live Demo](#)** _(https://smart-content-pipline.vercel.app/)_

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

**Ubba Obada** - [@Ubba Obada](https:www.linkedin.com/in/ubba-obada)

Project Link: [https://github.com/Obada-barakat/Smart-content-pipeline_](https://github.com/Obada-barakat/Smart-content-pipeline_)

---

⭐ If you find this project helpful for learning, please consider giving it a star!
