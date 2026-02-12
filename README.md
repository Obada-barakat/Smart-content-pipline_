# Smart Content Pipeline

Visual workflow automation platform for content creation and distribution.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](YOUR_VERCEL_URL)
[![Phase](https://img.shields.io/badge/phase-1%20complete-blue)]()
[![License](https://img.shields.io/badge/license-MIT-green)]()

## Demo

**[Live Demo](https://smart-content-pipline.vercel.app/)**

## Features

**Visual Workflow Builder**
- Drag-and-drop node-based editor
- 10+ automation nodes (Triggers, Actions, Conditions)
- Real-time canvas updates
- Collapsible sidebar with hover effects

**Node Types**
- Triggers: RSS, Webhook, Schedule, Manual
- Actions: AI Summarize, Social Media, Email, Notion
- Conditions: If/Then branching

**Technical**
- Full TypeScript coverage
- Zustand state management
- React Flow integration
- Responsive UI

## Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/smart-content-pipeline.git
cd smart-content-pipeline/frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- React 18, TypeScript, Vite
- React Flow, Zustand
- Lucide React (icons)

## Project Structure

```
├── frontend/          React app
├── backend/           Express API (Phase 2)
└── docker/            Deployment (Phase 6)
```

## Roadmap

- [x] **Phase 1:** Visual workflow builder
- [ ] **Phase 2:** Backend API + PostgreSQL
- [ ] **Phase 3:** n8n integration
- [ ] **Phase 4:** Real-time monitoring
- [ ] **Phase 5:** Advanced orchestration

## Development

```bash
# Frontend
cd frontend
npm run dev        # Development server
npm run build      # Production build
npm run preview    # Preview build

# Backend (Phase 2)
cd backend
npm run dev
```

## Deploy

**Vercel (Frontend)**
- Framework: Vite
- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist`

## License

MIT

## Contact

Built by [Ubba Obada](https://github.com/Obada-barakat)

---

⭐ Star this repo if you find it useful
