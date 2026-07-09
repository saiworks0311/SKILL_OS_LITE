import { useState } from "react";

function MyProjects() {
  const [projects, setProjects] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    demo: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProject = (e) => {
    e.preventDefault();

    if (!form.title || !form.tech) {
      alert("Please fill the required fields.");
      return;
    }

    setProjects([...projects, form]);

    setForm({
      title: "",
      description: "",
      tech: "",
      github: "",
      demo: "",
    });
  };

  return (
    <div className="my-projects">

      <h2>💼 My Projects</h2>

      <form
        className="project-form"
        onSubmit={handleAddProject}
      >

        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="tech"
          placeholder="Technology Used"
          value={form.tech}
          onChange={handleChange}
        />

        <input
          type="url"
          name="github"
          placeholder="GitHub Link"
          value={form.github}
          onChange={handleChange}
        />

        <input
          type="url"
          name="demo"
          placeholder="Live Demo Link"
          value={form.demo}
          onChange={handleChange}
        />

        <button type="submit">
          + Add Project
        </button>

      </form>

      <div className="my-project-grid">

        {projects.length === 0 ? (
          <p>No projects added yet.</p>
        ) : (
          projects.map((project, index) => (
            <div
              key={index}
              className="my-project-card"
            >
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <strong>{project.tech}</strong>

              <br /><br />

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

              {" | "}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default MyProjects;