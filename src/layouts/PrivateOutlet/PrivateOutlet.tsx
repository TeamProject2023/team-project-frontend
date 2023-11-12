import { FC } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
// import { appService } from "../services";
// import { appController } from "../controllers";
// import { selectIsAuth } from "../store/selector";

export const PrivateOutlet: FC = () => {
    const isAuth = true;
    const location = useLocation();
    // const { isLoading, makeRequest } = useFetch<AuthResponse>(true);
    // useEffect(() => {
    //     console.log("PrivateOutlet useEffect");
    //     const checkAuth = async () => {
    //         try {
    //             // const response = await makeRequest(async () => {
    //             //     return appService.auth.refresh();
    //             // });
    //             // appController.auth.handleLogin(response);
    //         } catch (error) {
    //             console.log(`Error - PrivateOutlet - ${error}`);
    //             // appController.auth.handleLogout();
    //         }
    //     };

    //     checkAuth();
    // }, [makeRequest]);

    // console.log({ isLoading, isAuth });
    return (
        <div className="page-wrapper layout layout-private">
            {false ? (
                <Loader />
            ) : isAuth ? (
                <Outlet />
            ) : (
                <Navigate
                    to="/login"
                    state={{ from: location }}
                />
            )}
        </div>
    );
};
