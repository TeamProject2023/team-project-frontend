import { FC } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Routes } from "../types/routes.types";

export const SideBar: FC = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__inner">
                <Logo />
                <nav className="nav">
                    <ul className="nav-list">
                        {navLinks.map(({ link, title, icon }) => (
                            <li
                                key={link}
                                className="list__item nav__item"
                            >
                                <div className={`icon-${icon}`} />
                                <Link
                                    to={link}
                                    className="nav__link"
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

const navLinks = [
    {
        title: "Dashboard",
        link: Routes.Dashboard,
        icon: "grid",
    },
    {
        title: "Book an appointment",
        link: Routes.Book,
        icon: "calendar",
    },
];
