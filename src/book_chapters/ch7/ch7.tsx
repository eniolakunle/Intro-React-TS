import { createRoot } from "react-dom/client";
import { Kunle, MyComponent } from "./MyComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";


const root = createRoot(document.getElementById("root")!);

const router = createBrowserRouter([
    {
        path: "/",
        element: <MyComponent />
    },
    {
        path: "kunle",
        element: <Kunle />
    },
]);


root.render(
    <>
    {/* <RouterProvider router={router} /> */}
    <App />
    </>
)