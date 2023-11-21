import { FC } from "react";
import cn from "classnames";
import { withAnimation } from "./WithAnimationHOC";

interface Props {
    handleCloseModal: () => void;
    isActive: boolean;
}

export const ErrorModal: FC<Props> = ({ handleCloseModal, isActive }) => {
    return (
        <div className={cn("modal-box", { "modal-box_active": isActive })}>
            <div className="modal__shadow" />
            <div className="modal__outer">
                <div className="modal__inner">
                    <button onClick={() => handleCloseModal()}>Close</button>
                </div>
            </div>
        </div>
    );
};

export const ErrorModalWithAnimation = withAnimation(ErrorModal);
