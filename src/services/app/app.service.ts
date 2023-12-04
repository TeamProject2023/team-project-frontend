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

    public static async getAppointments(): Promise<AxiosResponse<IGetAppointmentsResponse>> {
        return $api.get<IGetAppointmentsResponse>("/getAppointments");
    }

    public static async getFields(): Promise<AxiosResponse<IGetFieldsResponse>> {
        return $api.get<IGetFieldsResponse>("/getPracticeFields");
    }

    public static async getTypes(): Promise<AxiosResponse<IGetTypesResponse>> {
        return $api.get<IGetTypesResponse>("/getAppointmentTypes");
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
}
