import { useParams } from 'react-router-dom';

import { REQUEST_URL } from 'constants/url';
import { AnnouncementResponse } from 'type/announcement';
import { parseCreatedAt } from 'utils/time';

import { useGetData } from 'hooks/useGetData';

export const useAnnouncement = () => {
  const { announcementId } = useParams();
  const requestUrl = `${REQUEST_URL.announcements}/${announcementId}`;
  const { data: announcement, isLoading, isError } = useGetData<AnnouncementResponse>(requestUrl);
  const { date, time } = parseCreatedAt(announcement ? announcement.createdAt : '');

  return {
    author: announcement?.author,
    date,
    time,
    title: announcement?.title,
    content: announcement?.content,
    isLoading,
    isError,
  };
};
