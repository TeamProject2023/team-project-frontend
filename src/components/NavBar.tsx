import { FC } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../types/routes.types";

export const NavBar: FC = () => {
    return (
        <nav className="nav">
            <div className="nav__inner">
                <ul className="nav__list">
                    {navLinks.map(({ link, title }) => (
                        <li key={link} className="list__item nav__item">
                            <Link to={link} className="nav__link">{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

const navLinks = [
    {
        title: "Predictor",
        link: Routes.Rules,
    },
    {
        title: "MyCabinet",
        link: Routes.Prizes,
    },
    {
        title: "News",
        link: Routes.Table,
    },
];
