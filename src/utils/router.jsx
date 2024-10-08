import { createBrowserRouter } from "react-router-dom";
import {Home} from "../pages/Home.jsx/index.js";
import { Dashboard } from "../pages/Dashboard.jsx";
 
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/',
        element: <Dashboard />,
      },
]);