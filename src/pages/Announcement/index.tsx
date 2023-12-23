import { Suspense } from 'react';

import List from 'components/Announcement/List';

import ErrorBoundary from 'components/ErrorBoundary';

export default function Announcement() {
  return (
    <ErrorBoundary fallback={<div>Announcement List 에러</div>}>
      <Suspense fallback={<div>Announcement List 로딩 중...</div>}>
        <List />
      </Suspense>
    </ErrorBoundary>
  );
}
