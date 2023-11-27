import { FC } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../types/routes.types";
import { assets } from "../utils/assets.utils";

export const Logo: FC = () => {
    return (
        <Link
            to={Routes.Main}
            className="link logo"
        >
            <div className="logo__img-box">
                <img
                    src={assets.logos.logo}
                    alt="MedAI logotype"
                    className="logo__img"
                />
            </div>
        </Link>
    );
};
