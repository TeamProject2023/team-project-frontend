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
}
