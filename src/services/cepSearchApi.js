import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:8080/api/cep/",
});

export default api;
