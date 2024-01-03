import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';

export default function Dashboard() {
  return (
    <ErrorBoundary fallback={<div>관리 페이지 에러</div>}>
      <Suspense fallback={<div>관리 페이지 로딩 중...</div>}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
}
