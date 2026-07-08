import PracticeCard from "./components/PracticeCard";
import "./PracticeHub.css";

function PracticeHub() {
  const platforms = [
    {
      title: "LeetCode",
      description: "Coding interview preparation with 3000+ problems.",
      level: "Easy • Medium • Hard",
      link: "https://leetcode.com/"
    },
    {
      title: "HackerRank",
      description: "Programming, SQL and Python challenges.",
      level: "Beginner • Intermediate",
      link: "https://www.hackerrank.com/"
    },
    {
      title: "Frontend Mentor",
      description: "Real frontend UI challenges.",
      level: "Frontend",
      link: "https://www.frontendmentor.io/"
    },
    {
      title: "CodeWars",
      description: "Practice coding through fun challenges.",
      level: "All Levels",
      link: "https://www.codewars.com/"
    }
  ];

  return (
    <div className="practice-page">
      <h1>💻 Practice Hub</h1>

      <p className="practice-subtitle">
        Practice your skills using the best free coding platforms.
      </p>

      <div className="practice-grid">
        {platforms.map((item, index) => (
          <PracticeCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PracticeHub;