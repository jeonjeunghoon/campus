import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import AnnouncementContent from 'pages/Announcement/Content';
import AnnouncementMain from 'pages/Announcement/Main';
import AttendanceMain from 'pages/Attendance/Main';
import DashboardAnnouncement from 'pages/Dashboard/Announcement';
import DashboardAnnouncementEditor from 'pages/Dashboard/Announcement/Editor';
import DashboardAnnouncementMain from 'pages/Dashboard/Announcement/Main';

import Announcement from 'pages/Announcement';
import Attendance from 'pages/Attendance';
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';

import App from '../../App';

export default function Router() {
  const homeRoutes = [
    {
      path: ROUTES.home.path,
      element: <Home />,
    },
  ];

  const announcementRoutes = [
    {
      path: ROUTES.announcement.path,
      element: <Announcement />,
      children: [
        {
          path: ROUTES.announcement.main.path,
          element: <AnnouncementMain />,
        },
        {
          path: ROUTES.announcement.content.path,
          element: <AnnouncementContent />,
        },
      ],
    },
  ];

  const attendanceRoutes = [
    {
      path: ROUTES.attendance.path,
      element: <Attendance />,
      children: [
        {
          path: ROUTES.attendance.main.path,
          element: <AttendanceMain />,
        },
      ],
    },
  ];

  const dashboardRoutes = [
    {
      path: ROUTES.dashboard.path,
      element: <Dashboard />,
      children: [
        {
          path: ROUTES.dashboard.announcement.path,
          element: <DashboardAnnouncement />,
          children: [
            {
              path: ROUTES.dashboard.announcement.main.path,
              element: <DashboardAnnouncementMain />,
            },
            {
              path: ROUTES.dashboard.announcement.editor.path,
              element: <DashboardAnnouncementEditor />,
            },
          ],
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    {
      path: ROUTES.home.path,
      element: <App />,
      children: [...homeRoutes, ...attendanceRoutes, ...announcementRoutes, ...dashboardRoutes],
    },
  ]);

  return <RouterProvider router={router} />;
}
