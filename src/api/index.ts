import axios from "axios";

export const baseApiUrl = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API_URL || "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    timeout: 10000,
})