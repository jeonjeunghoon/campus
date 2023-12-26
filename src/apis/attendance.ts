import { REQUEST_URL } from 'constants/url';
import { AttendanceListResponse } from 'type/attendance';

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

export const getAttendanceList = async (
  from: string,
  to: string,
): Promise<AttendanceListResponse> => {
  const response = await http.get(
    `${REQUEST_URL.attendances}?from=${from}&to=${to}`,
    generateOptions(),
  );

  return response.data;
};
