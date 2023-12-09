import { useState, useEffect } from "react";
import { AppService } from "../../../services/app/app.service";
import { IUpcomingAppointment } from "../../../models/response/IUpcomingAppointment";

const UpcommingAppointment = () => {

    const [appointmentData, setAppointmentData] = useState<IUpcomingAppointment | null >(null);

    const fetchAppointmentData = async () =>{
        const response = await AppService.getUpcomingAppointment();
        setAppointmentData(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        fetchAppointmentData();
    },[])


    const handleRescheduleAppointment = async () => {
        
    }

        return (
            <div className="appointmentBox">
            <div
                className="appointmentBox__column-1"
            >
                <h1>Upcoming appointment</h1>
                <div className="appointmentData">
                    <h4 className="appointmentType">
                        {appointmentData?.appointmentType}
                    </h4>
                    <hr className="divider"/>
                    <h4 className="appointmentDate">
                        
                    </h4>
                    <h4 className="appointmentTime">
                        {appointmentData?.time} {appointmentData?.date}
                    </h4>
                </div>
            </div>
            <div
                className="appointmentBox__column-2"
            >
            </div>
            <div className="buttonContainer">
            <button className="cancelButton">
                    Cancel
                </button>
                <button className="rescheduleButton">
                    Reschedule
                </button>
            </div>
                
            </div>
        
        )

};

export default UpcommingAppointment;