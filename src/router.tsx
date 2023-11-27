import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage/HomePage";
import { PredictorPage } from "./pages/Predictor/PredictorPage";
import { MyCabinetPage } from "./pages/MyCabinet/MyCabinetPage";
import { PredictionHistoryPage } from "./pages/MyCabinet/PredictionHistoryPage";
import { Appointments } from "./pages/MyCabinet/Appointments";

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
        path: "/cabinet/history",
        element: <PredictionHistoryPage />,
        errorElement: <NotFound />,
    },
    {
        path: "/cabinet/appointments",
        element: <Appointments />,
        errorElement: <NotFound />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
