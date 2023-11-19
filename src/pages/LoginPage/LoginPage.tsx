import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { appStore } from "../../store";
import { Loader } from "../../components/Loader";
import { LoginPageContent } from "./LoginPageContent";
import { Routes } from "../../types/routes.types";

export const LoginPage: FC = observer(() => {
    const { isLoading, isAuth, token } = useCheckAuth();

    useEffect(() => {
        appStore.setIsAuth(isAuth);
        appStore.setToken(token);
    }, [
        isAuth, token,
    ]);
    return (
        <>
            {isLoading ? <Loader /> :
                isAuth ? <Navigate to={Routes.Dashboard} /> : <LoginPageContent />}
        </>
    );
});
