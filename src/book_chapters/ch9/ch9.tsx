import { createRoot } from "react-dom/client";
import MyApp from "./MyApp";
import App from "./App";

const root = createRoot(document.getElementById("root")!);

root.render(
    <>
    {/* <MyApp /> */}
    <App />
    </>
)
