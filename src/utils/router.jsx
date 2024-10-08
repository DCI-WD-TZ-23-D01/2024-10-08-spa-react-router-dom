import {createBrowserRouter} from "react-router-dom"
import { Home } from "../pages/Home"
import {  Dashboard } from "../pages/Dashboard"
export const routers=createBrowserRouter([
    {
        element:<Home/>,
        path:'',
    },
    {
        element:<Dashboard></Dashboard>,
        path:'dashboard'
    }
])