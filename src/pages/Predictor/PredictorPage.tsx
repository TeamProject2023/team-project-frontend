import { FC, useState } from "react";

import { Header } from "../../components/Header";

export const PredictorPage: FC = () => {
    const [result, setResult] = useState(false);
    return (
        <>
            <Header />
            <main className="predictor">
                <div className="predictor__container">
                    <form action="#" className="predictor__form">
                        <div className="predictor__item">
                            <div className="predictor__title">Znachennya 1</div>
                            <input type="text" className="predictor__input" />
                        </div>
                        <button type="button" className="predictor__btn" onClick={() => setResult(true)}>send</button>
                    </form>
                </div>
                <div className={`predictor__answer ${result ? "_active" : ""}`}>prosto blyat text</div>
            </main>
            <div className={`predictor__bg ${result ? "_active" : ""}`} onClick={() => setResult(false)}></div>
        </>
    );
};
