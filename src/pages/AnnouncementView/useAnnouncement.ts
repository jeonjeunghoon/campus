import { useQuery } from '@tanstack/react-query';

import { getAnnouncement } from 'apis/announcement';
import { parseCreatedAt } from 'utils/time';

export const useAnnouncement = (announcementId: string | number | undefined) => {
  const id = Number(announcementId);
  const {
    data: announcement,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [],
    queryFn: () => getAnnouncement(id),
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
