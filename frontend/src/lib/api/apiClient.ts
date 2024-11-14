import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
    // just a dummy token for demonstration purposes
    Authorization: `Bearer 123`,
  },
});

export default apiClient;
