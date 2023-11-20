import { FC } from "react";

import { Header } from "../../components/Header";

import { Footer } from "../../components/Footer";

import gif from "../../assets/images/look-into-microscope-love-death-and-robots.gif";
import { Separator } from "../../components/Separator";
import {Promo} from "../../components/Promo";

export const HomePage: FC = () => {
    return (
        <>
            <Header />

            <div className="content">
                <div className="column">
                    <p>We afford</p>
                    <h1>Most accurate prediction</h1>
                    <p>95% accuracy of our AI model</p>
                    <button className="main-button">Try now</button>
                </div>
                <div className="column"> <img src={gif} /></div>
            </div>
            <Separator />
            <div className="content"><Promo /></div>
            <Footer />
        </>
    );
};
