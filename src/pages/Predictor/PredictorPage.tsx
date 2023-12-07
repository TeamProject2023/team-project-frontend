import { FC, useState } from "react";
import { AppService } from "../../services/app/app.service";
import { Header } from "../../components/Header";

import { Footer } from "../../components/Footer";
import { IPredictHeartDiseaseResponse } from "../../models/response/IPredictHeartDiseaseResponse";

export const PredictorPage: FC = () => {
    const [result, setResult] = useState<IPredictHeartDiseaseResponse | null>(null);

    const [inputData, setInputData] = useState({
        age: '',
        cholesterol: '',
        pressure: '',
    });

const handleChangeInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInputData(prev => ({
        ...prev,
        [name]: value
    }));
}

const handleSubmit = async () => {
    const res = await AppService.predictHeartDisease(inputData)
    setResult(res.data);
};

console.log(inputData)

    return (
        <>
            <Header />
            <main className="predictor">
                <div className="predictor__container">
                    <form
                        action="#"
                        className="predictor__form"
                    >
                        <div className="predictor__item">
                            <div className="predictor__title">Age</div>
                            <input
                                type="text"
                                name="age"
                                value={inputData.age}
                                onChange={handleChangeInputData}
                                className="predictor__input"
                            />
                        </div>
                        <div className="predictor__item">
                            <div className="predictor__title">Cholesterol</div>
                            <input
                                type="text"
                                name="cholesterol"
                                value={inputData.cholesterol}
                                className="predictor__input"
                                onChange={handleChangeInputData}
                            />
                        </div>
                        <div className="predictor__item">
                            <div className="predictor__title">Blood Pressure</div>
                            <input
                                type="text"
                                name="pressure"
                                value={inputData.pressure}
                                onChange={handleChangeInputData}
                                className="predictor__input"
                            />
                        </div>
                    </form>
                        <button
                            className="predictor__btn"
                            onClick={handleSubmit}
                        >
                            send
                        </button>
                </div>
                <div className={`predictor__answer ${result ? "_active" : ""}`}>
                    {
                        `Negative chance: ` + result?.negativeChance.toString().split('.')[1].slice(0,2) + `% Positive chance: ` + result?.positiveChance.toString().split('.')[1].slice(0,2) + "%"
                    }
                </div>
            </main>
            <div
                className={`predictor__bg ${result ? "_active" : ""}`}
                onClick={() => setResult(null)}
            ></div>
            <Footer />
        </>
    );
};
