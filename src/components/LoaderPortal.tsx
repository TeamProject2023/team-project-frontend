import { FC } from "react";
import { createPortal } from "react-dom";
import { Loader } from "./Loader";

const loaderEl = document.getElementById("loader");

export const LoaderPortal: FC = () => {
    return (
        <>
            {loaderEl && createPortal(
                <Loader />,
                loaderEl,
            )}
        </>
    );
};
