import { useLocation } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

export const useCurrentRouteInformation = () => {
  const { pathname } = useLocation();

  const isHome = pathname === '/';
  const isAnnouncement = pathname.includes('/announcement') && !pathname.includes('/dashboard');
  const isAttendance = pathname.includes('/attendance') && !pathname.includes('/dashboard');
  const isDashboardAnnouncement = pathname.includes('/dashboard/announcement');

  const route: Record<'path' | 'title', string> = {
    path: '',
    title: '',
  };

  // if (isHome) {
  //   route.path = ROUTES.home.path;
  //   route.title = ROUTES.home.title;
  // }

  // if (isAnnouncement) {
  //   route.path = '/announcement';
  //   route.title = ROUTES.announcementList.title;
  // }

  // if (isDashboardRoute) {
  //   route.path = '/announcement/dashboard';
  //   route.title = ROUTES.announcementDashboard.title;
  // }

  return route;
};
