import { REQUEST_URL } from 'constants/apis/url';
import { AnnouncementListResponse } from 'type/announcement';

import { useGetData } from 'hooks/useGetData';

export const useAnnouncementList = (usePagination = true) => {
  const requestUrl = usePagination
    ? REQUEST_URL.ANNOUNCEMENT_LIST_WITH_PAGINATION
    : REQUEST_URL.ANNOUNCEMENT_LIST_WITH_CURSOR;

  const {
    data: announcementList,
    isLoading,
    isError,
  } = useGetData<AnnouncementListResponse>(requestUrl);

  return {
    announcementList: announcementList?.announcements,
    page: announcementList?.page,
    size: announcementList?.size,
    totalElements: announcementList?.totalElements,
    totalPages: announcementList?.totalPages,
    isLoading,
    isError,
  };
};
