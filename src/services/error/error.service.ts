import { AxiosError } from "axios";
import { AppError } from "./AppError.class";

export class CustomError extends Error {
    public name: string;
    public message: string;

    public constructor(error: unknown) {
        super();
        if (error instanceof AxiosError) {
            this.name = error.name;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            this.message = error.response?.data ?? error.message;
            console.error(
                `Network Error - ${error.code ?? "code"} - ${
                    error.name ?? "none"
                } - ${error.stack ?? "none"}`,
            );
        } else if (error instanceof AppError) {
            this.name = error.name;
            this.message = error.message;
            console.error(
                `App Error - ${error.name ?? "name"} - ${
                    error.message ?? "message"
                }`,
            );
        } else {
            this.name = "Unknown error";
            this.message = "Unknown error occurs";
            console.error("Unknown error");
        }
    }
}
