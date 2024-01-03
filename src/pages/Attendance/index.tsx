import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';

export default function Attendance() {
  return (
    <ErrorBoundary>
      <Suspense>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
}
