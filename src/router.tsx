import { Navigate, createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage/HomePage";
import { PrivateOutlet } from "./layouts/PrivateOutlet/PrivateOutlet";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SigUpPage } from "./pages/SignUpPage/SignUpPage";
import { Routes } from "./types/routes.types";
import { AccountLayout } from "./layouts/AccountLayout";
import { BookingPage } from "./pages/BookingPage/BookingPage";
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFound />,
    },
    {
        path: Routes.Login,
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
        ],
    },
    {
        path: Routes.SignUp,
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <SigUpPage />,
            },
        ],
    },
    {
        path: Routes.Account,
        element: <PrivateOutlet />,
        children: [
            {
                index: true,
                element: <Navigate to={Routes.Dashboard} />,
            },
            {
                path: Routes.Dashboard,
                element: <AccountLayout />,
                children: [
                    {
                        index: true,
                        element: <DashboardPage />,
                    },
                    {
                        path: Routes.Book,
                        element: <BookingPage />,
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
