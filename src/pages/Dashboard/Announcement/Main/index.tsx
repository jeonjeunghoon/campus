import { Suspense } from 'react';

import { IS_PAGINATION } from 'constants/viewport';

import AnnouncementWithPagination from 'components/AnnouncementWithPagination';

import AddLink from './AddLink';
import Skeleton from './Skeleton';

export default function Main() {
  return (
    <Suspense fallback={<Skeleton />}>
      {IS_PAGINATION ? <AnnouncementWithPagination /> : <></>}
      <AddLink />
    </Suspense>
  );
}
