/* eslint-disable @typescript-eslint/no-floating-promises */
import { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Modal, Steps, Table, Tag, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CloseOutlined, CalendarOutlined } from "@ant-design/icons";
import { useFetch } from "../../../../hooks/useFetch";
import { IAppointment, IGetAppointmentsResponse } from "../../../../models/response/IGetAppointmentsResponse";
import { AppService } from "../../../../services/app/app.service";
import { LoaderPortal } from "../../../../components/LoaderPortal";
import { Loader } from "../../../../components/Loader";
import { RescheduleFormData } from "../../../../types/ui.types";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { appStore } from "../../../../store";

export const Appointments: FC = observer(() => {
    const { makeRequest, isLoading } = useFetch<IGetAppointmentsResponse>();

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await makeRequest(() => {
                    return AppService.getAppointments();
                });
                appStore.setAppointments(response.reverse());
            } catch (error) {
                appStore.setAppointments([]);
                console.error(error);
            }
        };
        fetchAppointments();
    }, []);
    return (
        <>
            {isLoading && <LoaderPortal />}
            <div className="table-box">
                <Table columns={columns} dataSource={appStore.appointments} />
            </div>
        </>
    );
});

const columns: ColumnsType<IAppointment> = [
    {
        title: "Date",
        dataIndex: "date",
        render: (text) => <>{text}</>,
    },
    {
        title: "Time",
        dataIndex: "time",
        render: (text) => <>{text}</>,
    },
    {
        title: "Type",
        dataIndex: "appointmentType",
        render: (text) => <>{text}</>,
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (text) => <Tag 
        color={
            text === "Completed" ? 'green' : 
            text === "Scheduled" ? 'blue' :
            'red'
        }
        >{text}</Tag>,
    },
    {
        title: "Action",
        render: (_, record) => <ActionCell record={record} />,
    },
];

interface ActionProps {
    record: IAppointment;
}
const ActionCell: FC<ActionProps> = observer(({ record }) => {
    const [open, setOpen] = useState(false);
    const { makeRequest: makeChangeStatusRequest, isLoading: isChangeAppointmentLoading } = useFetch<void>();

    const closeModal = () => {
        setOpen(false);
    };

    const handleModalCancel = () => {
        setOpen(false);
    };
    const handleCancel = async () => {
        try {
            makeChangeStatusRequest(() => {
                return AppService.changeAppointmentStatus(record._id, {
                    newStatus: "Canceled",
                });
            });
        } catch (error) {

        }
    };

    const handleReschedule = () => {
        setOpen(true);
    };
    return (
        <>
            {isChangeAppointmentLoading && <Loader />}

            <div className="user-actions">
                <div className="user-actions__inner">
                    {record.status !== "Canceled" && record.status !== "Completed" && (
                        <>
                            <CalendarOutlined className="btn btn-reschedule" onClick={handleReschedule} />
                            <CloseOutlined onClick={handleCancel} className="btn btn-cancel" />
                        </>
                    )}
                </div>
            </div>

            <Modal
                title="Reschedule appointment"
                open={open}
                footer={null}
                onCancel={handleModalCancel}
                className="modal-reschedule"
            >
                <RescheduleAppointmentModal record={record} closeModal={closeModal} />
            </Modal>
        </>
    );
});

interface RescheduleAppointmentProps {
    record: IAppointment;
    closeModal: () => void;
}

const RescheduleAppointmentModal: FC<RescheduleAppointmentProps> = observer(({ record, closeModal }) => {
    const { makeRequest } = useFetch<IGetAppointmentsResponse>();
    const fetchAppointments = async () => {
        try {
            const response = await makeRequest(() => {
                return AppService.getAppointments();
            });
            appStore.setAppointments(response);
        } catch (error) {
            appStore.setAppointments([]);
            console.error(error);
        }
    };

    const { makeRequest: makeRescheduleRequest } = useFetch<void>();
    const [formData, setFormData] = useState<RescheduleFormData>({
        newDate: "",
        newTime: "",
    });
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };

    const setFormField = (key: keyof RescheduleFormData, value: string | null) => {
        setFormData((prevData) => ({ ...prevData, [key]: value }));
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const handleReschedule = async () => {
        try {
            await makeRescheduleRequest(() => {
                return AppService.rescheduleAppointment(record._id, {
                    newDate: formData.newDate,
                    newTime: formData.newTime,
                });
            });
            await fetchAppointments();
            closeModal();
            message.success("Your appointment was successfully rescheduled");
        } catch (error) {

        }
    };

    return (
        <div className="card">

            <div className="card__inner">
                <Steps current={current} items={items} />
                <div className="step-content">
                    <div className="step-content__inner">
                        {steps[current].key === "newDate" && <FirstStep value={formData.newDate} setFormField={setFormField} />}
                        {steps[current].key === "newTime" && <SecondStep record={record} value={formData.newTime} setFormField={setFormField} formData={formData} />}
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
                                onClick={handleReschedule}
                                disabled={Object.values(formData).some((item) => !item)}
                            >
                                Reschedule
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

const steps: {
    title: string;
    key: keyof RescheduleFormData;
}[] = [
    { title: "Choose date", key: "newDate" },
    { title: "Choose available slot", key: "newTime" },
];
