import { FC } from "react";
import { Header } from "../../components/Header";

export const Appointments: FC = () => {
    return (
        <>
            <Header />
            <main className="history">
                <div className="history__container">
                    <div className="history__title">Appointments</div>
                    <div className="history__content">
                        {appointments.map(({ name, doctor, date }) => (
                            <div className="history__item">
                                <div className="history__text">
                                    <div className="history__name">{name}</div>
                                    <div className="history__result">{doctor}</div>
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

const appointments = [
    {
        name: "Laba Bibo",
        doctor: "Dr. Wang",
        date: "11.11.2011",
    },
    {
        name: "Laba Bibo",
        doctor: "Dr. Wang",
        date: "11.11.2011",
    },
];
