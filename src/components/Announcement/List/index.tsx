import styled from '@emotion/styled';

import { useAnnouncementList } from 'hooks/Announcement/useAnnouncementList';

import Item from './Item';

type Props = {
  isDashboard?: boolean;
};

export default function List({ isDashboard = false }: Props) {
  const { announcementList } = useAnnouncementList();

  if (!announcementList.length) {
    return (
      <S.Container>
        <S.Title>🥲</S.Title>
        <S.Title>공지사항이 없어요</S.Title>
      </S.Container>
    );
  }

  return (
    <S.List>
      {announcementList.map((announcement) => {
        return <Item key={announcement.id} isDashboard={isDashboard} {...announcement} />;
      })}
    </S.List>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  Title: styled.h1`
    font-size: 5.2rem;
  `,

  List: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  `,
};
