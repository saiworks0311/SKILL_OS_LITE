function ProgressBar({ progress, color }) {
  return (
    <div className="progress">

      <div
        className="progress-inner"
        style={{
          width: `${progress}%`,
          background: color,
        }}
      />

    </div>
  );
}

export default ProgressBar;