import { GetAttendanceListRequest, GetAttendanceListResponse } from 'type/attendance';

import { http } from './fetch';

const ATTENDANCES_URL = 'attendances';

const generateOptions = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionStorage.getItem('authAttendance'),
    },
  };
};

export const attendance = async () => {
  return await http.post(ATTENDANCES_URL, null, generateOptions());
};

export const getAttendanceList = async ({
  from,
  to,
}: GetAttendanceListRequest): Promise<GetAttendanceListResponse> => {
  const response = await http.get(`${ATTENDANCES_URL}?from=${from}&to=${to}`, generateOptions());

  return response.data;
};
