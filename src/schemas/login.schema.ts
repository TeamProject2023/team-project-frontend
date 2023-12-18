import * as yup from "yup";

export const loginFormSchema = yup
    .object({
        email: yup
            .string()
            .email("Invalid email")
            .required("Please enter your email"),
        password: yup.string().required("Please enter your password"),
    })
    .required();

export type ILoginFormValues = yup.InferType<typeof loginFormSchema>;
