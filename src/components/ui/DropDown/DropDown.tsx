import { FC, ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
}

export const DropDown: FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <button
            type="button"
            className={`btn dropdown ${isOpen ? "dropdown_open" : ""}`}
            onClick={toggleMenu}
        >
            <span className="btn btn-arrow" />
            {children}
        </button>
    );
};
export const DropDownBox: FC<Props> = ({ children }) => {
    return <div className="dropdown-box">{children}</div>;
};
