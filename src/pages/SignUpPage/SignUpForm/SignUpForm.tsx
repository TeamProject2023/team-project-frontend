import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import {
    ISignUpFormValues,
    signupFormSchema,
} from "../../../schemas/signup.schema";
import "react-phone-number-input/style.css";
import { useFetch } from "../../../hooks/useFetch";
import { IRegisterResponse } from "../../../models/response/IRegisterResponse";
import { AppService } from "../../../services/app/app.service";
import { appStore } from "../../../store";
import { ILoginResponse } from "../../../models/response/ILoginResponse";
import { LocalStorageRefreshToken } from "../../../utils/constants.util";
import { Loader } from "../../../components/Loader";
import { FormInput } from "./components/FormInput";
import { FormPhoneInput } from "./components/FormPhoneInput";
import { FormActions } from "./components/FormActions";
import { Routes } from "../../../types/routes.types";

export const SignUpForm: FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { makeRequest: signup } = useFetch<IRegisterResponse>();
    const { makeRequest: login } = useFetch<ILoginResponse>();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        control,
    } = useForm<ISignUpFormValues>({
        resolver: yupResolver(signupFormSchema),
    });
    const onSubmit = handleSubmit(async ({ email, password, firstName, lastName, phone }) => {
        try {
            setIsLoading(true);
            await signup(() => AppService.register({ email, password, firstName, lastName, phone }));
            const loginResponse = await login(() =>
                AppService.login({ email, password }),
            );
            appStore.setIsAuth(true);
            appStore.setToken(loginResponse.token);
            localStorage.setItem(
                LocalStorageRefreshToken,
                loginResponse.refreshToken,
            );
            navigate(Routes.Dashboard);
        } catch (error) {
            setError("root", {
                message: `Error! You haven't been registered. Please try again`,
            });
        } finally {
            setIsLoading(false);
        }
    });
    return (
        <>
            {isLoading && <Loader />}
            <div className="form-wrapper">
                <form
                    className="form form-signup"
                    autoComplete="off"
                    onSubmit={onSubmit}
                >
                    <div className="form__inner">
                        <div className="form__header">
                            {errors.root?.message && (
                                <p className="form-error">
                                    {errors.root?.message}
                                </p>
                            )}
                        </div>

                        <div className="form__body">
                            <FormInput
                                id="firstName"
                                label="First Name"
                                placeholder="John"
                                type="text"
                                register={register}
                                error={errors.firstName?.message}
                            />
                            <FormInput
                                id="lastName"
                                label="Last Name"
                                placeholder="Smith"
                                type="text"
                                register={register}
                                error={errors.lastName?.message}
                            />
                            <FormInput
                                id="email"
                                label="Last Name"
                                placeholder="email@email.com"
                                type="text"
                                register={register}
                                error={errors.email?.message}
                            />
                            <FormPhoneInput
                                control={control}
                                error={errors.phone?.message}
                            />
                            <FormInput
                                id="password"
                                label="Password"
                                placeholder="Password"
                                type="password"
                                register={register}
                                error={errors.password?.message}
                            />
                        </div>

                        <div className="form__footer">
                            <FormActions />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
