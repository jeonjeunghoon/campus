import { Suspense } from 'react';

import Skeleton from 'pages/Announcement/Main/Skeleton';

import AnnouncementList from 'components/AnnouncementList';
import ErrorBoundary from 'components/ErrorBoundary';

// 데스크탑일 경우 페이지네이션으로 렌더링
// 모바일일 경우 무한스크롤로 렌더링

export default function Main() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Skeleton />}>
        <AnnouncementList />
      </Suspense>
    </ErrorBoundary>
  );
}
