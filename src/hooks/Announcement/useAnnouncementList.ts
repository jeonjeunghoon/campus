import { useQuery } from '@tanstack/react-query';

import { getAnnouncementList } from 'apis/announcement';
import { REQUEST_URL } from 'constants/url';

export const useAnnouncementList = () => {
  const { data } = useQuery({
    queryKey: ['announcementList'],
    queryFn: () => getAnnouncementList(`${REQUEST_URL.announcements}/offset`),
  });

  return {
    announcementList: data?.announcements,
    page: data?.page,
    size: data?.size,
    totalElements: data?.totalElements,
    totalPages: data?.totalPages,
  };
};
