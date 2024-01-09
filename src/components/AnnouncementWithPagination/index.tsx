import AnnouncementList from 'components/AnnouncementList';

import { useAnnouncementWithPagination } from './useAnnouncementWithPagination';

type Props = {
  isDashboard?: boolean;
};

export default function AnnouncementWithPagination({ isDashboard = false }: Props) {
  const { announcementList, isEmpty } = useAnnouncementWithPagination();

  return (
    <>
      <AnnouncementList
        announcementList={announcementList}
        isEmpty={isEmpty}
        isDashboard={isDashboard}
      />
      {/* <Pagination /> */}
    </>
  );
}
