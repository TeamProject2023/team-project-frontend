import { AxiosResponse } from "axios";
import { useState, useCallback } from "react";
import { CustomError } from "../services/error/error.service";

export function useFetch<TResponse>(initLoading?: boolean): {
    makeRequest: (
        request: () => Promise<AxiosResponse<TResponse>>,
    ) => Promise<TResponse>;
    isLoading: boolean;
} {
    const [isLoading, setIsLoading] = useState<boolean>(!!initLoading);

    const makeRequest = useCallback(async function fn(
        request: () => Promise<AxiosResponse<TResponse>>,
    ) {
        try {
            setIsLoading(true);
            const response = await request();
            return response.data;
        } catch (error) {
            throw new CustomError(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        makeRequest,
    };
}
