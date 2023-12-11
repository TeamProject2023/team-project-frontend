import { FC } from "react";
import { Link } from "react-router-dom";
const NoUpcomingAppointment: FC = () => {
    return (
        <div className="appointmentBox">
            <div className="appointmentBox__column-1">
                <div className="no-appointment-wrapper">

                <h1 className="no-appointment">No upcoming appointments</h1>
                </div>
            </div>
            <div className="appointmentBox__column-2">
                <div className="buttonContainer">
                    <Link to="/book-an-appointment">
                        <button className="rescheduleButton"> 
                            Book
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default NoUpcomingAppointment;