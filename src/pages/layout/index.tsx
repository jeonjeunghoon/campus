import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

import Header from 'components/Header';

export default function Layout() {
  return (
    <S.Container>
      <Header />
      <S.BackgroundSection>
        <S.ContentSection>
          <Outlet />
        </S.ContentSection>
      </S.BackgroundSection>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
  `,

  BackgroundSection: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 80px);
    padding: 40px 0;

    background-color: #f5f5f5;
  `,

  ContentSection: styled.section`
    width: 1000px;
    height: 100%;

    background-color: #ffffff;
  `,
};
