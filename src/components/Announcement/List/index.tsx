import styled from '@emotion/styled';

import { useAnnouncementList } from 'hooks/Announcement/useAnnouncementList';

import Item from './Item';

type Props = {
  isDashboard?: boolean;
};

export default function List({ isDashboard = false }: Props) {
  const { announcementList } = useAnnouncementList();

  return (
    <S.List>
      {announcementList?.map((announcement) => {
        return <Item key={announcement.id} isDashboard={isDashboard} {...announcement} />;
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
