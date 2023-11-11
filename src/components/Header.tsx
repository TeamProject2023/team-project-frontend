import { FC } from "react";

import { Link } from "react-router-dom";

import { assets } from "../utils/assets.utils";

import { NavBar } from "./NavBar";

import { Routes } from "../types/routes.types";

import { Button } from "./ui/Buttons/Button";

export const Header: FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link to={Routes.Main} className="link-logo">
                        <div className="logo-box">
                            <img src={assets.logos.logo} width="50px" className="logo-img" />
                        </div>
                    </Link>

                    <NavBar />

                    <Button text="LogIn" classes="login-button" handleClick={() => {}} />
                </div>
            </div>
        </header>
    );
};