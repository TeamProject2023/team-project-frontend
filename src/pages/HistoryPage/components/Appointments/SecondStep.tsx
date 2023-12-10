import { FC, useEffect, useState } from "react";
import dayjs from "dayjs";
import cn from "classnames";
import { RescheduleFormData } from "../../../../types/ui.types";
import { useFetch } from "../../../../hooks/useFetch";
import { ICheckSlotsResponse } from "../../../../models/response/ICheckSlotsResponse";
import { AppService } from "../../../../services/app/app.service";
import { Spinner } from "../../../../components/Spinner";
import { IAppointment } from "../../../../models/response/IGetAppointmentsResponse";

interface Props {
    record: IAppointment;
    formData: RescheduleFormData;
    value: string | null;
    setFormField: (key: keyof RescheduleFormData, value: string) => void;
}

export const SecondStep: FC<Props> = ({ formData, value, setFormField, record }) => {
    const [slots, setSlots] = useState<string[]>([]);
    const { makeRequest, isLoading } = useFetch<ICheckSlotsResponse>();
    useEffect(() => {
        const fetchFields = async () => {
            try {
                if (formData.newDate && record.field && record.appointmentType) {
                    const payload = { date: formData.newDate, field: record.field, type: record.appointmentType };
                    const response = await makeRequest(() => {
                        return AppService.checkSlots(payload);
                    });
                    setSlots(response);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchFields();
    }, []);
    const formattedDate = formData.newDate ?
        dayjs(+formData.newDate).format("DD MMMM YYYY").toString()
        : null;
    return (
        <>
            {
                isLoading ? <Spinner /> : (
                    <>

                        <div className="step-card step-card-slots">
                            <div className="input-box">
                                <h3 className="label">Choose available slot</h3>
                                {
                                    formattedDate && (
                                        <div className="selected-date">
                                            <span>{formattedDate}</span>
                                        </div>
                                    )
                                }
                                {slots.length === 0 ? (
                                    <div className="slots-info">
                                        <p className="slots-info__text">No available slots</p>
                                    </div>
                                )
                                    : (
                                        <ul className="list-slots">
                                            {slots.map((slot) => {
                                                return (
                                                    <li className="list__item" key={slot}>
                                                        <div
                                                            role="button"
                                                            className={cn("slot", { active: slot === value })}
                                                            onClick={() => setFormField("newTime", slot)}
                                                        >
                                                            <div className="slot__inner">
                                                                {slot}
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                            </div>
                        </div>
                    </>
                )}
        </>
    );
};
