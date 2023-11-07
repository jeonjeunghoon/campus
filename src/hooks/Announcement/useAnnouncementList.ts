import { useQuery } from '@tanstack/react-query';

import { getAnnouncementList } from 'apis/announcement';
import { REQUEST_URL } from 'constants/url';

export const useAnnouncementList = (usePagination = true) => {
  const url = usePagination
    ? `${REQUEST_URL.announcements}/pagination`
    : `${REQUEST_URL.announcements}/cursor`;

  const { data } = useQuery({
    queryKey: ['announcementList'],
    queryFn: () => getAnnouncementList(url),
  });

  return {
    announcementList: data?.announcements,
    hasNext: data?.hasNext,
    lastCursorId: data?.lastCursorId,
  };
};
