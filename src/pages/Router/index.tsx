import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

import AnnouncementDashboard from 'pages/AnnouncementDashboard';
import AnnouncementEditor from 'pages/AnnouncementEditor';
import AnnouncementList from 'pages/AnnouncementList';
import AnnouncementView from 'pages/AnnouncementView';

import App from '../../App';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: ROUTES.home.path,
      element: <App />,
      children: [
        {
          path: ROUTES.announcementList.path,
          element: <AnnouncementList />,
        },
        {
          path: ROUTES.announcementView.path,
          element: <AnnouncementView />,
        },
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
  ]);

  return <RouterProvider router={router} />;
}
