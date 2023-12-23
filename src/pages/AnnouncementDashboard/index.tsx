import { Suspense } from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import List from 'components/Announcement/List';
import { ROUTES } from 'constants/routes';

import ErrorBoundary from 'components/ErrorBoundary';

export default function AnnouncementDashboard() {
  return (
    <ErrorBoundary fallback={<div>Announcement Dashboard 에러</div>}>
      <Suspense fallback={<div>Announcement Dashboard 로딩 중...</div>}>
        <List isDashboard={true} />
        <S.AddLink to={ROUTES.announcementEditor.path}>+</S.AddLink>
      </Suspense>
    </ErrorBoundary>
  );
}

const S = {
  AddLink: styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 28px;
    right: 28px;
    width: 60px;
    height: 60px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 5.2rem;
    &:active,
    &:visited {
      color: white;
    }
  `,
};
