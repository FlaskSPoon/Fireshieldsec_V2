
import axios from 'axios';

const axiosInstance = axios.create({
  // EN LOCAL
  //baseURL: process.env.BACKEND_URL || 'http://localhost:8000',

  // EN PRODUCTION
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://back-end-b30o.onrender.com',

  withCredentials: process.env.NODE_ENV === 'production',
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        config.headers.Authorization = `Bearer ${token}`;
      } catch (e) {
        console.error('Error setting auth header:', e);
      }
    }
    return config;
  },
  (error) => {
    console.error('Request Error: ', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const rawMessage = error.response.data?.message;
      const message =
        typeof rawMessage === 'object'
          ? rawMessage?.message
          : rawMessage || 'Erreur inconnue du serveur';

      console.error('Response Error:', message);
    } else if (error.request) {
      console.error('Request Error: No response received', error.request);
    } else {
      console.error('Axios Config Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
