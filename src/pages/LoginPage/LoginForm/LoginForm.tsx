import { FC } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Routes } from "../../../types/routes.types";
import {
    ILoginFormValues,
    loginFormSchema,
} from "../../../schemas/login.schema";

export const LoginForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFormValues>({
        resolver: yupResolver(loginFormSchema),
    });
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div className="form-wrapper">
            <form
                className="form form-login"
                autoComplete="off"
                onSubmit={onSubmit}
            >
                <div className="form__inner">
                    <div className="form__header" />
                    <div className="form__body">
                        <div className="input-group">
                            <label
                                htmlFor="email"
                                className="label"
                            >
                                Email
                            </label>
                            <div className="input-box">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="email@email.com"
                                    autoComplete="off"
                                    id="email"
                                    {...register("email")}
                                />
                                <p className="input-error">
                                    {errors.email?.message}
                                </p>
                            </div>
                        </div>
                        <div className="input-group">
                            <label
                                htmlFor="password"
                                className="label"
                            >
                                Password
                            </label>
                            <div className="input-box">
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    autoComplete="off"
                                    id="password"
                                    {...register("password")}
                                />
                                <p className="input-error">
                                    {errors.password?.message}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="form__footer">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Login
                        </button>
                        <p className="form__info">
                            Don’t have an account?{" "}
                            <Link
                                to={Routes.SignUp}
                                className="link link-underline"
                            >
                                Register Now
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};
