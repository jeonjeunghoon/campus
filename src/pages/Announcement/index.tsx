import styled from '@emotion/styled';

import { useAnnouncementList } from 'pages/Announcement/useAnnouncementList';

import List from './List';

export default function Announcement() {
  const { announcementList, isLoading } = useAnnouncementList();

  if (isLoading || !announcementList) return null;

  return (
    <S.Article>
      <List announcementList={announcementList} />
    </S.Article>
  );
}

const S = {
  Article: styled.article`
    height: 100%;
  `,
};
