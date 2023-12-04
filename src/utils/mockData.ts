import { IGetAppointmentsResponse } from "../models/response/IGetAppointmentsResponse";

export const mockAppointments: IGetAppointmentsResponse = [
    {
        _id: "0",
        appointmentType: "test type",
        date: "test date",
        doctorRef: "test doctorRef",
        patientRef: "test patientRef",
        status: "test status",
        time: "test time",
    },
    {
        _id: "1",
        appointmentType: "test 2 type",
        date: "test 2 date",
        doctorRef: "test 2 doctorRef",
        patientRef: "test 2 patientRef",
        status: "test 2 status",
        time: "test 2 time",
    },
];
