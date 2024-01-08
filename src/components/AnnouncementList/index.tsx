import { useLocation } from 'react-router-dom';

import styled from '@emotion/styled';

import { ROUTES } from 'constants/routes';
import { useAnnouncementList } from 'hooks/Announcement/useAnnouncementList';

import Item from './Item';

export default function List() {
  const { announcementList, totalElements } = useAnnouncementList();
  const { pathname } = useLocation();

  if (!totalElements) {
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
        return (
          <Item
            key={announcement.id}
            isDashboard={pathname.includes(ROUTES.dashboard.path)}
            {...announcement}
          />
        );
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
