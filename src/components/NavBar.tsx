import { FC } from "react";
import { Routes } from "../types/routes.types";
import { smoothScroll } from "../utils/smoothScroll";

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
                            <a
                                href={`#${link}`}
                                className="btn nav__link"
                                onClick={(e) => {
                                    smoothScroll(e);
                                }}
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export const navLinks = [
    {
        title: "About Us",
        link: Routes.About,
    },
    {
        title: "Our Services",
        link: Routes.Services,
    },
];
