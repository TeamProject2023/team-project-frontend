import { FC } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = () => {
    return (
        <div className="page-wrapper layout layout-auth">
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
};
