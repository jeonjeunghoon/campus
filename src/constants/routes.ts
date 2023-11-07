export const ROUTES = {
  home: {
    path: '',
    title: '우아한테크코스',
  },
  announcementList: {
    path: 'announcement',
    title: '공지사항',
  },
  announcementView: {
    path: 'announcement/:announcementId',
    title: '공지사항',
    getAbsolutePathWithId: (announcementId: number) => `/announcement/${announcementId}`,
  },
  announcementDashboard: {
    path: 'announcement/dashboard',
    title: '공지사항 관리',
  },
} as const;
