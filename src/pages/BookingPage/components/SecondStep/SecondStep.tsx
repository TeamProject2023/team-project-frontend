import { FC, useState, useEffect } from "react";
import { Select } from "antd";
import { IAppointmentFormData } from "../../../../types/ui.types";
import { IGetTypesResponse } from "../../../../models/response/IGetTypesResponse";
import { useFetch } from "../../../../hooks/useFetch";
import { AppService } from "../../../../services/app/app.service";
import { Spinner } from "../../../../components/Spinner";

interface Props {
    value: string | null;
    setFormField: (key: keyof IAppointmentFormData, value: string) => void;
}

export const SecondStep: FC<Props> = ({ value, setFormField }) => {
    const [types, setTypes] = useState<string[]>([]);
    const { isLoading, makeRequest } = useFetch<IGetTypesResponse>();
    useEffect(() => {
        const fetchFields = async () => {
            try {
                const response = await makeRequest(() => {
                    return AppService.getTypes();
                });
                setTypes(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchFields();
    }, []);

    const handleChange = (type: string) => {
        setFormField("type", type);
    };

    return (
        <>
            {
                isLoading ? <Spinner /> : (
                    <>
                        {
                            types.length > 0 && (
                                <div className="step-card">
                                    <div className="input-box">
                                        <h3 className="label">Choose appointment type</h3>
                                        <Select
                                            value={value}
                                            showSearch={true}
                                            placeholder="Search to Select"
                                            options={types.map((item) => ({ value: item, label: item }))}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            )}
                    </>
                )}
        </>
    );
};
