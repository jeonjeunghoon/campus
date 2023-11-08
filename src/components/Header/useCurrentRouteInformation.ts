import { useLocation } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

export const useCurrentRouteInformation = () => {
  const { pathname } = useLocation();

  const isAnnouncement = !pathname.includes('/dashboard');
  const isDashboardRoute = !isAnnouncement;

  const route: Record<'path' | 'title', string> = {
    path: ROUTES.home.path,
    title: ROUTES.home.title,
  };

  if (isAnnouncement) {
    route.path = '/announcement';
    route.title = ROUTES.announcement.title;
  }

  if (isDashboardRoute) {
    route.path = '/announcement/dashboard';
    route.title = ROUTES.announcementDashboard.title;
  }

  return route;
};
