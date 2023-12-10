import { FC } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "./sections/Hero";
import { Statistics } from "./sections/Statistics";
import { About } from "./sections/About";
import { Info } from "../../components/Info";

export const HomePage: FC = () => {
    return (
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
    );
};
