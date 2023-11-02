import { useLocation } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

export const useCurrentRouteInformation = () => {
  const { pathname } = useLocation();
  const currentRoute = Object.values(ROUTES).find((route) => {
    const pathnameList = pathname.split('/');

    return route.path === pathnameList[1];
  });

  const path = currentRoute ? currentRoute.path : ROUTES.home.path;
  const title = currentRoute ? currentRoute.title : ROUTES.home.title;

  return { path, title };
};
