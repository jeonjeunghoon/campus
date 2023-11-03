import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

import Announcement from 'pages/Announcement';
import AnnouncementDashboard from 'pages/AnnouncementDashboard';
import AnnouncementView from 'pages/AnnouncementView';

import App from '../../App';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: ROUTES.home.path,
      element: <App />,
      children: [
        {
          path: ROUTES.announcement.path,
          element: <Announcement />,
        },
        {
          path: ROUTES.announcementView.path,
          element: <AnnouncementView />,
        },
        {
          path: ROUTES.announcementDashboard.path,
          element: <AnnouncementDashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
