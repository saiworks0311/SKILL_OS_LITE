import "./CareerSection.css";
import { FaLaptopCode, FaServer, FaLock } from "react-icons/fa";

function CareerSection() {
  return (
    <section className="career-section">

      <div className="container">

        <div className="section-heading">

          <span>CAREER PATHS</span>

          <h2>Choose Your Career Journey</h2>

          <p>
            Skill OS currently supports Frontend and Backend learning.
            More career paths will be available in future updates.
          </p>

        </div>

        <div className="career-grid">

          {/* FRONTEND */}

          <div className="career-card active">

            <div className="career-top">

              <FaLaptopCode />

              <span>Available</span>

            </div>

            <h3>Frontend Development</h3>

            <p>
              HTML • CSS • JavaScript • React • Git • Deployment
            </p>

            <ul>

              <li>✔ Interactive Roadmap</li>

              <li>✔ Coding Practice</li>

              <li>✔ Projects</li>

              <li>✔ Notes</li>

              <li>✔ Progress Tracking</li>

            </ul>

            <button>

              Start Learning →

            </button>

          </div>

          {/* BACKEND */}

          <div className="career-card active">

            <div className="career-top">

              <FaServer />

              <span>Available</span>

            </div>

            <h3>Backend Development</h3>

            <p>
              Node.js • Express • APIs • MongoDB • Authentication
            </p>

            <ul>

              <li>✔ Interactive Roadmap</li>

              <li>✔ Coding Practice</li>

              <li>✔ Projects</li>

              <li>✔ Notes</li>

              <li>✔ Progress Tracking</li>

            </ul>

            <button>

              Start Learning →

            </button>

          </div>

        </div>

        {/* Coming Soon */}

        <div className="coming-section">

          <h3>Coming Soon</h3>

          <div className="coming-grid">

            <div>

              <FaLock />

              UI / UX Design

            </div>

            <div>

              <FaLock />

              Data Analytics

            </div>

            <div>

              <FaLock />

              System Design

            </div>

            <div>

              <FaLock />

              Full Stack Development

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CareerSection;