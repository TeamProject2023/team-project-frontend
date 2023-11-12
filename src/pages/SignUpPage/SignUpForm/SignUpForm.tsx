import { FC, forwardRef } from "react";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-number-input";
import { Routes } from "../../../types/routes.types";
import {
    ISignUpFormValues,
    signupFormSchema,
} from "../../../schemas/signup.schema";
import "react-phone-number-input/style.css";

export const SignUpForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<ISignUpFormValues>({
        resolver: yupResolver(signupFormSchema),
    });
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div className="form-wrapper">
            <form
                className="form form-signup"
                autoComplete="off"
                onSubmit={onSubmit}
            >
                <div className="form__inner">
                    <div className="form__header" />

                    <div className="form__body">
                        <div className="input-group">
                            <label
                                htmlFor="firstName"
                                className="label"
                            >
                                First Name
                            </label>
                            <div className="input-box">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="John"
                                    autoComplete="off"
                                    id="firstName"
                                    {...register("firstName")}
                                />
                                <p className="input-error">
                                    {errors.firstName?.message}
                                </p>
                            </div>
                        </div>
                        <div className="input-group">
                            <label
                                htmlFor="lastName"
                                className="label"
                            >
                                Last Name
                            </label>
                            <div className="input-box">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Smith"
                                    autoComplete="off"
                                    id="lastName"
                                    {...register("lastName")}
                                />
                                <p className="input-error">
                                    {errors.lastName?.message}
                                </p>
                            </div>
                        </div>
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
                                htmlFor="phone"
                                className="label"
                            >
                                Phone
                            </label>
                            <div className="input-box">
                                <Controller
                                    control={control}
                                    name="phone"
                                    render={({
                                        field: { onChange, value },
                                    }) => (
                                        <PhoneInput
                                            placeholder="Enter phone number"
                                            value={value}
                                            onChange={onChange}
                                            international={true}
                                            defaultCountry="PL"
                                            inputComponent={AppPhoneInput}
                                        />
                                    )}
                                />
                                <p className="input-error">
                                    {errors.phone?.message}
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
                    </div>
                </div>
            </form>
        </div>
    );
};

const AppPhoneInput = forwardRef<HTMLInputElement>(
    function AppInput(props, ref) {
        return (
            <input
                {...props}
                id="phone"
                ref={ref}
                className="input"
            />
        );
    },
);
