import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await loginUser(email, password);

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">

      <form className="login-card" onSubmit={handleLogin}>

        <h1>Welcome Back 👋</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging In..." : "Login"}
        </button>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </form>

    </div>
  );
}

export default Login;