import { FC } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = () => {
    return (
        <div className="page-wrapper layout layout-auth">
            <header className="header">Header</header>
            <main className="main">
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
};
