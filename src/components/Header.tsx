import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../utils/assets.utils";
import { NavBar } from "./NavBar";
import { Routes } from "../types/routes.types";

export const Header: FC = () => {
    const [burger, setBurger] = useState(false);
    const [header, setHeader] = useState(false);

    return (
        <header className={`header ${burger ? "_active" : ""}`}>
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <Link
                            to={Routes.Main}
                            className="link-logo"
                        >
                            <div className="logo-box">
                                <img
                                    src={assets.logos.logo}
                                    className="logo-img"
                                />
                            </div>
                        </Link>

                        <NavBar />
                    </div>

                    <Link
                        to={Routes.Login}
                        className="btn btn-primary login-button"
                    >
                        Login
                    </Link>
                    <div
                        className={`burger ${burger ? "_active" : ""}`}
                        onClick={() => {
                            setBurger(!burger);
                            setHeader(!header);
                        }}
                    />
                </div>
            </div>
        </header>
    );
};
