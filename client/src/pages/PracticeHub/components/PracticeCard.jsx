function PracticeCard({ item }) {
  return (
    <div className="practice-card">

      <h2>{item.title}</h2>

      <p>{item.description}</p>

      <span>{item.level}</span>

      <br /><br />

      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="practice-btn"
      >
        Start Practice →
      </a>

    </div>
  );
}

export default PracticeCard;