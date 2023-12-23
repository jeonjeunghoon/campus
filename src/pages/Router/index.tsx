import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

import Announcement from 'pages/Announcement';
import AnnouncementDashboard from 'pages/AnnouncementDashboard';
import AnnouncementDashboardLayout from 'pages/AnnouncementDashboardLayout';
import AnnouncementEditor from 'pages/AnnouncementEditor';
import AnnouncementLayout from 'pages/AnnouncementLayout';
import AnnouncementList from 'pages/AnnouncementList';
import Home from 'pages/Home';

import App from '../../App';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: ROUTES.home.path,
      element: <App />,
      children: [
        {
          path: ROUTES.home.path,
          element: <Home />,
        },
        {
          path: ROUTES.announcementLayout.path,
          element: <AnnouncementLayout />,
          children: [
            {
              path: ROUTES.announcementList.path,
              element: <AnnouncementList />,
            },
            {
              path: ROUTES.announcement.path,
              element: <Announcement />,
            },
            {
              path: ROUTES.announcementDashboardLayout.path,
              element: <AnnouncementDashboardLayout />,
              children: [
                {
                  path: ROUTES.announcementDashboard.path,
                  element: <AnnouncementDashboard />,
                },
                {
                  path: ROUTES.announcementEditor.path,
                  element: <AnnouncementEditor />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
