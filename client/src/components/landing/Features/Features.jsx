import "./Features.css";

import {
  FaCode,
  FaRobot,
  FaFolderOpen,
  FaBrain,
  FaChartLine,
  FaBook
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Roadmaps",
    text: "Follow structured learning paths designed for your career."
  },
  {
    icon: <FaCode />,
    title: "Coding Practice",
    text: "Practice coding with curated problems and challenges."
  },
  {
    icon: <FaFolderOpen />,
    title: "Projects",
    text: "Build portfolio-ready projects from beginner to advanced."
  },
  {
    icon: <FaBook />,
    title: "Smart Notes",
    text: "Save notes, links and resources in one workspace."
  },
  {
    icon: <FaChartLine />,
    title: "Progress Tracking",
    text: "Track your learning journey and completion percentage."
  },
  {
    icon: <FaBrain />,
    title: "AI Assistant",
    text: "Receive intelligent recommendations based on your progress."
  }
];

function Features() {
  return (
    <section className="features">

      <div className="container">

        <div className="section-heading">

          <span>FEATURES</span>

          <h2>
            Everything You Need To Become Job Ready
          </h2>

          <p>
            Skill OS combines learning, practice, projects,
            notes and AI guidance into one platform.
          </p>

        </div>

        <div className="features-grid">

          {features.map((feature, index) => (

            <div className="feature-card" key={index}>

              <div className="feature-icon">

                {feature.icon}

              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;