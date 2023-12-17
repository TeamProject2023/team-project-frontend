import { AxiosResponse } from "axios";
import { useState, useCallback } from "react";

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
            throw new Error();
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        makeRequest,
    };
}
