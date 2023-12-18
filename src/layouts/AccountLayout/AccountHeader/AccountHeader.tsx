import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Burger } from "../../../components/ui/Burger";
import {
    DropDown,
    DropDownBox,
} from "../../../components/ui/DropDown/DropDown";
import { Routes } from "../../../types/routes.types";
import { useFetch } from "../../../hooks/useFetch";
import { ILogoutResponse } from "../../../models/response/ILogoutResponse";
import { Loader } from "../../../components/Loader";
import { AppService } from "../../../services/app/app.service";
import { LocalStorageRefreshToken } from "../../../utils/constants.util";
import { appStore } from "../../../store";

export const AccountHeader: FC = observer(() => {
    const navigate = useNavigate();
    const { isLoading, makeRequest } = useFetch<ILogoutResponse>();
    const handleLogout = async () => {
        try {
            const refreshToken = localStorage.getItem(LocalStorageRefreshToken);
            if (!refreshToken) {
                throw new Error("No refresh token in locale storage");
            }
            await makeRequest(() => AppService.logout({ refreshToken }));
            appStore.setIsAuth(false);
            appStore.setToken("");
            navigate(Routes.Main);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            {isLoading && <Loader />}
            <div className="account-header">
                <div className="account-header__inner">
                    <div className="user-actions">
                        <DropDown>
                            <DropDownBox>
                                <h3 className="account-greetings">
                                    {appStore.user ? `Hello, ${appStore.user.firstName}` : "Hello"}
                                </h3>
                            </DropDownBox>
                            <div className="dropdown-menu">
                                <ul className="dropdown-menu-list">
                                    <li className="dropdown-menu__item">
                                        <div
                                            className="btn dropdown-menu__link"
                                            role="button"
                                            onClick={() => handleLogout()}
                                        >
                                            <div className="link__icon icon-log-out" />
                                            <span className="link__title">
                                                Logout
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </DropDown>
                        <Burger onBtnClick={() => {}} />
                    </div>
                </div>
            </div>
        </>
    );
});
