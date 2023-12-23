import { Suspense } from 'react';

import ErrorBoundary from 'components/ErrorBoundary';

import Content from './Content';

export default function Announcement() {
  return (
    <ErrorBoundary fallback={<div>Announcement 에러</div>}>
      <Suspense fallback={<div>Announcement 로딩</div>}>
        <Content />
      </Suspense>
    </ErrorBoundary>
  );
}
