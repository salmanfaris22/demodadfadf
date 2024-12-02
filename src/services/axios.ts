import axios from 'axios';

const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

// Define a type for refreshData to avoid "unknown" type error
interface RefreshData {
  token: string;
}

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // Safely access config.headers
      if (config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      } else {
        config.headers = { 'Authorization': `Bearer ${token}` };
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data }: { data: RefreshData } = await axiosInstance.get('/api/refresh');
        
        // Now that we know refreshData has the right type, we can safely access it
        localStorage.setItem('token', data.token);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
