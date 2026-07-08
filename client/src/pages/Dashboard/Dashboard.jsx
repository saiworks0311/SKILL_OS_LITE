import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import WelcomeCard from "./components/WelcomeCard";
import ProgressCards from "./components/ProgressCards";
import TaskCard from "./components/TaskCard";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />

        <WelcomeCard />

        <ProgressCards />

        <TaskCard />
      </div>
    </div>
  );
}

export default Dashboard;