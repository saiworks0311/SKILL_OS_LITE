import ProjectCard from "./components/ProjectCard";
import MyProjects from "./components/MyProjects";

import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      level: "Beginner",
      tech: "HTML • CSS • JavaScript",
      description: "Build your own developer portfolio.",
      github: "https://github.com/topics/portfolio-website",
    },
    {
      title: "Weather App",
      level: "Beginner",
      tech: "React • API",
      description: "Use OpenWeather API to display weather.",
      github: "https://github.com/topics/weather-app",
    },
    {
      title: "Task Manager",
      level: "Intermediate",
      tech: "React • Firebase",
      description: "Create a task management application.",
      github: "https://github.com/topics/todo-app",
    },
    {
      title: "Expense Tracker",
      level: "Intermediate",
      tech: "React • Charts",
      description: "Track income and expenses visually.",
      github: "https://github.com/topics/expense-tracker",
    },
    {
      title: "Chat Application",
      level: "Advanced",
      tech: "React • Firebase",
      description: "Realtime messaging application.",
      github: "https://github.com/topics/chat-application",
    },
    {
      title: "Skill OS Lite",
      level: "Capstone",
      tech: "React • Firebase",
      description: "The complete learning platform MVP.",
      github: "https://github.com/",
    },
  ];

  return (
    <div className="projects-page">
      <h1>🚀 Project Hub</h1>

       <p className="projects-subtitle">
  Build real-world projects to strengthen your portfolio.
</p>

<h2
  style={{
    marginTop: "40px",
    marginBottom: "20px",
    color: "#7c5cfc",
  }}
>
  ⭐ Recommended Projects
</h2>

<div className="projects-grid"></div>

      {/* Recommended Projects */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
    

      </div>

<hr
  style={{
    margin: "60px 0",
    borderColor: "#2a2e3b",
  }}
/>

<MyProjects />
    </div>
  );
}

export default Projects;