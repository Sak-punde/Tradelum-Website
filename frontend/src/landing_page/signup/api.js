import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3200", // backend server
});

// For protected routes (adds token automatically)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
