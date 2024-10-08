import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';
import { Layout } from '../components/Layout';
import { Blog } from '../pages/Blog';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      { path: '/blog', element: <Blog /> }
    ]
  }
]);
