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
          <S.Layout>
            <Header />
            <S.Content>
              <Outlet />
            </S.Content>
          </S.Layout>
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,

  Content: styled.section`
    display: flex;
    flex: 1;
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
