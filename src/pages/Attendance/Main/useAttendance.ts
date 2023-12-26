import { useMutation, useQueryClient } from '@tanstack/react-query';

import { attendance as attendanceAPI } from 'apis/attendance';

export const useAttendance = () => {
  const queryClient = useQueryClient();

  const { mutate: attendance } = useMutation({
    mutationFn: attendanceAPI,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['attendance'] }),
  });

  return attendance;
};
