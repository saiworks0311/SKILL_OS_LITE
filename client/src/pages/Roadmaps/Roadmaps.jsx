import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import RoadmapCard from "./components/RoadmapCard";

import "./Roadmaps.css";

function Roadmaps() {
  const roadmaps = [
    {
      title: "Frontend Developer",
      slug: "frontend",
      progress: 68,
      level: "Intermediate",
      category: "Development",
      color: "#7C5CFC",
    },
    {
      title: "Backend Developer",
      slug: "backend",
      progress: 20,
      level: "Beginner",
      category: "Development",
      color: "#36CFC9",
    },
    {
      title: "UI / UX Designer",
      slug: "uiux",
      progress: 40,
      level: "Intermediate",
      category: "Design",
      color: "#FF7A45",
    },
    {
      title: "Data Analyst",
      slug: "data-analyst",
      progress: 12,
      level: "Beginner",
      category: "Data",
      color: "#52C41A",
    },
  ];

  return (
    <div className="roadmaps-page">
      <h1>Learning Roadmaps</h1>

      <SearchBar />

      <FilterButtons />

      <div className="roadmaps-grid">
        {roadmaps.map((roadmap) => (
          <RoadmapCard
            key={roadmap.slug}
            roadmap={roadmap}
          />
        ))}
      </div>
    </div>
  );
}

export default Roadmaps;