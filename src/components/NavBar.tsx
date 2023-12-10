import { FC } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../types/routes.types";

export const NavBar: FC = () => {
    return (
        <nav className="nav">
            <div className="nav__inner">
                <ul className="nav__list">
                    {navLinks.map(({ link, title }) => (
                        <li
                            key={link}
                            className="list__item nav__item"
                        >
                            <Link
                                to={link}
                                className="btn nav__link"
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export const navLinks = [
    {
        title: "Home",
        link: Routes.Main,
    },
    {
        title: "About Us",
        link: Routes.About,
    },
    {
        title: "Our Services",
        link: Routes.Services,
    },
    {
        title: "Our Team",
        link: Routes.Team,
    },
];
