import styled from '@emotion/styled';

import { Announcement } from 'type/announcement';

import Item from './Item';

type Props = {
  announcementList: Announcement[];
};

export default function List({ announcementList }: Props) {
  return (
    <S.List>
      {announcementList.map((announcement) => {
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
