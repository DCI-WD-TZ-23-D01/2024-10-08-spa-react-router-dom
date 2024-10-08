import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Home';
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);
