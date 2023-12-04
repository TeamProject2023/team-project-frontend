import { FC, useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useFetch } from "../../../../hooks/useFetch";
import { IAppointment, IGetAppointmentsResponse } from "../../../../models/response/IGetAppointmentsResponse";
import { AppService } from "../../../../services/app/app.service";
import { mockAppointments } from "../../../../utils/mockData";
import { LoaderPortal } from "../../../../components/LoaderPortal";

export const Appointments: FC = () => {
    const [appointments, setAppointments] = useState<IAppointment[]>([]);
    const { makeRequest, isLoading } = useFetch<IGetAppointmentsResponse>();

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await makeRequest(() => {
                    return AppService.getAppointments();
                });
            } catch (error) {
                console.error(error);
            } finally {
                setAppointments(mockAppointments);
            }
        };
        fetchAppointments();
    }, []);
    return (
        <>
            {isLoading && <LoaderPortal />}
            <div className="table-box">
                <Table columns={columns} dataSource={appointments} />
            </div>
        </>
    );
};

const columns: ColumnsType<IAppointment> = [
    {
        title: "Type",
        dataIndex: "appointmentType",
        render: (text) => <>{text}</>,
    },
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
        title: "Status",
        dataIndex: "status",
        render: (text) => <>{text}</>,
    },
];
