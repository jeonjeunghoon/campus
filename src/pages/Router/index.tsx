import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Announcement from 'pages/Announcement';

import App from '../../App';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'announcement',
          element: <Announcement />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
