import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

function RoadmapCard({ roadmap }) {
  const navigate = useNavigate();

  return (
    <div className="roadmap-card">
      <h2>{roadmap.title}</h2>

      <p>{roadmap.level}</p>

      <ProgressBar
        progress={roadmap.progress}
        color={roadmap.color}
      />

      <h3>{roadmap.progress}% Completed</h3>

      <button
        className="primary-btn"
        onClick={() => navigate(`/roadmaps/${roadmap.slug}`)}
      >
        Continue →
      </button>
    </div>
  );
}

export default RoadmapCard;