import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { appStore } from "../../store";
import { useCheckAuth } from "../../hooks/useCheckAuth";

export const PrivateOutlet: FC = observer(() => {
    const location = useLocation();
    const { isLoading, isAuth, token } = useCheckAuth();

    useEffect(() => {
        appStore.setIsAuth(isAuth);
        appStore.setToken(token);
    }, [isAuth, token]);
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
