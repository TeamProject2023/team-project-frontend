import { FC, useEffect, useState } from "react";
import { ModalBase } from "./ModalBase";

export interface WithAnimationProps {
    closeModal: () => void;
}
export interface ComponentProps {
    isActive: boolean;
    handleCloseModal: () => void;
}

export function withAnimation<
    P extends WithAnimationProps = WithAnimationProps,
>(Component: FC<ComponentProps>): React.FC<P> {
    const ModalWithAnimation: FC<P> = ({ closeModal, ...props }) => {
        const [isActive, setIsActive] = useState(false);

        useEffect(() => {
            setTimeout(() => {
                setIsActive(true);
            }, 10);
        }, []);

        const handleCloseModal = () => {
            setIsActive(false);
            setTimeout(() => {
                closeModal();
            }, 700);
        };
        return (
            <ModalBase>
                <Component
                    isActive={isActive}
                    handleCloseModal={handleCloseModal}
                    {...(props as P)}
                />
            </ModalBase>
        );
    };

    return ModalWithAnimation;
}
