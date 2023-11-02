import styled from '@emotion/styled';

import { useAnnouncementList } from 'hooks/Announcement/useAnnouncementList';

import Item from './Item';

export default function List() {
  const { announcementList } = useAnnouncementList();

  return (
    <S.List>
      {announcementList?.map((announcement) => {
        return <Item key={announcement.id} {...announcement} />;
      })}
    </S.List>
  );
}

const S = {
  List: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
};
