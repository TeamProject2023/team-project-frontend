import { FC } from "react";
import { LoginForm } from "./LoginForm/LoginForm";

export const LoginPageContent: FC = () => {
    return (
        <div className="page page-auth page-login">
            <section className="section">
                <div className="container">
                    <div className="section__inner">
                        <div className="card">
                            <div className="card__inner">
                                <h3 className="card__title">
                                    Welcome to MedAI
                                </h3>
                                {/* <h4 className="card__subtitle">Transforming Healthcare with Intelligence</h4> */}
                                <div className="card__content">
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
