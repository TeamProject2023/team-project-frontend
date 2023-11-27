import {FC, useState} from "react";
import { Link } from "react-router-dom";
import { Routes } from "../types/routes.types";

export const NavBar: FC = () => {
    const [dropDown, setDropDown] = useState(false);

    return (
        <nav className="nav" onMouseLeave={() => setDropDown(false)}>
            <div className="nav__inner">
                <ul className="nav__list">
                    {navLinks.map(({ link, title }) => (
                        <li key={link} className="list__item nav__item" onMouseEnter={() => setDropDown(false)}>
                            <Link to={link} className="nav__link">{title}</Link>
                        </li>
                    ))}
                    <div className="nav__menu" onMouseEnter={() => setDropDown(true)}>
                        <div className="nav__menu-title">Cabinet <span></span></div>
                        <ul className={`nav__menu-dropdown ${dropDown ? "_active" : ""}`} onMouseLeave={() => setDropDown(false)}>
                            {navMenu.map(({ title, link }) => (
                                <li key={link} className="nav__menu-link">
                                    <Link to={link}>{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

const navLinks = [
    {
        title: "Predictor",
        link: Routes.Predictor,
    },
    {
        title: "News",
        link: Routes.Table,
    },
];

const navMenu = [
    {
        title: "Prediction History",
        link: Routes.PredictorHistory,
    },
    {
        title: "Appointments",
        link: Routes.Appointments,
    },

]
