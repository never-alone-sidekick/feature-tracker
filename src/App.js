import React, { useState } from 'react';
import { Header, Card, CardBody, Badge } from '@never-alone-sidekick/ui';
import { useTheme } from '@never-alone-sidekick/ui';

const features = [
  {
    id: 1,
    name: "Sober Agent MCP",
    status: "active",
    goal: "Combine Amplitude behavioral analytics with Back4App user data to detect patterns that predict relapse risk",
    value: "Identify at-risk users before relapse occurs, enabling proactive outreach and support interventions",
    repo: "sidekick2020/sober-agent-training",
    repoUrl: "https://github.com/sidekick2020/sober-agent-training",
    tools: ["get_user_profile", "get_at_risk_users", "get_user_activity", "get_engagement_trends"],
    category: "Analytics"
  },
  {
    id: 2,
    name: "Medicare Research Dashboard",
    status: "deployed",
    goal: "Visualize Medicare spending on Substance Use Disorder treatment with interactive charts",
    value: "Support advocacy efforts with data-driven research showing treatment funding gaps and policy impacts",
    repo: "sidekick2020/medicare-research-dashboard",
    repoUrl: "https://github.com/sidekick2020/medicare-research-dashboard",
    liveUrl: "https://research.sobersidekick.com",
    category: "Research"
  },
  {
    id: 3,
    name: "Sign in with Sober Sidekick",
    status: "active",
    goal: "React authentication library for third-party apps to integrate Sober Sidekick SSO",
    value: "Enable partners and recovery organizations to leverage existing Sober Sidekick accounts, reducing friction",
    repo: "never-alone-sidekick/sober-sidekick-auth",
    repoUrl: "https://github.com/never-alone-sidekick/sober-sidekick-auth",
    tools: ["SoberSidekickAuthProvider", "SignInButton", "useAuth hook"],
    category: "Integration"
  },
  {
    id: 4,
    name: "MCP Server Installers",
    status: "deployed",
    goal: "Single-file bash installers for all Claude MCP servers with macOS Keychain credential management",
    value: "Eliminate setup friction—one command installs and configures Claude Desktop + Claude Code integration",
    repo: "never-alone-sidekick/claude-mcps",
    repoUrl: "https://github.com/never-alone-sidekick/claude-mcps",
    tools: ["Back4App MCP", "Wix DNS MCP", "Render MCP", "GitHub MCP"],
    category: "Developer Tools"
  },
  {
    id: 5,
    name: "Sober Console",
    status: "in-progress",
    goal: "Admin dashboard for managing APIs, packages, and user permissions across all Sober Sidekick subdomains",
    value: "Centralize infrastructure management with strict admin controls (chris.thompson@sobersidekick.com only)",
    repo: "never-alone-sidekick/sober-console",
    repoUrl: "https://github.com/never-alone-sidekick/sober-console",
    liveUrl: "https://console.sobersidekick.com",
    category: "Admin"
  },
  {
    id: 6,
    name: "Sober Deploy Mac",
    status: "in-progress",
    goal: "Native macOS app for one-click deployments leveraging all MCP servers",
    value: "Deploy any repo to production, configure hosting, and auto-create subdomains without leaving the app",
    repo: "never-alone-sidekick/sober-deploy-mac",
    repoUrl: "https://github.com/never-alone-sidekick/sober-deploy-mac",
    category: "Developer Tools"
  }
];

const statusConfig = {
  deployed: { variant: "success", label: "Deployed" },
  active: { variant: "info", label: "Active" },
  "in-progress": { variant: "warning", label: "In Progress" }
};

function App() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  const [filter, setFilter] = useState("all");
  const { theme } = useTheme();

  const filteredFeatures = filter === "all" 
    ? features 
    : features.filter(f => f.status === filter);

  const navItems = [
    { path: '/', label: 'Dashboard' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-secondary)' }}>
      <Header 
        appName="Feature Tracker"
        navItems={navItems}
        showAuth={false}
      />
      
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{
          width: 'var(--sidebar-width)',
          background: 'var(--bg-primary)',
          borderRight: '1px solid var(--border-light)',
          minHeight: 'calc(100vh - var(--header-height))',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Filter Tabs */}
          <div style={{ padding: 'var(--space-4)' }}>
            <div className="tabs">
              {[
                { key: "all", label: "All" },
                { key: "deployed", label: "Deployed" },
                { key: "active", label: "Active" },
                { key: "in-progress", label: "WIP" }
              ].map(f => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`tab ${filter === f.key ? 'active' : ''}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Feature List */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {filteredFeatures.map(feature => {
              const status = statusConfig[feature.status];
              const isSelected = selectedFeature?.id === feature.id;
              return (
                <button
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature)}
                  style={{
                    width: '100%',
                    padding: 'var(--space-4)',
                    textAlign: 'left',
                    border: 'none',
                    borderBottom: '1px solid var(--border-light)',
                    borderLeft: isSelected ? '3px solid var(--accent-primary)' : '3px solid transparent',
                    background: isSelected ? 'var(--bg-active)' : 'var(--bg-primary)',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-2)' }}>
                    <span style={{ fontWeight: 'var(--font-medium)', fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>
                      {feature.name}
                    </span>
                    <Badge variant={status.variant} size="sm">{status.label}</Badge>
                  </div>
                  <Badge variant="primary" size="sm" style={{ marginTop: 'var(--space-2)' }}>
                    {feature.category}
                  </Badge>
                </button>
              );
            })}
          </div>

          {/* Stats Footer */}
          <div style={{
            padding: 'var(--space-4)',
            borderTop: '1px solid var(--border-light)',
            background: 'var(--bg-secondary)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2)', textAlign: 'center', fontSize: 'var(--text-sm)' }}>
              <div>
                <div style={{ color: 'var(--success)', fontWeight: 'var(--font-bold)' }}>
                  {features.filter(f => f.status === "deployed").length}
                </div>
                <div style={{ color: 'var(--text-muted)' }}>Deployed</div>
              </div>
              <div>
                <div style={{ color: 'var(--info)', fontWeight: 'var(--font-bold)' }}>
                  {features.filter(f => f.status === "active").length}
                </div>
                <div style={{ color: 'var(--text-muted)' }}>Active</div>
              </div>
              <div>
                <div style={{ color: 'var(--warning)', fontWeight: 'var(--font-bold)' }}>
                  {features.filter(f => f.status === "in-progress").length}
                </div>
                <div style={{ color: 'var(--text-muted)' }}>WIP</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: 'var(--space-6)', overflowY: 'auto' }}>
          {selectedFeature && (
            <div style={{ maxWidth: 640 }}>
              {/* Feature Header */}
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
                  <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', margin: 0 }}>
                    {selectedFeature.name}
                  </h2>
                  <Badge variant={statusConfig[selectedFeature.status].variant}>
                    {statusConfig[selectedFeature.status].label}
                  </Badge>
                </div>
                <Badge variant="primary">{selectedFeature.category}</Badge>
              </div>

              {/* Goal Card */}
              <Card style={{ marginBottom: 'var(--space-5)' }}>
                <CardBody>
                  <h3 style={{ 
                    fontSize: 'var(--text-xs)', 
                    textTransform: 'uppercase', 
                    letterSpacing: 'var(--tracking-wider)',
                    color: 'var(--text-muted)', 
                    marginBottom: 'var(--space-2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}>
                    🎯 Goal
                  </h3>
                  <p style={{ margin: 0, lineHeight: 'var(--leading-relaxed)' }}>{selectedFeature.goal}</p>
                </CardBody>
              </Card>

              {/* Value Proposition Card */}
              <Card style={{ 
                marginBottom: 'var(--space-5)',
                background: 'var(--accent-light)',
                borderColor: 'rgba(47, 93, 255, 0.2)'
              }}>
                <CardBody>
                  <h3 style={{ 
                    fontSize: 'var(--text-xs)', 
                    textTransform: 'uppercase', 
                    letterSpacing: 'var(--tracking-wider)',
                    color: 'var(--accent-primary)', 
                    marginBottom: 'var(--space-2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}>
                    💎 Value Proposition
                  </h3>
                  <p style={{ margin: 0, lineHeight: 'var(--leading-relaxed)' }}>{selectedFeature.value}</p>
                </CardBody>
              </Card>

              {/* Tools/Components Card */}
              {selectedFeature.tools && (
                <Card style={{ marginBottom: 'var(--space-5)' }}>
                  <CardBody>
                    <h3 style={{ 
                      fontSize: 'var(--text-xs)', 
                      textTransform: 'uppercase', 
                      letterSpacing: 'var(--tracking-wider)',
                      color: 'var(--text-muted)', 
                      marginBottom: 'var(--space-3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)'
                    }}>
                      🔧 Key Components
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                      {selectedFeature.tools.map((tool, i) => (
                        <code key={i} style={{
                          fontSize: 'var(--text-sm)',
                          padding: 'var(--space-1) var(--space-2)',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--bg-tertiary)',
                          color: 'var(--text-secondary)',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          {tool}
                        </code>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                <a
                  href={selectedFeature.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub Repo
                </a>
                {selectedFeature.liveUrl && (
                  <a
                    href={selectedFeature.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live
                  </a>
                )}
              </div>

              {/* Repo Path */}
              <div style={{
                marginTop: 'var(--space-5)',
                padding: 'var(--space-3)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-light)'
              }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>Repository: </span>
                <code style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
                  {selectedFeature.repo}
                </code>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
