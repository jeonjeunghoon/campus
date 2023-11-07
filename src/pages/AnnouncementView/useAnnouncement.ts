import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { getAnnouncement } from 'apis/announcement';
import { parseCreatedAt } from 'utils/time';

export const useAnnouncement = () => {
  const { announcementId } = useParams();
  const {
    data: announcement,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [],
    queryFn: () => getAnnouncement(Number(announcementId)),
  });
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
