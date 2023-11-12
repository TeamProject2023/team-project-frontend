import * as yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

export const signupFormSchema = yup
    .object({
        firstName: yup.string().required("Please enter your first name"),
        lastName: yup.string().required("Please enter your last name"),
        phone: yup
            .string()
            .required("Please enter your phone")
            .test("validate-by-country", "Invalid phone format", (value) =>
                isValidPhoneNumber(value),
            ),
        email: yup
            .string()
            .email("Invalid email")
            .required("Please enter your email"),
        password: yup.string().required("Please enter your password"),
    })
    .required();

export type ISignUpFormValues = yup.InferType<typeof signupFormSchema>;
