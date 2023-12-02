import { FC, useState, useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { navLinks } from "./NavBar";

interface Props {
    toggleBurger: () => void;
}

export const BurgerMenu: FC<Props> = ({ toggleBurger }) => {
    const [isAnimated, setIsAnimated] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsAnimated(true), 10);
    }, []);

    const handleClose = () => {
        setIsAnimated(false);
        setTimeout(() => toggleBurger(), 300);
    };

    return (
        <nav className={cn("nav-burger", { __animated: isAnimated })}>
            <div className="nav__inner">
                <button className="btn btn-close" type="button" onClick={handleClose} />
                <ul className="nav__list">
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
