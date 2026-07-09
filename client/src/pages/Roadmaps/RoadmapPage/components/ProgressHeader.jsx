import { useEffect, useState } from "react";

function ProgressHeader({ roadmap }) {
  const [progress, setProgress] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(0);
  const [totalLessons, setTotalLessons] = useState(0);

  useEffect(() => {
    let completed = 0;
    let total = 0;

    roadmap.modules.forEach((module) => {
      const saved = JSON.parse(
        localStorage.getItem(`module-${module.title}`)
      );

      if (saved) {
        completed += saved.filter(Boolean).length;
        total += saved.length;
      } else {
        completed += module.completed
          ? module.lessons.length
          : 0;

        total += module.lessons.length;
      }
    });

    setCompletedLessons(completed);
    setTotalLessons(total);

    const percent =
      total === 0
        ? 0
        : Math.round((completed / total) * 100);

    setProgress(percent);
  }, [roadmap]);

  return (
    <div className="progress-header card">

      <h1>{roadmap.title}</h1>

      <h3>
        {progress}% Completed
      </h3>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p
        style={{
          marginTop: "15px",
          color: "#9ca3af",
        }}
      >
        {completedLessons} / {totalLessons} Lessons Completed
      </p>

    </div>
  );
}

export default ProgressHeader;