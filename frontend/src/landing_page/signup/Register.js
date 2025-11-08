import React, { useState } from "react";
import axios from "axios";
import "./signup.css";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // ✅ Correct URL (capital R must match backend)
      const res = await axios.post("http://localhost:3002/register", form, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.success) {
        setMessage(res.data.message);
        setForm({ username: "", email: "", password: "" });
      } else {
        setMessage(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setMessage(error.response.data.message || "Server error occurred");
      } else {
        setMessage("Cannot connect to backend server.");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
         <a href="/login" class="btn">Sign Up</a>

        </form>

        {message && <p className="msg">{message}</p>}

        <p className="link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
