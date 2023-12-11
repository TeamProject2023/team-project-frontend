import { FC, useEffect, useCallback, useState } from "react";
import { UpcommingAppointment } from "./components/UpcommingAppointment";
import { Loader } from "../../components/Loader";
import NoUpcomingAppointment from "./components/NoUpcomingAppointment";
export const DashboardPage: FC = () => {
    const [hasAppointment, setHasAppointment] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="section section-dashboard">
            <div className="section__inner">
                <h2 className="section__title">Dashboard Page</h2>
                <div className="section__content">
                    <div className="card">
                        <div className="card__inner">
                            {isLoading && <Loader />}
                            {
                                hasAppointment ?
                                <UpcommingAppointment setHasAppointment={setHasAppointment} setIsLoading={setIsLoading} /> :
                                <NoUpcomingAppointment/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
