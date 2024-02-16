import axios, { AxiosInstance } from 'axios';

const host = window.location.hostname === 'localhost' ? process.env.BASE_URL : 'api';

export const http: AxiosInstance = axios.create({
  baseURL: host,
  headers: {
    'Content-Type': 'application/json',
  },
});
