import { FC } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import NotFoundImg from "../../assets/images/not-found/404.png";
import { Routes } from "../../types/routes.types";

export const NotFound: FC = () => {
    return (
        <div className="page-wrapper">
            <div className="page page-not-found">
                <Header />
                <main className="main">
                    <section className="section section-not-found">
                        <div className="container">
                            <div className="section__inner">
                                <div className="img-box">
                                    <img src={NotFoundImg} alt="Not found" className="img" />
                                </div>
                                <h2 className="section__title">Oops! Page Not Found</h2>
                                <p className="section__text">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                                <Link to={Routes.Main} className="btn btn-primary btn-back">Back To Home</Link>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
};
