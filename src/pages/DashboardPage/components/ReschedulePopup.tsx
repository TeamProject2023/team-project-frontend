import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IAppointmentFormData } from "../../../types/ui.types";
import { ThirdStep } from '../../BookingPage/components/ThirdStep/ThirdStep';
import dayjs from "dayjs";
import { IUpcomingAppointment } from '../../../models/response/IUpcomingAppointment';
import { FourthStep } from '../../BookingPage/components/FourthStep/FourthStep';
import { AppService } from '../../../services/app/app.service';
import { Loader } from '../../../components/Loader';
import { Spinner } from '../../../components/Spinner';

type ReschedulePopupProps = {
    showPopup: boolean;
    togglePopup: () => void;
    appointmentData: IUpcomingAppointment
};

const currentDate = dayjs();

const defaultDate = currentDate.get("day") === 0 ? currentDate.add(1, "day") :
    currentDate.get("day") === 6 ? currentDate.add(2, "day") : currentDate;

const ReschedulePopup: React.FC<ReschedulePopupProps> = ({ showPopup, togglePopup, appointmentData  }) => {

    const [formData, setFormData] = useState<IAppointmentFormData>({
        field: appointmentData.field,
        type: appointmentData.appointmentType,
        date: defaultDate.valueOf().toString(),
        time: null,
    });
    const [step, setStep] = useState(0);
    const [rescheduleStatus, setRescheduleStatus] = useState<number | null>(null);
    
    useEffect(() => {
        if (step === 2) {
            handleRescheduleAppointment()
        }
        if (step === 3) {
            togglePopup();
            setStep(0);
            setFormData({
                field: appointmentData.field,
                type: appointmentData.appointmentType,
                date: defaultDate.valueOf().toString(),
                time: null,
            })
        }
    },[step]);

    const handleRescheduleAppointment = async () => {
       const res = await AppService.rescheduleAppointment({
            appointmentId: appointmentData._id, 
            newDate: formData.date || ' ', 
            newTime: formData.time || ' ', 
        })
        setRescheduleStatus(res.status)
    }

    const setFormField = (key: keyof IAppointmentFormData, value: string | null) => {
        setFormData((prevData) => ({ ...prevData, [key]: value }));
    };

    return (
        <>
        <AnimatePresence>
        {showPopup && (
                <motion.div 
                    className="fullscreen-popup"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                >
                <div className="popup-content">
                    <h2>Reschedule appointment</h2>
                    {step === 0 &&
                     <ThirdStep value={formData.date} setFormField={setFormField} />
                    }
                    {step === 1 && 
                        <div className="section-appointment">
                            <FourthStep value={formData.time} setFormField={setFormField} formData={formData} />
                        </div>
                    }
                    { step === 2 &&
                        <div className='status'>
                            {
                                rescheduleStatus === 200 ?
                                <h1 color='#0496ff'>Successfully rescheduled</h1> :
                                rescheduleStatus === 500 ?
                                <h1 color='#ff715b'>Error</h1> :
                                <Spinner/>
                            }
                        </div>
                    }
                    <div className="popup-buttons">
                        {step === 0 && 
                            <button className="cancelButton" onClick={togglePopup}>
                            Cancel
                            </button>
                        }
                        {step > 0 && step < 2 &&
                            <button className="cancelButton" onClick={()=>setStep(step-1)}>
                                Back
                            </button>
                        }
                        
                        <button className="rescheduleButton" onClick={()=>setStep(step+1)}>
                            {step < 2 ? "Next" : "Close"}
                        </button>
                    </div>
                        

                </div>
            
            </motion.div>
            )}
            </AnimatePresence>
        </>
    );
};

export default ReschedulePopup;
