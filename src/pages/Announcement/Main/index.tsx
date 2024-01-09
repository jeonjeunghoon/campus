import { Suspense } from 'react';

import { IS_PAGINATION } from 'constants/viewport';
import Skeleton from 'pages/Announcement/Main/Skeleton';

import AnnouncementWithPagination from 'components/AnnouncementWithPagination';
import ErrorBoundary from 'components/ErrorBoundary';

export default function Main() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Skeleton />}>
        {IS_PAGINATION ? <AnnouncementWithPagination /> : <></>}
      </Suspense>
    </ErrorBoundary>
  );
}
