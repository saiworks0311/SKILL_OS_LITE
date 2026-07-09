import "./DashboardShowcase.css";

function DashboardShowcase() {
  return (
    <section className="dashboard-showcase">

      <div className="container">

        <div className="section-heading">
          <span>DASHBOARD</span>
          <h2>Your Personal Learning Workspace</h2>
          <p>
            Manage your roadmap, projects, practice and achievements
            from one intelligent dashboard.
          </p>
        </div>

        <div className="dashboard-container">

          {/* Left */}

          <div className="dashboard-left">

            <div className="profile-card">

              <h2>Frontend Developer</h2>

              <p>
                Continue your personalized learning journey.
              </p>

              <button>Resume Learning</button>

            </div>

            <div className="stats-grid">

              <div className="stat-box">
                <h4>Roadmap</h4>
                <h2>68%</h2>
              </div>

              <div className="stat-box">
                <h4>Career XP</h4>
                <h2>4820</h2>
              </div>

            </div>

            <div className="progress-card">

              <h3>Current Progress</h3>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "68%" }}
                />
              </div>

              <span>68% Completed</span>

            </div>

          </div>

          {/* Right */}

          <div className="dashboard-right">

            <div className="task-card">

              <h3>Today's Tasks</h3>

              <ul>
                <li>✅ React Components</li>
                <li>✅ CSS Grid</li>
                <li>⬜ React Router</li>
                <li>⬜ API Integration</li>
              </ul>

            </div>

            <div className="certificate-card">

              <h3>Achievements</h3>

              <div className="badge-row">

                <span className="badge">🏆 HTML</span>

                <span className="badge">⚡ CSS</span>

                <span className="badge">🔥 React</span>

                <span className="badge">💻 Git</span>

              </div>

            </div>

            <div className="bottom-grid">

              <div className="small-card">

                <h4>Projects</h4>

                <h2>12</h2>

              </div>

              <div className="small-card">

                <h4>Practice</h4>

                <h2>95</h2>

              </div>

              <div className="small-card">

                <h4>Streak</h4>

                <h2>7🔥</h2>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardShowcase;