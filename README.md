# Feature Tracker | Sober Sidekick

Interactive dashboard tracking features built with Claude for Sober Sidekick.

## 🌐 Live Site

**URL:** [https://features.sobersidekick.com](https://features.sobersidekick.com)

## ✨ Features

### Dashboard Capabilities
- **Sidebar Navigation** - Filter by status (All, Deployed, Active, WIP)
- **Feature Cards** - Each project with status badge and category tag
- **Detail View** - Goal, Value Proposition, and Key Components
- **Quick Links** - GitHub repo and live site links
- **Stats Footer** - Project counts by status

### Projects Tracked

| Project | Status | Category |
|---------|--------|----------|
| Sober Agent MCP | Active | Analytics |
| Medicare Research Dashboard | Deployed | Research |
| Sign in with Sober Sidekick | Active | Integration |
| MCP Server Installers | Deployed | Developer Tools |
| Sober Console | In Progress | Admin |
| Sober Deploy Mac | In Progress | Developer Tools |

## 🔧 Tech Stack

- **React 18** (CDN) - Zero-build deployment
- **Tailwind CSS** - Utility-first styling
- **GitHub Pages** - Static hosting

## 🎨 Branding

Uses official Sober Sidekick brand colors:
- Primary: `#67B3FD` / `#798FFC`
- Accent: `#27C5CE` / `#B190FF`
- Dark: `#1C1A28`

## 🚀 Deployment

Auto-deploys via GitHub Pages when pushing to `main`.

### Local Development

```bash
# Clone
git clone https://github.com/never-alone-sidekick/feature-tracker.git
cd feature-tracker

# Serve locally
python3 -m http.server 8000

# Visit http://localhost:8000
```

## 📂 Structure

```
├── index.html    # Main React app (self-contained)
├── CNAME         # Custom domain config
└── README.md     # This file
```

## 🏢 About Sober Sidekick

> **"You're Never Alone"**

Sober Sidekick is a free sobriety app connecting people in recovery through community support.

## 📄 License

© 2026 Sober Sidekick. All rights reserved.