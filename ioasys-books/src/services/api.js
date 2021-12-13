import axios from 'axios';

const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1/',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token && !config.noBearer) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    console.log(response, 'responseeeeeee');
    if (response.headers?.authorization) {
      localStorage.setItem('access_token', response.headers.authorization);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
