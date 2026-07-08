function ProgressCards() {
  const progress = 68;

  return (
    <div className="card">
      <h2 className="dashboard-card-title">
        Frontend Roadmap
      </h2>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="dashboard-card-text">
        {progress}% Completed
      </p>

      <button className="primary-btn">
        Continue Learning →
      </button>
    </div>
  );
}

export default ProgressCards;