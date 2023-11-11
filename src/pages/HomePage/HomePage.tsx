import { FC } from "react";

import { Header } from "../../components/Header";

import { Footer } from "../../components/Footer";
import { CustomForm } from "../../components/Form";

export const HomePage: FC = () => {
    return (
        <>
            <Header />

            <div className="main">
                <h1>Home page content</h1>
                <CustomForm />
            </div>

            <Footer />
        </>
    );
};
