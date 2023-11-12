import { FC } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../types/routes.types";

export const NavBar: FC = () => {
    return (
        <nav className="nav">
            <div className="nav__inner">
                <ul className="nav-list">
                    {navLinks.map(({ link, title }) => (
                        <li
                            key={link}
                            className="list__item nav__item"
                        >
                            <Link
                                to={link}
                                className="nav__link"
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

const navLinks = [
    {
        title: "Правила акции",
        link: Routes.Rules,
    },
    {
        title: "Призы",
        link: Routes.Prizes,
    },
    {
        title: "Турнирная таблица",
        link: Routes.Table,
    },
];
