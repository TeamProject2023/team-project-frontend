import { FC } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../../components/SideBar";
import { AccountHeader } from "./AccountHeader/AccountHeader";

export const AccountLayout: FC = () => {
    return (
        <div className="layout layout-account">
            <main className="main">
                <div className="container">
                    <div className="main__inner">
                        <SideBar />
                        <div className="page">
                            <div className="page__inner">
                                <AccountHeader />
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
