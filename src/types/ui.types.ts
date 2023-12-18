export interface IMenuLink {
    link: string;
    title: string;
}

export enum ITabs {
    Appointments = "appointments",
    Results = "results",
}

export enum ISelectFieldWay {
    FromList = "fromList",
    BySymptoms = "bySymptoms",
}

export interface IAppointmentFormData {
    field: string | null;
    type: string | null;
    date: string | null;
    time: string | null;
}

export type RescheduleFormData = {
    newDate: string;
    newTime: string;
};
