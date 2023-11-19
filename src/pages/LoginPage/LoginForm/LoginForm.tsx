import { FC } from "react";
import { observer } from "mobx-react-lite";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Routes } from "../../../types/routes.types";
import {
    ILoginFormValues,
    loginFormSchema,
} from "../../../schemas/login.schema";
import { useFetch } from "../../../hooks/useFetch";
import { ILoginResponse } from "../../../models/response/ILoginResponse";
import { AppService } from "../../../services/app/app.service";
import { Loader } from "../../../components/Loader";
import { appStore } from "../../../store";
import { LocalStorageRefreshToken } from "../../../utils/constants.util";

export const LoginForm: FC = observer(() => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFormValues>({
        resolver: yupResolver(loginFormSchema),
    });
    const { isLoading, makeRequest } = useFetch<ILoginResponse>();
    const onSubmit = handleSubmit(async ({ email, password }) => {
        try {
            const response = await makeRequest(() => AppService.login({ email, password }));
            appStore.setIsAuth(true);
            appStore.setToken(response.token);
            localStorage.setItem(LocalStorageRefreshToken, response.refreshToken);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            navigate(location.state?.from?.path ?? Routes.Dashboard);
        } catch (error) {
            console.error(error);
            appStore.setIsAuth(false);
            appStore.setToken("");
        }
    });

    return (
        <>
            {isLoading && <Loader />}
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
        </>
    );
});
