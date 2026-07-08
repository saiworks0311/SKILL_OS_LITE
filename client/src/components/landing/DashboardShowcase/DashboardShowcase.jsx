import "./DashboardShowcase.css";

function DashboardShowcase() {
  return (
    <section className="dashboard-showcase">

      <div className="container">

        <div className="section-heading">

          <span>DASHBOARD</span>

          <h2>Your Personal Learning Workspace</h2>

          <p>
            Everything you need is organized in one beautiful dashboard.
          </p>

        </div>

        <div className="dashboard-preview-card">

          <div className="dashboard-sidebar">

            <div className="sidebar-item active">
              Dashboard
            </div>

            <div className="sidebar-item">
              Roadmap
            </div>

            <div className="sidebar-item">
              Notes
            </div>

            <div className="sidebar-item">
              Projects
            </div>

            <div className="sidebar-item">
              Practice
            </div>

          </div>

          <div className="dashboard-main">

            <div className="dashboard-row">

              <div className="mini-card">

                <h3>Roadmap Progress</h3>

                <h1>68%</h1>

              </div>

              <div className="mini-card">

                <h3>Career XP</h3>

                <h1>4820</h1>

              </div>

            </div>

            <div className="dashboard-row">

              <div className="large-card">

                <h3>Today's Tasks</h3>

                <ul>

                  <li>✔ React Components</li>

                  <li>✔ CSS Grid</li>

                  <li>⬜ React Router</li>

                  <li>⬜ API Calls</li>

                </ul>

              </div>

              <div className="large-card">

                <h3>Continue Learning</h3>

                <p>

                  JavaScript

                  <br />

                  DOM Manipulation

                </p>

                <button>

                  Resume →

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardShowcase;