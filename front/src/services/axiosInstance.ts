import axios, { AxiosInstance } from "axios";

const BACK_URI = "http://localhost:8000";
const BACK_API_URI = `${BACK_URI}/api`;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BACK_API_URI,
});

export default axiosInstance;
