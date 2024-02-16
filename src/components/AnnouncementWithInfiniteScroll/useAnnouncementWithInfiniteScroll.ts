import { useMemo } from 'react';

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getAnnouncementListWithInfiniteScroll } from 'apis/announcement';
import { SIZE_PER_SCROLL } from 'constants/announcement';

import { useIntersect } from 'hooks/useIntersect';

export const useAnnouncementWithInfiniteScroll = () => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['announcementList'],
    queryFn: ({ pageParam }) => {
      return getAnnouncementListWithInfiniteScroll({ id: pageParam ?? 0, size: SIZE_PER_SCROLL });
    },
    initialPageParam: null,
    getNextPageParam: ({ hasNext, lastCursorId }) => (hasNext ? lastCursorId : undefined),
  });

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) fetchNextPage();
  });

  const announcementList = useMemo(
    () => data.pages.flatMap(({ announcements }) => announcements),
    [data],
  );

  return {
    announcementList,
    isEmpty: !announcementList.length,
    ref,
  };
};
