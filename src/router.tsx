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
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { TeamPage } from "./pages/TeamPage/TeamPage";
import { BaseLayout } from "./layouts/BaseLayout";

export const router = createBrowserRouter([
    {
        path: Routes.Main,
        element: <BaseLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: Routes.Team,
                element: <TeamPage />,
                errorElement: <NotFound />,
            },
            {
                path: Routes.Faq,
                element: <TeamPage />,
                errorElement: <NotFound />,
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
        path: "*",
        element: <NotFound />,
    },
]);
