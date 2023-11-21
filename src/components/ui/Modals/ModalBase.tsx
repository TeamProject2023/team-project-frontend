import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

const modalEl = document.getElementById("modal") as HTMLDivElement;

interface Props {
    children: ReactNode;
}

export const ModalBase: FC<Props> = ({ children }) => {
    return <>{createPortal(<>{children}</>, modalEl)}</>;
};
