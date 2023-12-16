import { IPredictBrainStrokePayload } from "../request/IPredictBrainStrokePayload";
import { IPredictHeartDiseasePayload } from "../request/IPredictHeartDiseasePayload";
import { IPredictHeartDiseaseResponse } from "./IPredictHeartDiseaseResponse";

export interface IPredictionData {
    _id: string;
    userRef: string;
    date: string;
    model: string;
    time: string;
    inputData: IPredictBrainStrokePayload | IPredictHeartDiseasePayload;
    result: IPredictHeartDiseaseResponse | string;
};

export type IPredictionHistory = IPredictionData[]