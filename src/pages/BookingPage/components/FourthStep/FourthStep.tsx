import { FC, useEffect, useState } from "react";
import dayjs from "dayjs";
import cn from "classnames";
import { IAppointmentFormData } from "../../../../types/ui.types";
import { useFetch } from "../../../../hooks/useFetch";
import { ICheckSlotsResponse } from "../../../../models/response/ICheckSlotsResponse";
import { AppService } from "../../../../services/app/app.service";
import { Spinner } from "../../../../components/Spinner";

interface Props {
    formData: IAppointmentFormData;
    value: string | null;
    setFormField: (key: keyof IAppointmentFormData, value: string) => void;
}

export const FourthStep: FC<Props> = ({ formData, value, setFormField }) => {
    const [slots, setSlots] = useState<string[]>([]);
    const { makeRequest, isLoading } = useFetch<ICheckSlotsResponse>();
    useEffect(() => {
        const fetchFields = async () => {
            try {
                if (formData.date && formData.field && formData.type) {
                    const payload = { date: formData.date, field: formData.field, type: formData.type };
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
    const formattedDate = formData.date ?
        dayjs(+formData.date).format("DD MMMM YYYY").toString()
        : null;
    console.log(slots);
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
                                                            onClick={() => setFormField("time", slot)}
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
