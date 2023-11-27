import { FC } from "react";
import { Header } from "../../components/Header";

export const PredictionHistoryPage: FC = () => {
    return (
        <>
            <Header />
            <main className="history">
                <div className="history__container">
                    <div className="history__title">Predictor history</div>
                    <div className="history__content">
                        {history.map(({ name, result, date }) => (
                            <div className="history__item">
                                <div className="history__text">
                                    <div className="history__name">{name}</div>
                                    <div className="history__result">{result}</div>
                                </div>
                                <div className="history__date">{date}</div>
                            </div>
                        ))};
                    </div>
                </div>
            </main>
        </>
    );
};

const history = [
    {
        name: "change of cancer",
        result: "80% chance",
        date: "7.7.2007",
    },
    {
        name: "change of cancer",
        result: "30% chance",
        date: "7.7.2007",
    },
];
