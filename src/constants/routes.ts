export const ROUTES = {
  home: { path: '', title: '우아한테크코스' },
  announcement: {
    path: 'announcement',
    title: '공지사항',
  },
  announcementView: {
    path: 'announcement/:announcementId',
    title: '공지사항',
    getPathWithId: (announcementId: number) => `${announcementId}`,
  },
} as const;
