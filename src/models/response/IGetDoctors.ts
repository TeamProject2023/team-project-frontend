export type IGetDoctorsResponse = IDoctor[];

export interface IDoctor {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    specialty: string;
    workHours: string[];
}
