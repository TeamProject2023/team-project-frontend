import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Outlet } from "react-router";
import { Loader } from "../components/Loader";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { useFetch } from "../hooks/useFetch";
import { IGetUserData } from "../models/response/IGetUSerData";
import { AppService } from "../services/app/app.service";
import { appStore } from "../store";

export const BaseLayout: FC = observer(() => {
    const { isLoading: isUserLoading, makeRequest } = useFetch<IGetUserData>();
    const { isAuth, token, isLoading } = useCheckAuth();

    useEffect(() => {
        appStore.setIsAuth(isAuth);
        appStore.setToken(token);
    }, [isAuth, token]);

    useEffect(() => {
        console.log("useEffect 2");
        const fetchUser = async () => {
            try {
                const response = await makeRequest(() => {
                    return AppService.getUserData();
                });
                console.log(response);
                appStore.setUser(response);
            } catch (error) {
                console.error(error);
            }
        };
        if (appStore.isAuth) {
            fetchUser();
        }
    }, [appStore.isAuth]);

    return (
        <>
            {(isLoading || isUserLoading) && <Loader />}
            <Outlet />
        </>
    );
});
