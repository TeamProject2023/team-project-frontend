import { makeAutoObservable } from "mobx";
import { IUser } from "../models/response/IGetUSerData";
import { IAppointment } from "../models/response/IGetAppointmentsResponse";
import { IPredictionHistory } from "../models/response/IPredictionResults";
import { IUpcomingAppointment } from "../models/response/IUpcomingAppointment";

class AppStore {
    public token: string;
    public isAuth: boolean;
    public user: IUser | null;
    public appointments: IAppointment[];
    public results: IPredictionHistory;
    public upcomingAppointment: IUpcomingAppointment | null | undefined;
    public constructor() {
        this.token = "";
        this.isAuth = false;
        this.user = null;
        this.appointments = [];
        this.results = [];
        this.upcomingAppointment = undefined;
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

    public setResults(value: IPredictionHistory): void {
        this.results = value;
    }
    public setUpcomingAppointment(value: IUpcomingAppointment | null ): void {
        this.upcomingAppointment = value;
    } 
}

export const appStore = new AppStore();
