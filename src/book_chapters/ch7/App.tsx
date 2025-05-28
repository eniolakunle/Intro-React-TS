import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

let routeOne = null;
let routeTwo = null;

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <h1>Nesting Routes</h1>
            },
            // routeOne,
            // routeTwo,
        ]
    }
])

export const App = () => <RouterProvider router={router} />;
