import axios, { AxiosResponse } from "axios";
import { $api, baseURL } from "../../api";
import { ILoginResponse } from "../../models/response/ILoginResponse";
import { ILoginPayload } from "../../models/request/ILoginPayload";
import { ILogoutResponse } from "../../models/response/ILogoutResponse";
import { ILogoutPayload } from "../../models/request/ILogoutPayload";
import { IRefreshPayload } from "../../models/request/IRefreshToken";
import { IRegisterResponse } from "../../models/response/IRegisterResponse";
import { IRefreshResponse } from "../../models/response/IRefreshTokenResponse";
import { IRegisterPayload } from "../../models/request/IRegisterPayload";
import { IGetAppointmentsResponse } from "../../models/response/IGetAppointmentsResponse";
import { IGetFieldsResponse } from "../../models/response/IGetFieldsResponse";
import { IGetTypesResponse } from "../../models/response/IGetTypesResponse";
import { IGetSymptomsResponse } from "../../models/response/IGetSymptomsResponse";
import { IGetSymptomsToDisease } from "../../models/response/IGetSymptomsToDiseaseResponse";
import { IGetDiseaseToSpecialty } from "../../models/response/IGetDiseaseToSpecialtyResponse";
import { IGetDoctorsResponse } from "../../models/response/IGetDoctors";
import { ICheckSlotsResponse } from "../../models/response/ICheckSlotsResponse";
import { ICheckSlotsPayload } from "../../models/request/ICheckSlotsPayload";
import { ICreateAppointment } from "../../models/request/ICreateAppointment";
import { IPredictHeartDiseasePayload } from "../../models/request/IPredictHeartDiseasePayload";
import { IPredictHeartDiseaseResponse } from "../../models/response/IPredictHeartDiseaseResponse";
import { IUpcomingAppointment } from "../../models/response/IUpcomingAppointment";
import { IGetUserData } from "../../models/response/IGetUSerData";
import { IChangeAppointmentStatus } from "../../models/request/IChangeAppointmentStatus";
import { IReschedulePayload } from "../../models/request/IRescheduleAppointment";
import { ISaveHeartDiseaseResult } from "../../models/request/ISaveHeartDiseaseResult";
import { IPredictBrainStrokePayload } from "../../models/request/IPredictBrainStrokePayload";
import { IPredictionHistory } from "../../models/response/IPredictionResults";
import { ISaveBrainStrokeResult } from "../../models/request/ISaveBrainStrokeResult";

export class AppService {
    public static async login(
        payload: ILoginPayload,
    ): Promise<AxiosResponse<ILoginResponse>> {
        return $api.post<ILoginResponse>("/login", payload);
    }

    public static async logout(
        payload: ILogoutPayload,
    ): Promise<AxiosResponse<ILogoutResponse>> {
        return $api.post<ILogoutResponse>("/logout", payload);
    }

    public static async register(
        payload: IRegisterPayload,
    ): Promise<AxiosResponse<IRegisterResponse>> {
        return $api.post<IRegisterResponse>("/register", payload);
    }

    public static async refresh(
        payload: IRefreshPayload,
    ): Promise<AxiosResponse<IRefreshResponse>> {
        return axios.post<IRefreshResponse>("/refresh_token", payload, {
            baseURL,
        });
    }

    public static async predictHeartDisease(
        payload: IPredictHeartDiseasePayload): Promise<AxiosResponse<IPredictHeartDiseaseResponse>> {
        return $api.post("/predictHeartDisease", payload);
    }

    public static async predictBrainStroke(
        payload: IPredictBrainStrokePayload): Promise<AxiosResponse<number>> {
        return $api.post("/predictBrainStroke", payload);
    }

    public static async getAppointments(): Promise<AxiosResponse<IGetAppointmentsResponse>> {
        return $api.get<IGetAppointmentsResponse>("/getAppointments");
    }

    public static async getFields(): Promise<AxiosResponse<IGetFieldsResponse>> {
        return $api.get<IGetFieldsResponse>("/getPracticeFields");
    }

    public static async getTypes(): Promise<AxiosResponse<IGetTypesResponse>> {
        return $api.get<IGetTypesResponse>("/getAppointmentTypes");
    }

    public static async getUpcomingAppointment(): Promise<AxiosResponse<IUpcomingAppointment>> {
        return $api.get("/upcomingAppointment");
    }

    public static async getSymptoms(): Promise<AxiosResponse<IGetSymptomsResponse>> {
        return $api.get("/getSymptoms");
    }

    public static async getSymptomsToDisease(): Promise<AxiosResponse<IGetSymptomsToDisease>> {
        return $api.get("/getSymptomsToDisease");
    }

    public static async getDiseaseToSpecialty(): Promise<AxiosResponse<IGetDiseaseToSpecialty>> {
        return $api.get("/getDiseaseToSpecialty");
    }

    public static async getDoctors(): Promise<AxiosResponse<IGetDoctorsResponse>> {
        return $api.get("/getDoctors");
    }

    public static async checkSlots(payload: ICheckSlotsPayload): Promise<AxiosResponse<ICheckSlotsResponse>> {
        return $api.get("/checkAppointmentSlots", { params: payload });
    }

    public static async createAppointment(payload: ICreateAppointment): Promise<AxiosResponse<void>> {
        return $api.post("/createAppointment", payload);
    }

    public static async getUserData(): Promise<AxiosResponse<IGetUserData>> {
        return $api.get("/getUserData");
    }

    public static async changeAppointmentStatus(id: string, payload: IChangeAppointmentStatus): Promise<AxiosResponse<void>> {
        return $api.put(`/changeStatus/${id}`, payload);
    }

    public static async rescheduleAppointment(id: string, payload: IReschedulePayload): Promise<AxiosResponse<void>> {
        return $api.put(`/rescheduleAppointment/${id}`, payload);
    }

    public static async saveHeartDiseaseResult(payload: ISaveHeartDiseaseResult): Promise<AxiosResponse<void>> {
        return $api.post(`/saveHeartDiseasePrediction`, payload);
    }

    public static async saveBrainStrokeResult(payload: ISaveBrainStrokeResult): Promise<AxiosResponse<void>> {
        return $api.post(`/saveBrainStrokePrediction`, payload);
    }

    public static async getSavedPredictions(): Promise<AxiosResponse<IPredictionHistory>> {
        return $api.get("/getPatientPredictionHistory");
    }
}
