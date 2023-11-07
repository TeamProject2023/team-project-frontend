import { AxiosError, AxiosResponse } from "axios";
import { useState, useCallback } from "react";

export function useFetch<TResponse>(initLoading?: boolean) {
    const [isLoading, setIsLoading] = useState<boolean>(!!initLoading);

    const makeRequest = useCallback(
        async function fn (request: () => Promise<AxiosResponse<TResponse>>) {
        try {
            setIsLoading(true);
            const response = await request();
            return response.data;
        } catch (error) {
            console.log(error);           
            if (error instanceof AxiosError || error instanceof Error) {
                throw error.message;
            } else {
                throw new Error("Network error");
            }
        } finally {
            console.log("finally");
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        makeRequest
    }
}