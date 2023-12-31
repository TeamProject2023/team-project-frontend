import { FC, useState } from "react";
import { Button, message, Steps } from "antd";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
import { FirstStep } from "./components/FirstStep/FirstStep";
import { SecondStep } from "./components/SecondStep/SecondStep";
import { ThirdStep } from "./components/ThirdStep/ThirdStep";
import { IAppointmentFormData } from "../../types/ui.types";
import { FourthStep } from "./components/FourthStep/FourthStep";
import { useFetch } from "../../hooks/useFetch";
import { AppService } from "../../services/app/app.service";
import { Loader } from "../../components/Loader";
import { Routes } from "../../types/routes.types";

const currentDate = dayjs();
const defaultDate = currentDate.get("day") === 0 ? currentDate.add(1, "day") :
    currentDate.get("day") === 6 ? currentDate.add(2, "day") : currentDate;

const defaultFormData = {
    field: null,
    type: null,
    date: defaultDate.valueOf().toString(),
    time: null,
};

export const BookingPage: FC = () => {
    const navigate = useNavigate();
    const { makeRequest: makeBookRequest, isLoading } = useFetch<void>();
    const [formData, setFormData] = useState<IAppointmentFormData>(defaultFormData);
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };

    const setFormField = (key: keyof IAppointmentFormData, value: string | null) => {
        setFormData((prevData) => ({ ...prevData, [key]: value }));
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const handleBook = async () => {
        try {
            await makeBookRequest(async () => {
                return AppService.createAppointment({
                    date: formData.date ?? "",
                    field: formData.field ?? "",
                    time: formData.time ?? "",
                    type: formData.type ?? "",
                    isVirtual: true,
                });
            });
            message.success("You have booked an appointment.");
            navigate(Routes.History);
        } catch (error) {
            message.error("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            <div className="section section-appointment">
                <div className="section__inner">
                    <h2 className="section__title">Book appointment</h2>
                    <div className="section__content">
                        <div className="card">

                            <div className="card__inner">
                                <Steps current={current} items={items} />
                                <div className="step-content">
                                    <div className="step-content__inner">
                                        {steps[current].key === "field" && <FirstStep value={formData.field} setFormField={setFormField} />}
                                        {steps[current].key === "type" && <SecondStep value={formData.type} setFormField={setFormField} />}
                                        {steps[current].key === "date" && <ThirdStep value={formData.date} setFormField={setFormField} />}
                                        {steps[current].key === "time" && <FourthStep value={formData.time} setFormField={setFormField} formData={formData} />}
                                    </div>
                                </div>
                                <div className="user-actions">
                                    <div className="user-actions_left">
                                        {current > 0 && (
                                            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                                                Previous
                                            </Button>
                                        )}
                                    </div>
                                    <div className="user-actions_right">
                                        {current < steps.length - 1 && (
                                            <Button
                                                type="primary"
                                                onClick={() => next()}
                                                disabled={!formData[steps[current].key]}
                                            >
                                                Next
                                            </Button>
                                        )}
                                        {current === steps.length - 1 && (
                                            <Button
                                                type="primary"
                                                onClick={handleBook}
                                                disabled={Object.values(formData).some((item) => !item)}
                                            >
                                                Book
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

const steps: {
    title: string;
    key: keyof IAppointmentFormData;
}[] = [
    { title: "Choose field", key: "field" },
    { title: "Choose type", key: "type" },
    { title: "Choose date", key: "date" },
    { title: "Choose available slot", key: "time" },
];
