import { FC } from "react";
import "../styles/components/_separator.scss";

interface SeparatorProps {
    // Define props here if needed
}

export const Separator: FC<SeparatorProps> = () => {
    return (
        <div className="separator">
            <div className="separator-content">
                <div className="separator-item">
                    <img src="icon1.png" alt="Icon 1" />
                    <p>Text 1</p>
                </div>
                <div className="separator-item">
                    <img src="icon2.png" alt="Icon 2" />
                    <p>Text 2</p>
                </div>
                <div className="separator-item">
                    <img src="icon3.png" alt="Icon 3" />
                    <p>Text 3</p>
                </div>
                <div className="separator-item">
                    <img src="icon4.png" alt="Icon 4" />
                    <p>Text 4</p>
                </div>
            </div>
        </div>
    );
};

