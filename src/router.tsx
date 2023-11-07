import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFound />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
