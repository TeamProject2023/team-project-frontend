import { FC } from "react";
import { Link } from "react-router-dom";
import { Socials } from "./Socials";
import { assets } from "../utils/assets.utils";
import { Routes } from "../types/routes.types";

export const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="container">
                    <div className="footer__content">
                        <div className="col col-1">
                            <div className="col__inner">
                                <div className="logo-box">
                                    <img
                                        src={assets.logos.light}
                                        alt="Logo"
                                        className="logo"
                                    />
                                </div>
                                <p className="footer__text">
                                    Lorem ipsum dolor sit amet consc tetur
                                    adicing elit. Dolor emque dicta molest enim
                                    beatae ame consequ atur tempo pretium auctor
                                    nam.
                                </p>
                                <div className="social-box">
                                    <Socials />
                                </div>
                            </div>
                        </div>
                        <div className="col col-2">
                            <FooterMenu menu={footerLinks.company} />
                        </div>
                        <div className="col col-3">
                            <FooterMenu menu={footerLinks.important} />
                        </div>
                        <div className="col col-4 contacts">
                            <FooterMenu menu={footerLinks.contact} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <span className="copyright__text">
                    © 2023 All rights reserved
                </span>
            </div>
        </footer>
    );
};

interface FooterMenuProps {
    menu: IFooterMenu;
}
const FooterMenu: FC<FooterMenuProps> = ({ menu }) => {
    return (
        <>
            <h3 className="list-title">{menu.title}</h3>
            <ul className="footer-menu">
                {menu.links.map(({ id, link, title, subtitle, icon }) => (
                    <li
                        key={id}
                        className="list__item"
                    >
                        <Link
                            to={link}
                            className="item__link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="link__inner">
                                {icon && (
                                    <span
                                        className={`link__icon icon-contacts ${icon}`}
                                    />
                                )}
                                <span className="link__title">{title}</span>
                                {subtitle && (
                                    <span className="link__subtitle">
                                        {subtitle}
                                    </span>
                                )}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

interface IFooterMenu {
    id: number;
    title: string;
    links: FooterMenuLink[];
}

interface FooterMenuLink {
    id: number;
    title: string;
    subtitle?: string;
    icon?: string;
    link: string;
}

const footerLinks: Record<string, IFooterMenu> = {
    company: {
        id: 0,
        title: "Company",
        links: [
            {
                id: 0,
                title: "Home",
                link: Routes.Main,
            },
            {
                id: 3,
                title: "Our Team",
                link: Routes.Team,
            },
        ],
    },
    important: {
        id: 1,
        title: "Important",
        links: [
            {
                id: 1,
                title: "FAQ",
                link: Routes.Faq,
            },
        ],
    },
    contact: {
        id: 2,
        title: "Contact",
        links: [
            {
                id: 0,
                title: "Location",
                subtitle: "Banacha 22, 90-238 Łódź, Poland",
                icon: "icon-location",
                link: "https://maps.app.goo.gl/NCN8xugMBVYDu8L17",
            },
            {
                id: 1,
                title: "Email",
                subtitle: "support@medai.com",
                icon: "icon-email",
                link: "mailto:support@medai.com",
            },
            {
                id: 2,
                title: "Phone",
                subtitle: "+48123456789",
                icon: "icon-call",
                link: "tel:48123456789",
            },
        ],
    },
};
