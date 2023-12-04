export type IGetDiseaseToSpecialty = IDiseaseToSpecialty[];
export type IDisease = string;

export interface IDiseaseToSpecialty {
    specialty: string;
    diseases: IDisease[];
}
