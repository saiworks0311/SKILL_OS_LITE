function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <h4>{project.tech}</h4>

      <span>{project.level}</span>

      <br /><br />

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="project-btn"
      >
        View GitHub →
      </a>

    </div>
  );
}

export default ProjectCard;