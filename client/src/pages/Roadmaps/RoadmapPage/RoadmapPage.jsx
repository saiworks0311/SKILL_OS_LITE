import { useParams } from "react-router-dom";

import frontend from "../../../data/frontend";
import backend from "../../../data/backend";
import uiux from "../../../data/uiux";
import dataAnalyst from "../../../data/dataAnalyst";

import ProgressHeader from "./components/ProgressHeader";
import ModuleCard from "./components/ModuleCard";

import "./RoadmapPage.css";

const roadmaps = {
  frontend,
  backend,
  uiux,
  "data-analyst": dataAnalyst,
};

function RoadmapPage() {
  const { slug } = useParams();

  const roadmap = roadmaps[slug];

  if (!roadmap) {
    return <h1 style={{ color: "white" }}>Roadmap Not Found</h1>;
  }

  return (
    <div className="roadmap-page">
      <ProgressHeader roadmap={roadmap} />

      {roadmap.modules.map((module, index) => (
        <ModuleCard
          key={index}
          module={module}
        />
      ))}
    </div>
  );
}

export default RoadmapPage;