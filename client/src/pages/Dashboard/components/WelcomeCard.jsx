import { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebase";
import { getDatabase, ref, get } from "firebase/database";

function WelcomeCard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      const user = auth.currentUser;

      if (!user) return;

      const db = getDatabase();

      const snapshot = await get(ref(db, "users/" + user.uid));

      if (snapshot.exists()) {
        setProfile(snapshot.val());
      }
    };

    loadProfile();
  }, []);

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <div className="card">
      <h2 className="welcome-title">
        {greeting}
        {profile ? `, ${profile.fullName}` : ""} 👋
      </h2>

      <br />

      <p>
        <strong>Goal:</strong> {profile?.goal}
      </p>

      <p>
        <strong>Role:</strong> {profile?.role}
      </p>

      <br />

      <p>Continue learning where you left off.</p>
    </div>
  );
}

export default WelcomeCard;