import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import styled from '@emotion/styled';

import ErrorBoundary from 'components/ErrorBoundary';
import Header from 'components/Header';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<div>전역 에러 바운더리</div>}>
        <Suspense fallback={<div>전역 서스펜스</div>}>
          <S.Container>
            <Header />
            <Outlet />
          </S.Container>
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
};
