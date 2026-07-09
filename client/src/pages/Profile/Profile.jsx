import { useEffect, useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { auth } from "../../firebase/firebase";

import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const db = getDatabase();
      const snapshot = await get(ref(db, "users/" + user.uid));

      if (snapshot.exists()) {
        setProfile(snapshot.val());
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="profile-page">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="profile-page">

      {/* HEADER */}

      <div className="profile-card">

        <div className="avatar">
          {profile.fullName.charAt(0).toUpperCase()}
        </div>

        <h1>{profile.fullName}</h1>

        <p>{profile.email}</p>

        <span className="profile-tag">
          {profile.goal}
        </span>

        <div className="profile-buttons">
          <button>Edit Profile</button>

          <button
            onClick={() =>
              window.open("/resume.pdf", "_blank")
            }
          >
            Download Resume
          </button>
        </div>

      </div>

      {/* STATS */}

      <div className="stats-grid">

        <div className="stat-card">
          <h3>📚</h3>
          <h2>4</h2>
          <p>Roadmaps</p>
        </div>

        <div className="stat-card">
          <h3>🚀</h3>
          <h2>6</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h3>🔥</h3>
          <h2>1280</h2>
          <p>XP</p>
        </div>

        <div className="stat-card">
          <h3>💻</h3>
          <h2>120</h2>
          <p>Practice</p>
        </div>

      </div>

      {/* PROGRESS */}

      <div className="section-card">

        <h2>Learning Progress</h2>

        <div className="skill">

          <span>Frontend</span>

          <progress value="80" max="100"></progress>

        </div>

        <div className="skill">

          <span>Backend</span>

          <progress value="40" max="100"></progress>

        </div>

        <div className="skill">

          <span>UI / UX</span>

          <progress value="65" max="100"></progress>

        </div>

        <div className="skill">

          <span>Data</span>

          <progress value="30" max="100"></progress>

        </div>

      </div>

      {/* SKILLS */}

      <div className="section-card">

        <h2>Skills</h2>

        <div className="skills">

          <span>React</span>
          <span>Firebase</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>SQL</span>
          <span>Git</span>

        </div>

      </div>

      {/* ACHIEVEMENTS */}

      <div className="section-card">

        <h2>Achievements</h2>

        <div className="achievement-grid">

          <div className="achievement">
            🏅
            <p>Roadmap Explorer</p>
          </div>

          <div className="achievement">
            🔥
            <p>7 Day Streak</p>
          </div>

          <div className="achievement">
            🚀
            <p>First Project</p>
          </div>

          <div className="achievement">
            📚
            <p>Knowledge Master</p>
          </div>

        </div>

      </div>

      {/* CERTIFICATES */}

      <div className="section-card">

        <h2>Certificates</h2>

        <div className="certificate-grid">

          <div className="certificate">
            AWS Cloud Practitioner
          </div>

          <div className="certificate">
            React Basics
          </div>

          <div className="certificate">
            Git & GitHub
          </div>

          <div className="certificate">
            Python Essentials
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;