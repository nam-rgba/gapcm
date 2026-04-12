import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home/Home";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/components",
    }
])