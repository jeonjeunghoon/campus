import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  // headers: {'X-Custom-Header': 'foobar'}
});

export const https = {
  get: async (url: string) => {
    const response = await instance.get(url);
    const data = response.data;

    return data;
  },

  post: <RequestData>(url: string, data: RequestData) => instance.post(url, data),

  patch: <RequestData>(url: string, data: RequestData) => instance.patch(url, data),

  put: <RequestData>(url: string, data: RequestData) => instance.put(url, data),

  delete: (url: string) => instance.delete(url),
};
