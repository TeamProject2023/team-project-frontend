import { FC } from "react";

import { Header } from "../../components/Header";

import { Footer } from "../../components/Footer";

import gif from "../../assets/images/look-into-microscope-love-death-and-robots.gif";

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
            <div className="separator">Separator</div>
            <div className="content">Content</div>
            <Footer />
        </>
    );
};
