import { makeAutoObservable } from "mobx";
import { IUser } from "../models/response/IGetUSerData";
import { IAppointment } from "../models/response/IGetAppointmentsResponse";

class AppStore {
    public token: string;
    public isAuth: boolean;
    public user: IUser | null;
    public appointments: IAppointment[];
    public constructor() {
        this.token = "";
        this.isAuth = false;
        this.user = null;
        this.appointments = [];
        makeAutoObservable(this);
    }

    public setToken(token: string): void {
        this.token = token;
    }

    public setIsAuth(value: boolean): void {
        this.isAuth = value;
    }

    public setUser(value: IUser | null): void {
        this.user = value;
    }

    public setAppointments(value: IAppointment[]): void {
        this.appointments = value;
    }
}

export const appStore = new AppStore();
