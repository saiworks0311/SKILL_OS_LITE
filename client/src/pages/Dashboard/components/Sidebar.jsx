import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>Skill OS</h2>

      <ul>

        <li>
          <Link to="/dashboard">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/roadmaps">🗺️ Roadmaps</Link>
        </li>

        <li>
          <Link to="/practicehub">💻 Practice Hub</Link>
        </li>

        <li>
          <Link to="/projects">📁 Projects</Link>
        </li>

        <li>
          <Link to="/knowledgehub">📚 Knowledge Hub</Link>
        </li>

        <li>
          <Link to="/profile">👤 Profile</Link>
        </li>

        <li>
          <Link to="/settings">⚙️ Settings</Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;