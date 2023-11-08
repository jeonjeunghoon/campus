import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

export default function AnnouncementLayout() {
  return (
    <S.Section>
      <S.Block />
      <S.ContentSection>
        <Outlet />
      </S.ContentSection>
      <S.Block />
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

    background-color: ${({ theme }) => theme.colors.background};
  `,

  ContentSection: styled.section`
    flex-grow: 1;
    width: 1000px;
  `,

  Block: styled.div`
    flex-shrink: 0;
    min-height: 40px;
  `,
};
