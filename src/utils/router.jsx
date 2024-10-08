import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Home';
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/Dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);
