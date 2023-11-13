import { FC } from "react";
import { Burger } from "../../../components/ui/Burger";
import { Logo } from "../../../components/Logo";

export const AccountHeader: FC = () => {
    return (
        <div className="account-header">
            <div className="account-header__inner">
                <Logo />
                <div className="user-actions">
                    <h3 className="account-greetings">
                        Hello, FirstName LastName
                    </h3>
                    <Burger />
                </div>
            </div>
        </div>
    );
};
