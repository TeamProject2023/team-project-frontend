import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage/HomePage";
import { PrivateOutlet } from "./layouts/PrivateOutlet/PrivateOutlet";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { Routes } from "./types/routes.types";
import { AccountLayout } from "./layouts/AccountLayout";
import { BookingPage } from "./pages/BookingPage/BookingPage";
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { PredictorPage } from "./pages/Predictor/PredictorPage";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";

export const router = createBrowserRouter([
    {
        path: Routes.Main,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: Routes.Login,
                        element: <LoginPage />,
                    },
                    {
                        path: Routes.SignUp,
                        element: <SignUpPage />,
                    },
                ],
            },
            {
                element: <PrivateOutlet />,
                children: [
                    {
                        element: <AccountLayout />,
                        children: [
                            {
                                path: Routes.Dashboard,
                                element: <DashboardPage />,
                            },
                            {
                                path: Routes.Book,
                                element: <BookingPage />,
                            },
                            {
                                path: Routes.History,
                                element: <HistoryPage />,
                            },
                            {
                                path: Routes.AITool,
                                element: <></>,
                            },
                        ],
                    },
                ],
            },
        ],
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
