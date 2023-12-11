import { useState, useEffect, FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppService } from "../../../services/app/app.service";
import { IUpcomingAppointment } from "../../../models/response/IUpcomingAppointment";
import { ReschedulePopup } from "./ReschedulePopup";
import { CloseOutlined, CalendarOutlined } from '@ant-design/icons'
import { appStore } from "../../../store";

type UpcommingAppointmentProps = {
    setHasAppointment: (value: boolean) => void;
    setIsLoading: (value: boolean) => void;
}

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 450);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
};

export const UpcommingAppointment: FC<UpcommingAppointmentProps> = ({setHasAppointment, setIsLoading}) => {
    const isMobile = useIsMobile();
    const [appointmentData, setAppointmentData] = useState<IUpcomingAppointment | null >(null);
    const [showCancelPopup, setShowCancelPopup] = useState(false);
    const [showReschedulePopup, setShowReschedulePopup] = useState(false);
    const fetchAppointmentData = async () => {
        setIsLoading(true);
        const response = await AppService.getUpcomingAppointment();
        setAppointmentData(response.data)
        setHasAppointment(!!response.data)
        setIsLoading(false);
    };

    const updateAppointmentData = async () => {
        const response = await AppService.getUpcomingAppointment();
        setAppointmentData(response.data)
        setHasAppointment(!!response.data)
    }

    useEffect(() => {
        if (!appointmentData) 
        fetchAppointmentData()
        else updateAppointmentData()
    }, [showReschedulePopup, showCancelPopup]);

    const toggleCancelPopup = () => {
        setShowCancelPopup(!showCancelPopup);
    };

    const toggleReschedulePopup = () => {
        setShowReschedulePopup(!showReschedulePopup);
    };

    const handleCancelAppointment = async () => {
        if (appointmentData) {
            AppService.changeAppointmentStatus(appointmentData?._id, { newStatus: "Cancelled" });
            setShowCancelPopup(false);
            fetchAppointmentData();
        }
    };

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
                    <hr className="divider" />
                    <h4 className="appointmentTime">
                        <span className="appointmentDate">{appointmentData?.time}</span> {appointmentData?.date}
                    </h4>
                </div>
            </div>
            <div
                className="appointmentBox__column-2"
            >
                <div className="buttonContainer">
                <AnimatePresence>
                    {showCancelPopup && (
                        <motion.div
                            className="popup"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2>Cancel the appointment?</h2>
                            <button className="cancelButton" onClick={handleCancelAppointment}>
                                Cancel
                            </button>
                            <button className="rescheduleButton" onClick={toggleCancelPopup}>
                                Keep
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
                {isMobile ? 
                    <CloseOutlined onClick={toggleCancelPopup} className="cancelButton"/> :
                    <button className="cancelButton" onClick={toggleCancelPopup}>
                        Cancel
                    </button>

                }
                
                {
                    appointmentData && (
                        <ReschedulePopup
                            showPopup={showReschedulePopup}
                            togglePopup={toggleReschedulePopup}
                            appointmentData={appointmentData}
                        />
                    )
                }

                {isMobile ? 
                        <CalendarOutlined className="rescheduleButton" onClick={toggleCancelPopup} />:
                    <button className="rescheduleButton" onClick={toggleReschedulePopup}>
                        Reschedule
                    </button>
                }

                
            </div>
            </div>
            

        </div>

    );
};
