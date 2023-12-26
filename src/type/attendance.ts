type attendance = {
  date: Date;
  status: string;
};

export type AttendanceListResponse = {
  attendances: attendance[];
};
