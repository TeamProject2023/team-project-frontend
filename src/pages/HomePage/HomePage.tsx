import { FC } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../types/routes.types";

export const HomePage: FC = () => {
    return (
        <div>
            HomePage
            <Link to={Routes.Dashboard}>Dashboard</Link>
        </div>
    );
};
