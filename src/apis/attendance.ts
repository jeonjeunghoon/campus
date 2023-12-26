import { REQUEST_URL } from 'constants/url';

import { http } from './fetch';

const generateOptions = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionStorage.getItem('authAttendance'),
    },
  };
};

export const attendance = async () => {
  return await http.post(`${REQUEST_URL.attendances}`, null, generateOptions());
};
