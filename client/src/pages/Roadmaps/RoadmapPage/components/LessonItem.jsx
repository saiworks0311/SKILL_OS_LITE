function LessonItem({
  title,
  done,
  duration,
  onToggle,
}) {
  return (
    <div className="lesson-card">

      <div className="lesson-top">

        <div className="lesson-check">

          <input
            type="checkbox"
            checked={done}
            onChange={onToggle}
          />

        </div>

        <div className="lesson-info">

          <h4>{title}</h4>

          <p>{duration}</p>

        </div>

      </div>

      <button
        className="lesson-btn"
        onClick={onToggle}
      >
        {done ? "Review" : "Start"}
      </button>

    </div>
  );
}

LessonItem.defaultProps = {
  duration: "20 min",
};

export default LessonItem;