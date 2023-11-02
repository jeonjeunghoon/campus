import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

import Header from 'pages/layout/Header';

export default function Layout() {
  return (
    <S.Container>
      <Header />
      <S.BackgroundSection>
        <S.Block />
        <S.ContentSection>
          <Outlet />
        </S.ContentSection>
        <S.Block />
      </S.BackgroundSection>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,

  BackgroundSection: styled.section`
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
