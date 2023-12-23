import { useSuspenseQuery } from '@tanstack/react-query';

import { getAnnouncement } from 'apis/announcement';
import { parseCreatedAt } from 'utils/time';

export const useAnnouncement = (announcementId: string | number | undefined) => {
  const id = Number(announcementId);
  const {
    data: announcement,
    isLoading,
    isError,
  } = useSuspenseQuery({
    queryKey: ['announcement'],
    queryFn: () => getAnnouncement(id),
  });
  const { date, time } = parseCreatedAt(announcement.createdAt);

  return {
    author: announcement.author,
    slackChannel: announcement.slackChannel,
    date,
    time,
    title: announcement.title,
    content: announcement.content,
    isLoading,
    isError,
  };
};
