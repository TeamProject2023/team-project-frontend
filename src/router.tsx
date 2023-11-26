import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage/HomePage";
import {PredictorPage} from "./pages/Predictor/PredictorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFound />,
    },
    {
        path: "/predictor",
        element: <PredictorPage />,
        errorElement: <NotFound />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
