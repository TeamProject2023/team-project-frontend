import { FC } from "react";
import { Calendar } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { RescheduleFormData } from "../../../../types/ui.types";

interface Props {
    value: string | null;
    setFormField: (key: keyof RescheduleFormData, value: string) => void;
}

export const FirstStep: FC<Props> = ({ value, setFormField }) => {
    const handleChange = (date: Dayjs) => {
        const ms = dayjs(date).valueOf();
        setFormField("newDate", ms.toString());
    };

    return (
        <div className="calendar-box">
            <Calendar
                value={value ? dayjs(+value) : undefined}
                fullscreen={false}
                onChange={handleChange}
                validRange={[dayjs().add(0, "days"), dayjs().add(1, "year")]}
                disabledDate={(current) => {
                    return current && current < dayjs() || current.get("day") === 0 || current.get("day") === 6;
                }}
            />
        </div>
    );
};
