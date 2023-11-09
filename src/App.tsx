import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query';

import styled from '@emotion/styled';

import Error from 'pages/Error';

import ErrorBoundary from 'components/ErrorBoundary';
import Header from 'components/Header';

const queryClient = new QueryClient();

export default function App() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>서스펜스</div>}>
        <ErrorBoundary onReset={reset} fallback={Error}>
          <S.Container>
            <Header />
            <Outlet />
          </S.Container>
        </ErrorBoundary>
      </Suspense>
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
