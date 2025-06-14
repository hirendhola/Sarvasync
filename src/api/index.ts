import axios from 'axios';

const API_URL = 'http://localhost:3000';
let accessToken: string | null = null;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response, // If response is successful, just return it.
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark this request so we don't retry forever.
      
      try {
        console.log('Access token expired. Attempting to refresh...');
        const { data } = await api.post('/auth/refresh');
        
        accessToken = data.accessToken;
        console.log('✅ Token refreshed successfully.');
        
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        
        return api(originalRequest);

      } catch (refreshError) {
        console.error('Unable to refresh token. User is logged out.');
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export default api;