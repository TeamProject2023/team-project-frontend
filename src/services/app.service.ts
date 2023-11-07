import { AxiosResponse } from "axios";
import { $api } from "../api";

export class AppService {
    public static async getUsers(): Promise<AxiosResponse<void>> {
        return $api.get<void>("/getUsers");
    }
}
