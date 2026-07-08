import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { registerUser } from "../services/authService";
import { saveUserData } from "../services/userService";

import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    goal: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.goal ||
      !formData.role
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await registerUser(
        formData.email,
        formData.password
      );

      await saveUserData(
        userCredential.user.uid,
        formData.fullName,
        formData.email,
        formData.goal,
        formData.role
      );

      alert("Registration Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleRegister}>
        <h1>Create Account</h1>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <select name="goal" onChange={handleChange} defaultValue="">
          <option value="" disabled>
            Select Goal
          </option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
          <option>Data Analyst</option>
          <option>UI/UX Designer</option>
        </select>

        <select name="role" onChange={handleChange} defaultValue="">
          <option value="" disabled>
            Select Role
          </option>
          <option>Student</option>
          <option>Working Professional</option>
          <option>Career Switcher</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Register"}
        </button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;