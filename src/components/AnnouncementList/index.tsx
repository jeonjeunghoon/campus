import { useLocation } from 'react-router-dom';

import styled from '@emotion/styled';

import { ROUTES } from 'constants/routes';
import { useAnnouncementList } from 'hooks/Announcement/useAnnouncementList';

import Empty from './Empty';
import Item from './Item';

export default function List() {
  const { announcementList, totalElements } = useAnnouncementList();
  const { pathname } = useLocation();

  if (!totalElements) return <Empty />;

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
  List: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  `,
};
