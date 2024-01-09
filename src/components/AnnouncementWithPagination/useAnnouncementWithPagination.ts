import { useSuspenseQuery } from '@tanstack/react-query';

import { getAnnouncementList } from 'apis/announcement';

export const useAnnouncementWithPagination = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['announcementList'],
    queryFn: getAnnouncementList,
  });

  return {
    announcementList: data.announcements,
    page: data.page,
    size: data.size,
    isEmpty: data.totalElements <= 0,
    totalPages: data.totalPages,
  };
};
