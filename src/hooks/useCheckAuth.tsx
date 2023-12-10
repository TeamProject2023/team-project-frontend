import { useState, useEffect } from "react";
import { IRefreshResponse } from "../models/response/IRefreshTokenResponse";
import { AppService } from "../services/app/app.service";
import { LocalStorageRefreshToken } from "../utils/constants.util";
import { useFetch } from "./useFetch";

interface UseCheckAuthResponse {
    isLoading: boolean;
    isAuth: boolean;
    token: string;
}

export const useCheckAuth = (): UseCheckAuthResponse => {
    const [token, setToken] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { makeRequest } = useFetch<IRefreshResponse>();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                setIsLoading(true);
                const refreshToken = localStorage.getItem(
                    LocalStorageRefreshToken,
                );
                if (!refreshToken) {
                    setIsLoading(false);
                    return;
                }
                const response = await makeRequest(() =>
                    AppService.refresh({ refreshToken }),
                );
                setToken(response.token);
                setIsAuth(true);
            } catch (error) {
                setIsAuth(false);
                setToken("");
            } finally {
                setIsLoading(false);
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        checkAuth();
    }, [makeRequest]);
    return {
        isLoading,
        isAuth,
        token,
    };
};
