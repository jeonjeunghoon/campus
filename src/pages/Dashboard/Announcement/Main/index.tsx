import { Suspense } from 'react';

import List from 'components/AnnouncementList';

import AddLink from './AddLink';
import Skeleton from './Skeleton';

export default function Main() {
  return (
    <Suspense fallback={<Skeleton />}>
      <List isDashboard />
      <AddLink />
    </Suspense>
  );
}
