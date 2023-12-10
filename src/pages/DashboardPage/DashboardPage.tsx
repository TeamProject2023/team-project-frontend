import { FC } from "react";
import UpcommingAppointment from "./components/UpcommingAppointment";

export const DashboardPage: FC = () => {
    return (
        <div className="section section-dashboard">
            <div className="section__inner">
                <h2 className="section__title">Dashboard Page</h2>
                <div className="section__content">
                    <div className="card">
                        <div className="card__inner">
                            <UpcommingAppointment />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
