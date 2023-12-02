import { FC } from "react";

interface Props {
    onBtnClick: () => void;
}

export const Burger: FC<Props> = ({ onBtnClick }) => {
    return (
        <button
            className="btn btn-burger"
            type="button"
            onClick={onBtnClick}
        >
            <div className="burger-box">
                <span className="line" />
                <span className="line" />
                <span className="line" />
            </div>
        </button>
    );
};
