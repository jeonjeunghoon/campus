type attendance = {
  date: Date;
  status: string;
};

export type GetAttendanceListResponse = {
  attendances: attendance[];
};
