import { REQUEST_URL } from 'constants/url';
import { AnnouncementListResponse } from 'type/announcement';

import { useGetData } from 'hooks/useGetData';

export const useAnnouncementList = (usePagination = true) => {
  const requestUrl = usePagination
    ? `${REQUEST_URL.announcements}/pagination`
    : `${REQUEST_URL.announcements}/cursor`;

  const {
    data: announcementList,
    isLoading,
    isError,
  } = useGetData<AnnouncementListResponse>(requestUrl);

  return {
    announcementList: announcementList?.announcements,
    hasNext: announcementList?.hasNext,
    lastCursorId: announcementList?.lastCursorId,
    isLoading,
    isError,
  };
};