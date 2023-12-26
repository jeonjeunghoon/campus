import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

import ErrorBoundary from 'components/ErrorBoundary';

export default function Attendance() {
  return (
    <ErrorBoundary>
      <Suspense>
        <S.ContentSection>
          <Outlet />
        </S.ContentSection>
      </Suspense>
    </ErrorBoundary>
  );
}

const S = {
  ContentSection: styled.section`
    width: 100%;
    height: 100%;
    padding: 40px 20%;

    @media (max-width: 1023px) {
      padding: 40px 10%;
    }

    @media (max-width: 424px) {
      padding: 40px 0;
    }
  `,
};
