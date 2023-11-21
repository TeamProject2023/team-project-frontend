import {FC, useState} from "react";

import { Link } from "react-router-dom";

import { assets } from "../utils/assets.utils";

import { NavBar } from "./NavBar";

import { Routes } from "../types/routes.types";

import { Button } from "./ui/Buttons/Button";


export const Header: FC = () => {
    const [kartyz, setKartyz] = useState(false);
    const [mcwin, setMcwin] = useState(false);

    return (
        <header className={`header ${kartyz ? "_active" : ""}`}>
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <Link to={Routes.Main} className="link-logo">
                            <div className="logo-box">
                                <img src={assets.logos.logo} className="logo-img" />
                            </div>
                        </Link>

                        <NavBar />
                    </div>


                    <Button text="LogIn" classes="login-button" handleClick={() => {}} />
                    <div className={`burger ${kartyz ? "_active" : ""}`} onClick={() => {setKartyz(!kartyz); setMcwin(!mcwin)}}><span></span></div>
                </div>
            </div>
        </header>
    );
};