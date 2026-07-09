import KnowledgeCard from "./components/KnowledgeCard";
import "./KnowledgeHub.css";

function KnowledgeHub() {
  const resources = [
    {
      title: "HTML",
      description: "Learn HTML from official documentation and tutorials.",
      category: "Frontend",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      title: "CSS",
      description: "Master layouts, Flexbox, Grid and animations.",
      category: "Frontend",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      title: "JavaScript",
      description: "Core JavaScript concepts and ES6 features.",
      category: "Programming",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      title: "React",
      description: "Official React documentation.",
      category: "Frontend",
      link: "https://react.dev/"
    },
    {
      title: "Git & GitHub",
      description: "Version control and collaboration.",
      category: "Tools",
      link: "https://git-scm.com/doc"
    },
    {
      title: "SQL",
      description: "Learn SQL from Microsoft Learn.",
      category: "Database",
      link: "https://learn.microsoft.com/en-us/sql/"
    }
  ];

  return (
    <div className="knowledge-page">

      <h1>📚 Knowledge Hub</h1>

      <p className="knowledge-subtitle">
        Curated learning resources for every roadmap.
      </p>

      <div className="knowledge-grid">

        {resources.map((item, index) => (
          <KnowledgeCard
            key={index}
            item={item}
          />
        ))}

      </div>

    </div>
  );
}

export default KnowledgeHub;