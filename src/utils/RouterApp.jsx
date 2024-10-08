import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { Layout } from "../components/Layout";
import { Contact } from "../pages/Contact";
export const RouterApp = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    },



])