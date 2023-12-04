import { ISymptom } from "./IGetSymptomsResponse";

export type IGetSymptomsToDisease = ISymptomToDisease[];

export interface ISymptomToDisease {
    nameOfDisease: string;
    symptoms: ISymptom[];
}
