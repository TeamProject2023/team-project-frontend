import { makeAutoObservable } from "mobx";

class AppStore {
    public token: string;
    public isAuth: boolean;
    public constructor() {
        this.token = "";
        this.isAuth = false;
        makeAutoObservable(this);
    }

    public setToken(token: string): void {
        this.token = token;
    }

    public setIsAuth(value: boolean): void {
        this.isAuth = value;
    }
}

export const appStore = new AppStore();
