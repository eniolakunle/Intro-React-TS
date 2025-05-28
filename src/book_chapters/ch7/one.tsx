import { Outlet, RouteObject } from "react-router-dom";

const routes: RouteObject = {
    path: "/one",
    element: <Outlet />,
    children: [
        {
            index: true,
            // element: <Redirect />,
        }
    ]
}