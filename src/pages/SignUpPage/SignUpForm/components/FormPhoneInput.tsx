import { FC, forwardRef } from "react";
import { Control, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { ISignUpFormValues } from "../../../../schemas/signup.schema";

interface Props {
    control: Control<ISignUpFormValues>;
    error: string | undefined;
}

export const FormPhoneInput: FC<Props> = ({ control, error }) => {
    return (
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
                    render={({ field: { onChange, value } }) => (
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
                {error && <p className="input-error">{error}</p>}
            </div>
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
