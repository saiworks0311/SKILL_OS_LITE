import { useState, useEffect } from "react";
import LessonItem from "./LessonItem";
import ResourceCard from "./ResourceCard";

function ModuleCard({ module }) {
  const [open, setOpen] = useState(true);

  // Load saved lesson progress
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem(`module-${module.title}`);

    if (saved) {
      return JSON.parse(saved);
    }

    return module.lessons.map(() => module.completed);
  });

  // Save whenever it changes
  useEffect(() => {
    localStorage.setItem(
      `module-${module.title}`,
      JSON.stringify(completedLessons)
    );
  }, [completedLessons, module.title]);

 const toggleLesson = (index) => {
  const updated = [...completedLessons];

  updated[index] = !updated[index];

  setCompletedLessons(updated);

  // Save immediately
  localStorage.setItem(
    `module-${module.title}`,
    JSON.stringify(updated)
  );

  // Refresh page so ProgressHeader updates
  window.location.reload();
};

  const completedCount = completedLessons.filter(Boolean).length;

  const progress = Math.round(
    (completedCount / module.lessons.length) * 100
  );

  return (
    <div className="card module-card">

      <div
        className="module-header"
        onClick={() => setOpen(!open)}
      >

        <div>

          <div className="module-title">
            {open ? "▼" : "▶"} {module.title}
          </div>

          <div className="module-status">
            {completedCount === module.lessons.length
              ? "✅ Completed"
              : `${progress}% Completed`}
          </div>

        </div>

        <h2>{open ? "−" : "+"}</h2>

      </div>

      {/* Progress Bar */}

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />

      </div>

      {open && (
        <>
          <div className="lesson-list">

            {module.lessons.map((lesson, index) => (

              <LessonItem
                key={index}
                title={lesson}
                done={completedLessons[index]}
                duration={`${15 + index * 5} min`}
                onToggle={() => toggleLesson(index)}
              />

            ))}

          </div>

          <div className="resource-section">

            {module.resources.map((resource, index) => (

              <ResourceCard
                key={index}
                resource={resource}
              />

            ))}

          </div>

        </>
      )}

    </div>
  );
}

export default ModuleCard;