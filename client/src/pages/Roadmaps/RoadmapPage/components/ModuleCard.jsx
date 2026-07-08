import { useState } from "react";
import LessonItem from "./LessonItem";
import ResourceCard from "./ResourceCard";

function ModuleCard({ module }) {
  const [open, setOpen] = useState(true);

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
            {module.completed
              ? "✅ Completed"
              : "📘 In Progress"}
          </div>
        </div>

        <h2>{open ? "−" : "+"}</h2>
      </div>

      {open && (
        <>
          <div className="lesson-list">
            {module.lessons.map((lesson, index) => (
              <LessonItem
                key={index}
                title={lesson}
                done={module.completed}
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