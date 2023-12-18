import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { ISignUpFormValues } from "../../../../schemas/signup.schema";

interface Props {
    label: string;
    type: string;
    placeholder: string;
    id: keyof ISignUpFormValues;
    register: UseFormRegister<ISignUpFormValues>;
    error: string | undefined;
}

export const FormInput: FC<Props> = ({
    id,
    label,
    type,
    placeholder,
    register,
    error,
}) => {
    return (
        <div className="input-group">
            <label
                htmlFor={id}
                className="label"
            >
                {label}
            </label>
            <div className="input-box">
                <input
                    type={type}
                    className="input"
                    placeholder={placeholder}
                    autoComplete="off"
                    id={id}
                    {...register(id)}
                />
                {error && <p className="input-error">{error}</p>}
            </div>
        </div>
    );
};
