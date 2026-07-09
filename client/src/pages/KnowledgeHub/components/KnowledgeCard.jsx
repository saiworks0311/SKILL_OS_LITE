function KnowledgeCard({ item }) {
  return (
    <div className="knowledge-card">

      <h2>{item.title}</h2>

      <p>{item.description}</p>

      <span>{item.category}</span>

      <br /><br />

      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="knowledge-btn"
      >
        Read Documentation →
      </a>

    </div>
  );
}

export default KnowledgeCard;