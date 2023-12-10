import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { appStore } from "../../store";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { AppService } from "../../services/app/app.service";
import { useFetch } from "../../hooks/useFetch";
import { IGetUserData } from "../../models/response/IGetUSerData";

export const PrivateOutlet: FC = observer(() => {
    const { makeRequest } = useFetch<IGetUserData>();
    const location = useLocation();
    const { isLoading, isAuth, token } = useCheckAuth();

    useEffect(() => {
        appStore.setIsAuth(isAuth);
        appStore.setToken(token);
    }, [isAuth, token]);

    useEffect(() => {
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
        <div className="page-wrapper layout layout-private">
            {isLoading ? (
                <Loader />
            ) : isAuth ? (
                <Outlet />
            ) : (
                <Navigate
                    to="/login"
                    state={{ from: location, omitCheckAuth: true }}
                />
            )}
        </div>
    );
});
