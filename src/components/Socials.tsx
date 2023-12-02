import { FC } from "react";
import { Link } from "react-router-dom";

export const Socials: FC = () => {
    return (
        <ul className="social-list">
            {socials.map(({ id, icon, link }) => (
                <li key={id} className="list__item">
                    <Link to={link} className="list__link">
                        <span className={`link__icon ${icon}`} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

const socials = [
    {
        id: 0,
        icon: "icon-social-facebook",
        link: "",
    },
    {
        id: 1,
        icon: "icon-social-twitter",
        link: "",
    },
    {
        id: 2,
        icon: "icon-social-instagram",
        link: "",
    },
    {
        id: 3,
        icon: "icon-social-linkedin",
        link: "",
    },
];
