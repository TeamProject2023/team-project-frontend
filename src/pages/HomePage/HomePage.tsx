import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "./sections/Hero";
import { Statistics } from "./sections/Statistics";
import { About } from "./sections/About";
import { Info } from "../../components/Info";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { appStore } from "../../store";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { IGetUserData } from "../../models/response/IGetUSerData";
import { AppService } from "../../services/app/app.service";

export const HomePage: FC = observer(() => {
    const { isLoading: isUserLoading, makeRequest } = useFetch<IGetUserData>();
    const { isAuth, token, isLoading } = useCheckAuth();

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
        <>
            {(isLoading || isUserLoading) && <Loader />}
            <div className="page page-home">
                <Header />
                <main className="main">
                    <Hero />
                    <Statistics />
                    <About />
                    <Info />
                    <Footer />
                </main>
            </div>
        </>
    );
});
