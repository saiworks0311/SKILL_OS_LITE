function LessonItem({ title, done }) {
  return (
    <div className="lesson-item">
      <input
        type="checkbox"
        checked={done}
        readOnly
      />

      <span>{title}</span>
    </div>
  );
}

export default LessonItem;