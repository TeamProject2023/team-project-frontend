import { FC } from "react";
import { SignUpForm } from "./SignUpForm/SignUpForm";

export const SigUpPage: FC = () => {
    return (
        <div className="page page-auth page-signup">
            <section className="section">
                <div className="container">
                    <div className="section__inner">
                        <div className="card">
                            <div className="card__inner">
                                <h3 className="card__title">
                                    Welcome to MedAI
                                </h3>
                                <div className="card__content">
                                    <SignUpForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
