import { FC } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Routes } from "../types/routes.types";

export const Header: FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link
                        to={Routes.Main}
                        className="link-logo"
                    >
                        <div className="logo-box" />
                    </Link>
                    <NavBar />
                </div>
            </div>
        </header>
    );
};
