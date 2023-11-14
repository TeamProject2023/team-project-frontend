import { FC } from "react";

export const Burger: FC = () => {
    return (
        <button className="btn btn-burger">
            <div className="burger-box">
                <span className="line" />
                <span className="line" />
                <span className="line" />
            </div>
        </button>
    );
};
