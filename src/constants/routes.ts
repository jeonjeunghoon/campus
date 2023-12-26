export const ROUTES = {
  previous: {
    path: '..',
    title: '',
  },
  home: {
    path: '',
    title: '우아한테크코스',
  },
  attendance: {
    path: 'attendance',
    title: '출석',
    main: {
      path: '',
    },
  },
  announcementLayout: {
    path: 'announcement',
    title: '공지사항',
  },
  announcementList: {
    path: '',
    title: '공지사항',
  },
  announcement: {
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
