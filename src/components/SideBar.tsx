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
                                <Link
                                    to={link}
                                    className="nav__link"
                                >
                                    <div className={`nav__icon icon-${icon}`} />
                                    <div className="nav__text">{title}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="nav__item nav__item-back">
                        <Link
                            to={backLink.link}
                            className="nav__link"
                        >
                            <div
                                className={`nav__icon icon-${backLink.icon}`}
                            />
                            <div className="nav__text">{backLink.title}</div>
                        </Link>
                    </div>
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
        title: "AI tool",
        link: Routes.AITool,
        icon: "aid-kit",
    },
    {
        title: "Book an appointment",
        link: Routes.Book,
        icon: "book",
    },
    {
        title: "History",
        link: Routes.History,
        icon: "calendar_today",
    },
];

const backLink = {
    title: "Back to home page",
    link: Routes.Main,
    icon: "arrow-back",
};
