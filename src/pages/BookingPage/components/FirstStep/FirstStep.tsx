import { FC, useEffect, useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { IGetFieldsResponse } from "../../../../models/response/IGetFieldsResponse";
import { AppService } from "../../../../services/app/app.service";
import { Spinner } from "../../../../components/Spinner";
import { SelectFieldFromList } from "./SelectFieldFromList";
import { IAppointmentFormData, ISelectFieldWay } from "../../../../types/ui.types";
import { SelectFieldBySymptoms } from "./SelectFieldBySymptoms";

interface Props {
    value: string | null;
    setFormField: (key: keyof IAppointmentFormData, value: string | null) => void;
}

export const FirstStep: FC<Props> = ({ setFormField, value }) => {
    const [selectWay, setSelectWay] = useState(ISelectFieldWay.FromList);
    const [fields, setFields] = useState<string[]>([]);
    const { isLoading, makeRequest } = useFetch<IGetFieldsResponse>();
    useEffect(() => {
        const fetchFields = async () => {
            try {
                const response = await makeRequest(() => {
                    return AppService.getFields();
                });
                setFields(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchFields();
    }, []);

    const toggleSelectWay = () => {
        setSelectWay((prev) => prev === ISelectFieldWay.BySymptoms ? ISelectFieldWay.FromList : ISelectFieldWay.BySymptoms);
    };

    return (
        <>
            {
                isLoading ? <Spinner /> :
                    selectWay === ISelectFieldWay.FromList ? (
                        <SelectFieldFromList
                            value={value}
                            fields={fields}
                            toggleSelectWay={toggleSelectWay}
                            setFormField={setFormField}
                        />
                    ) : (
                        <SelectFieldBySymptoms
                            toggleSelectWay={toggleSelectWay}
                            setFormField={setFormField}
                        />
                    )}
        </>
    );
};
