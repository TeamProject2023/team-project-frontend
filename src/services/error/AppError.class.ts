export class AppError extends Error {
    public name: string;
    public message: string;

    public constructor(name: string, message: string) {
        super();
        this.name = name;
        this.message = message;
    }
}
