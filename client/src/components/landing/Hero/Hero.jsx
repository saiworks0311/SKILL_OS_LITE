import "./Hero.css";
import { useEffect, useState } from "react";

function Hero() {
  const [career, setCareer] = useState(0);
  const [resources, setResources] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    let c = 0;
    let r = 0;
    let p = 0;

    const timer = setInterval(() => {
      if (c < 6) {
        c++;
        setCareer(c);
      }

      if (r < 250) {
        r += 5;
        setResources(r);
      }

      if (p < 100) {
        p += 2;
        setProjects(p);
      }

      if (c >= 6 && r >= 250 && p >= 100) {
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="container hero-grid">

        {/* LEFT SIDE */}

        <div className="hero-left">

          <span className="hero-badge">
            🚀 AI Powered Career Operating System
          </span>

          <h1>
            Learn.
            <br />
            Build.
            <br />
            Get Hired.
          </h1>

          <p>
            Skill OS is your all-in-one learning workspace.
            Build personalized roadmaps, organize notes,
            practice coding, complete projects, track your
            progress and prepare for placements — all in
            one intelligent platform.
          </p>

          <div className="hero-buttons">

            <button className="hero-primary">
              Get Started
            </button>

            <button className="hero-secondary">
              Explore Careers
            </button>

          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <h3>{career}+</h3>
              <p>Career Tracks</p>
            </div>

            <div className="stat-card">
              <h3>{resources}+</h3>
              <p>Learning Resources</p>
            </div>

            <div className="stat-card">
              <h3>{projects}+</h3>
              <p>Projects</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-right">

          <div className="dashboard-preview">

            <div className="dashboard-header">

              <div className="window-buttons">

                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>

              </div>

              <h4>Skill OS Dashboard</h4>

            </div>

            <div className="dashboard-content">

              <div className="progress-card">

                <h5>Frontend Roadmap</h5>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: "68%" }}
                  ></div>
                </div>

                <p>68% Completed</p>

              </div>

              <div className="task-card">

                <h5>Today's Goal</h5>

                <ul>
                  <li>✅ React Basics</li>
                  <li>✅ Components</li>
                  <li>⬜ Props</li>
                  <li>⬜ Hooks</li>
                </ul>

              </div>

              <div className="xp-card">

                <h5>Career XP</h5>

                <h2>4,820</h2>

                <p>Level 8 Explorer</p>

              </div>

              <div className="continue-card">

                <h5>Continue Learning</h5>

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

          <div className="floating-card">
            🔥 7 Day Streak
          </div>

          <div className="floating-card two">
            ⭐ Placement Ready 64%
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;