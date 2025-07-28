// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000", // Laravel backend
  withCredentials: true,            // Important for cookies
});

export default axiosInstance;
