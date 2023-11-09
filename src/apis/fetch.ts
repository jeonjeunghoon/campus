import axios, { AxiosInstance } from 'axios';

import { BASE_URL } from 'constants/url';

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: sessionStorage.getItem('authorization'),
  },
});

export const https = {
  get: async (url: string) => {
    const response = await instance.get(url);
    const data = response.data;

    return data;
  },

  post: async <RequestData>(url: string, data: RequestData) => {
    const response = await instance.post(url, data);

    return response;
  },

  patch: async <RequestData>(url: string, data: RequestData) => {
    const response = await instance.patch(url, data);

    return response;
  },

  put: async <RequestData>(url: string, data: RequestData) => {
    const response = await instance.put(url, data);

    return response;
  },

  delete: async (url: string) => {
    const response = await instance.delete(url);

    return response;
  },
};
