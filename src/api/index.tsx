/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios";
import { IRefreshResponse } from "../models/response/IRefreshTokenResponse";
import { LocalStorageRefreshToken } from "../utils/constants.util";

export const baseURL = import.meta.env.VITE_API_URL as string;

export const $api = axios.create({ baseURL });

$api.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem(
            "token",
        )}`;
        console.log(`${config.method} - Request - ${config.url}`);
        return config;
    },
    (error) => {
        const originalRequest = error.config;
        console.error(
            `${originalRequest.method} - Request - ${originalRequest.url}`,
        );
    },
);

$api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        console.log("interceptors error response: ", error);
        if (
            error.response.status &&
            error.response.status === 401 &&
            error.config &&
            !originalRequest._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.get<IRefreshResponse>(
                    "/refresh_token",
                    { withCredentials: true, baseURL },
                );
                localStorage.setItem(
                    LocalStorageRefreshToken,
                    response.data.token,
                );
                return await $api.request(originalRequest);
            } catch (e) {
                console.error("Not authorized");
            }
        }
        throw error;
    },
);
