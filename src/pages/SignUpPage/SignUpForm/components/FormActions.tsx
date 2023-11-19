import { FC } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../../../types/routes.types";

export const FormActions: FC = () => {
    return (
        <>
            <button
                className="btn btn-primary"
                type="submit"
            >
                Sign up
            </button>
            <p className="form__info">
                Already have an account?{" "}
                <Link
                    to={Routes.Login}
                    className="link link-underline"
                >
                    Login
                </Link>
            </p>
        </>
    );
};
