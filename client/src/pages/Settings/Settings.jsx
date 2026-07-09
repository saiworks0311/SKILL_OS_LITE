import { useState, useEffect } from "react";
import { getDatabase, ref, get, update } from "firebase/database";
import { auth } from "../../firebase/firebase";

import "./Settings.css";

function Settings() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    role: "",
    goal: "",
    bio: "",
    college: "",
    timezone: "IST (UTC +5:30)",
  });

  useEffect(() => {
    const loadProfile = async () => {
      const user = auth.currentUser;

      if (!user) return;

      const db = getDatabase();

      const snapshot = await get(ref(db, "users/" + user.uid));

      if (snapshot.exists()) {
        const data = snapshot.val();

        setForm({
          fullName: data.fullName || "",
          email: data.email || "",
          role: data.role || "",
          goal: data.goal || "",
          bio: data.bio || "",
          college: data.college || "",
          timezone: data.timezone || "IST (UTC +5:30)",
        });
      }
    };

    loadProfile();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        alert("User not logged in.");
        return;
      }

      const db = getDatabase();

      await update(ref(db, "users/" + user.uid), {
        fullName: form.fullName,
        role: form.role,
        goal: form.goal,
        bio: form.bio,
        college: form.college,
        timezone: form.timezone,
      });

      alert("✅ Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="settings-page">

      <h1>⚙ Settings</h1>

      <p className="subtitle">
        Manage your Skill OS account and preferences.
      </p>

      <input
        className="search-box"
        placeholder="Search settings..."
      />

      <div className="tabs">
        <button className="active">Account</button>
        <button>Notifications</button>
        <button>Appearance</button>
      </div>

      <div className="settings-grid">

        <div className="left">

          <div className="card">

            <h2>Public Profile</h2>

            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />

            <input
              value={form.email}
              disabled
            />

            <input
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Role"
            />

            <input
              name="goal"
              value={form.goal}
              onChange={handleChange}
              placeholder="Career Goal"
            />

            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself"
            />

          </div>

          <div className="card">

            <h2>Private Information</h2>

            <input
              name="college"
              value={form.college}
              onChange={handleChange}
              placeholder="College"
            />

            <input
              name="timezone"
              value={form.timezone}
              onChange={handleChange}
              placeholder="Timezone"
            />

          </div>

        </div>

        <div className="right">

          <div className="card">

            <h2>✨ Smart Suggestions</h2>

            <ul>
              <li>✔ Complete your profile</li>
              <li>✔ Upload Resume</li>
              <li>✔ Finish Frontend Roadmap</li>
              <li>✔ Add your first project</li>
            </ul>

          </div>

          <div className="card">

            <h2>Need Help?</h2>

            <p>
              Visit the documentation or contact support.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://react.dev",
                  "_blank"
                )
              }
            >
              Documentation
            </button>

          </div>

        </div>

      </div>

      <div className="actions">

        <button
          className="cancel"
          onClick={() => window.location.reload()}
        >
          Cancel
        </button>

        <button
          className="save"
          onClick={handleSave}
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default Settings;