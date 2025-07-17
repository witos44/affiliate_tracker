

// src/api/axios.js
import axios from 'axios';
import { getAccessToken, getRefreshToken, setTokens, clearTokens } from '../utils/auth';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

// Add access token to headers
axiosInstance.interceptors.request.use(config => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Handle token expiration and refresh
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = getRefreshToken();
        const res = await axios.post('http://127.0.0.1:8000/api/auth/token/refresh/', {
          refresh,
        });

        const { access } = res.data;
        setTokens(access, refresh);
        originalRequest.headers.Authorization = `Bearer ${access}`;

        return axiosInstance(originalRequest); // Retry original request
      } catch (err) {
        clearTokens();
        window.location.href = '/login'; // Redirect to login if refresh fails
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
