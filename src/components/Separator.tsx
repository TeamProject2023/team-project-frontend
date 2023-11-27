import { FC } from "react";
import tooth from "../assets/images/tooth-solid.svg";
import "../styles/components/_separator.scss";

interface SeparatorProps {
    // Define props here if needed
}

export const Separator: FC<SeparatorProps> = () => {
    return (
        <div className="separator">
            <div className="separator__container">
                <div className="separator__item">
                    <img src={tooth} alt="Icon 1" />
                    <div className="separator__item-text">
                        <div className="separator__item-title">60+</div>
                        <div className="separator__item-subtitle">Project Completed</div>
                    </div>
                </div><div className="separator__item">
                    <img src={tooth} alt="Icon 1" />
                    <div className="separator__item-text">
                        <div className="separator__item-title">60+</div>
                        <div className="separator__item-subtitle">Project Completed</div>
                    </div>
                </div><div className="separator__item">
                    <img src={tooth} alt="Icon 1" />
                    <div className="separator__item-text">
                        <div className="separator__item-title">60+</div>
                        <div className="separator__item-subtitle">Project Completed</div>
                    </div>
                </div><div className="separator__item">
                    <img src={tooth} alt="Icon 1" />
                    <div className="separator__item-text">
                        <div className="separator__item-title">60+</div>
                        <div className="separator__item-subtitle">Project Completed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
