import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../services/authService";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

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
          <Link to="/knowledgehub">📚 Knowledge Hub</Link>
        </li>

        <li>
          <Link to="/projects">📁 Projects</Link>
        </li>

        <li>
          <Link to="/profile">👤 Profile</Link>
        </li>

        <li>
          <Link to="/settings">⚙️ Settings</Link>
        </li>

        <li
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        >
          🚪 Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;