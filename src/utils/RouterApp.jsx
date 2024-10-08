import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
export const RouterApp = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }


])