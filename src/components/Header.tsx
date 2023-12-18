import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../utils/assets.utils";
import { NavBar } from "./NavBar";
import { Routes } from "../types/routes.types";
import { Burger } from "./ui/Burger";
import { BurgerMenu } from "./BurgerMenu";
import { Avatar } from "./vectors/Avatar";
import { appStore } from "../store";
import { DropDown, DropDownBox } from "./ui/DropDown/DropDown";
import { DropdownAvatar } from "./vectors/DropdownAvatar";
import { Logout } from "./vectors/Logout";
import { useFetch } from "../hooks/useFetch";
import { LocalStorageRefreshToken } from "../utils/constants.util";
import { AppService } from "../services/app/app.service";

export const Header: FC = observer(() => {
    const navigate = useNavigate();
    const [showBurger, setShowBurger] = useState(false);
    const { makeRequest: makeLogoutRequest } = useFetch<void>();
    const toggleBurger = () => {
        setShowBurger(!showBurger);
    };

    const handleLogout = async () => {
        try {
            const refreshToken = localStorage.getItem(LocalStorageRefreshToken);
            if (!refreshToken) {
                throw new Error("No refresh token in locale storage");
            }
            await makeLogoutRequest(() => AppService.logout({ refreshToken }));
            appStore.setIsAuth(false);
            appStore.setToken("");
        } catch (error) {
            console.error(error);
        }
    };

    const handleClick = (key: "logout" | "account") => {
        if (key === "logout") {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            handleLogout();
        } else if (key === "account") {
            navigate(Routes.Dashboard);
        }
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
                        {appStore.isAuth ?
                            (
                                <div className="avatar-box">
                                    <DropDown>
                                        <DropDownBox>
                                            <h3 className="account-greetings">
                                                {appStore.user ? `Hello, ${appStore.user.firstName}` : "Hello"}
                                            </h3>
                                        </DropDownBox>
                                        <div className="dropdown-menu">
                                            <ul className="dropdown-menu-list">
                                                {accountMenu.map((link) => {
                                                    return (
                                                        <li key={link.id} className="dropdown-menu__item">
                                                            <div
                                                                className="btn dropdown-menu__link"
                                                                role="button"
                                                                onClick={() => handleClick(link.key)}
                                                            >
                                                                <div className="link__icon-box">
                                                                    {link.icon}
                                                                </div>
                                                                <span className="link__title">
                                                                    {link.title}
                                                                </span>
                                                            </div>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </DropDown>
                                </div>
                            ) : (
                                <Link
                                    to={Routes.Login}
                                    className="btn btn-primary btn-login"
                                >
                                    <span className="btn-login__img">
                                        <Avatar />
                                    </span>
                                    <span className="btn-login__text">LogIn</span>
                                </Link>
                            )}

                        <Burger onBtnClick={toggleBurger} />
                    </div>
                </div>
            </div>
            {showBurger && <BurgerMenu toggleBurger={toggleBurger} />}
        </header>
    );
});

const accountMenu: { id: number; key: "account" | "logout"; title: string; icon: React.ReactNode; }[] = [
    { id: 0, key: "account", title: "My Account", icon: <DropdownAvatar /> },
    { id: 1, key: "logout", title: "Logout", icon: <Logout /> },
];
