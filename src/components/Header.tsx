import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../utils/assets.utils";
import { NavBar } from "./NavBar";
import { Routes } from "../types/routes.types";
import { Burger } from "./ui/Burger";
import { BurgerMenu } from "./BurgerMenu";
import { Avatar } from "./vectors/Avatar";

export const Header: FC = () => {
    const [showBurger, setShowBurger] = useState(false);
    // const [header, setHeader] = useState(false);

    const toggleBurger = () => {
        setShowBurger((prev) => !prev);
    };

    return (
        <header className={`header `}>
            <div className="container">
                <div className="header__inner">
                    <div className="col col-left">
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
                    </div>

                    <div className="col col-right">
                        <NavBar />
                        <Link
                            to={Routes.Login}
                            className="btn btn-primary btn-login"
                        >
                            <span className="btn-login__img"><Avatar /></span>
                            <span className="btn-login__text">Login</span>
                        </Link>
                        <Burger onBtnClick={toggleBurger} />
                    </div>
                </div>
            </div>
            {showBurger && <BurgerMenu toggleBurger={toggleBurger} />}
        </header>
    );
};
