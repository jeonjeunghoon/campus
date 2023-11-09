import { Outlet } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import styled from '@emotion/styled';

import Header from 'components/Header';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <S.Container>
        <Header />
        <Outlet />
      </S.Container>
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
