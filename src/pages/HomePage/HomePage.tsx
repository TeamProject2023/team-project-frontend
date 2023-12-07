import { FC } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import gif from "../../assets/images/hero-img-1.jpg";
import { Separator } from "../../components/Separator";
import { Promo } from "../../components/Promo";

export const HomePage: FC = () => {
    return (
        <>
            <Header />
            <main className="main">
                <div className="first">
                    <div className="first__container">
                        <div className="first__text">
                            <p className="first__suptitle">We afford</p>
                            <h1 className="first__title">
                                Most accurate prediction
                            </h1>
                            <p className="first__subtitle">
                                95% accuracy of our AI model
                            </p>
                            <button className="first__button">Try now</button>
                        </div>
                        <div className="first__gif">
                            {" "}
                            <img src={gif} />
                        </div>
                    </div>
                </div>
                <Separator />
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
        </>
    );
};
