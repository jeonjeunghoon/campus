import { Suspense } from 'react';

import AnnouncementList from 'components/AnnouncementList';

import AddLink from './AddLink';
import Skeleton from './Skeleton';

export default function Main() {
  return (
    <Suspense fallback={<Skeleton />}>
      <AnnouncementList isDashboard />
      <AddLink />
    </Suspense>
  );
}
