import "./Hero.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const [career, setCareer] = useState(0);
  const [resources, setResources] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    let c = 0, r = 0, p = 0;

    const timer = setInterval(() => {
      if (c < 6) setCareer(++c);
      if (r < 250) setResources(r += 5);
      if (p < 100) setProjects(p += 2);

      if (c >= 6 && r >= 250 && p >= 100) {
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="container hero-grid">

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

            <button
              className="hero-primary"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>

            <button
              className="hero-secondary"
              onClick={() =>
                document.getElementById("careers")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
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

              <div className="dashboard-grid">

                <div className="progress-card">
                  <h5>Frontend Roadmap</h5>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "68%" }}
                    />
                  </div>

                  <p>68% Completed</p>

                  <button
                    className="resume-btn"
                    onClick={() => navigate("/roadmaps/frontend")}
                  >
                    Continue →
                  </button>
                </div>

                <div className="task-card">
                  <h5>Today's Tasks</h5>
                  <ul>
                    <li>✅ React Components</li>
                    <li>✅ CSS Grid</li>
                    <li>⬜ React Router</li>
                    <li>⬜ Firebase Basics</li>
                  </ul>
                </div>

                <div className="xp-card">
                  <h5>Career XP</h5>
                  <h2>4820</h2>
                  <span className="xp-level">Level 8 Explorer</span>

                  <div className="xp-mini">
                    <div>
                      <h4>7🔥</h4>
                      <p>Day Streak</p>
                    </div>

                    <div>
                      <h4>64%</h4>
                      <p>Placement Ready</p>
                    </div>
                  </div>
                </div>

                <div className="continue-card">
                  <h5>Next Lesson</h5>

                  <h3>JavaScript DOM</h3>

                  <p>
                    Continue your learning journey
                    and unlock the next module.
                  </p>

                  <button
                    onClick={() => navigate("/roadmaps/frontend")}
                  >
                    Resume Learning
                  </button>
                </div>

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
