import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

export default function AnnouncementLayout() {
  return (
    <S.Section>
      <Outlet />
    </S.Section>
  );
}

const S = {
  Section: styled.section`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20%;

    @media (max-width: 1023px) {
      padding: 40px 10%;
    }

    @media (max-width: 424px) {
      padding: 40px 0;
    }

    background-color: ${({ theme }) => theme.colors.background};
  `,
};
