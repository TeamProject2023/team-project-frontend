import { FC } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Promo } from "../../components/Promo";
import { Hero } from "./sections/Hero";
import { Statistics } from "./sections/Statistics";

export const HomePage: FC = () => {
    return (
        <div className="page page-home">
            <Header />
            <main className="main">
                <Hero />
                <Statistics />
                <div className="promo">
                    <Promo />
                </div>
                <div className="first">
                    <div className="first__container">
                        <div className="first__text">
                            <p className="first__suptitle">We have</p>
                            <h1 className="first__title">Content</h1>
                            <p className="first__subtitle">here</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
};
