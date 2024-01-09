import { Suspense } from 'react';

import Skeleton from 'pages/Announcement/Main/Skeleton';

import List from 'components/AnnouncementList';
import ErrorBoundary from 'components/ErrorBoundary';

export default function Main() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Skeleton />}>
        <List />
      </Suspense>
    </ErrorBoundary>
  );
}
