export const ROUTES = {
  home: {
    path: '',
    title: '우아한테크코스',
  },
  announcementLayout: {
    path: 'announcement',
    title: '공지사항',
  },
  announcement: {
    path: '',
    title: '공지사항',
  },
  announcementView: {
    path: ':announcementId',
    title: '공지사항',
    getAbsolutePathWithId: (announcementId: number) => `/announcement/${announcementId}`,
  },
  announcementDashboardLayout: {
    path: 'dashboard',
    title: '공지사항 관리',
  },
  announcementDashboard: {
    path: '',
    title: '공지사항 관리',
  },
  announcementEditor: {
    path: 'editor',
    title: '공지사항 관리',
  },
} as const;
