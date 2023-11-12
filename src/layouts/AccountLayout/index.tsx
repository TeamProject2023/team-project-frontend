import { FC } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../../components/SideBar";

export const AccountLayout: FC = () => {
    return (
        <div className="layout layout-account">
            <main className="main">
                <div className="container">
                    <div className="main__inner">
                        <SideBar />
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
};
