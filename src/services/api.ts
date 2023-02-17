import axios from "axios";

export const oauth = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/oauth`,
});
