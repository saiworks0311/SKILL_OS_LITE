function ProgressHeader({ roadmap }) {
  return (
    <div className="progress-header card">
      <h1>{roadmap.title}</h1>

      <h3>{roadmap.progress}% Completed</h3>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${roadmap.progress}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressHeader;