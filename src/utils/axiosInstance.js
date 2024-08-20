import axios from 'axios';
import { getAccessToken, clearToken } from './auth'; 

const http = axios.create({
  baseURL: "https://legacy-backend-zmmd.onrender.com",
  headers: {
    'Content-Type': 'application/json',
  },
});


// Request interceptor to add the access token to headers
http.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 || 403) {
      clearToken(); // Clear the token from storage
      if (typeof window !== 'undefined') {
        window.location.href = '/'; // Redirect to login page
      }
    }
    return Promise.reject(error);
  }
);

export default http;