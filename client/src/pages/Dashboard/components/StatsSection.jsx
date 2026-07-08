import StreakCard from "./StreakCard";
import XPCard from "./XPCard";

function StatsSection() {
  return (
    <div className="stats-grid">
      <StreakCard />
      <XPCard />
    </div>
  );
}

export default StatsSection;