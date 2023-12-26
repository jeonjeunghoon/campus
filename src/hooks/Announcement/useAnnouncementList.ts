import { useSuspenseQuery } from '@tanstack/react-query';

import { getAnnouncementList } from 'apis/announcement';

export const useAnnouncementList = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['announcementList'],
    queryFn: getAnnouncementList,
  });

  return {
    announcementList: data.announcements,
    page: data.page,
    size: data.size,
    totalElements: data.totalElements,
    totalPages: data.totalPages,
  };
};
