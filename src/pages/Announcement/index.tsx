import { useAnnouncementList } from 'pages/Announcement/useAnnouncementList';

import List from './List';

export default function Announcement() {
  const { announcementList, isLoading, isError } = useAnnouncementList();

  if (isLoading) return <div>로딩 중...</div>;

  if (isError || !announcementList) return <div>에러</div>;

  return <List announcementList={announcementList} />;
}
