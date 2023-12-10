export type IGetAppointmentsResponse = IAppointment[];

export interface IAppointment {
    _id: string;
    patientRef: string;
    doctorRef: string;
    appointmentType: string;
    date: string;
    time: string;
    status: string;
    field: string;
}
