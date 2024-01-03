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
  announcement: {
    path: 'announcement',
    title: '공지사항',
    main: {
      path: '',
      title: '공지사항',
    },
    content: {
      path: ':announcementId',
      title: '공지사항',
      getAbsolutePathWithId: (announcementId: number) => `/announcement/${announcementId}`,
    },
  },
  dashboard: {
    path: 'dashboard',
    title: '관리 페이지',
    announcement: {
      path: 'announcement',
      main: {
        path: '',
        title: '공지사항 관리 페이지',
      },
      editor: {
        path: 'editor',
        title: '공지사항 수정 페이지',
      },
    },
  },
} as const;
