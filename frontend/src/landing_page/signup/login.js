import React, { useState } from "react";
import axios from "axios";
import "./signup.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/login", form);
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
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
          <a href="http://localhost:3000/dashboard" class="btn">Login</a>
        </form>
        {message && <p className="msg">{message}</p>}
        <p className="link">
          New user? <a href="/Register">Create account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
