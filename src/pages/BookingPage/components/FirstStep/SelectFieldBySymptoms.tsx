/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import { Select } from "antd";
import { AxiosResponse } from "axios";
import { AppService } from "../../../../services/app/app.service";
import { IDoctor, IGetDoctorsResponse } from "../../../../models/response/IGetDoctors";
import { IGetSymptomsResponse, ISymptom } from "../../../../models/response/IGetSymptomsResponse";
import {
    IDiseaseToSpecialty,
    IGetDiseaseToSpecialty,
} from "../../../../models/response/IGetDiseaseToSpecialtyResponse";
import { Spinner } from "../../../../components/Spinner";
import { IAppointmentFormData } from "../../../../types/ui.types";
import { IGetSymptomsToDisease, ISymptomToDisease } from "../../../../models/response/IGetSymptomsToDiseaseResponse";

interface Props {
    toggleSelectWay: () => void;
    setFormField: (key: keyof IAppointmentFormData, value: string | null) => void;
}

export const SelectFieldBySymptoms: FC<Props> = ({ toggleSelectWay, setFormField }) => {
    const [symptomsToDisease, setSymptomsToDisease] = useState<ISymptomToDisease[]>([]);
    const [diseaseToSpecialty, setDiseaseToSpecialty] = useState<IDiseaseToSpecialty[]>([]);
    const [doctorList, setDoctorList] = useState<IDoctor[]>([]);
    const [possibleSymptoms, setPossibleSymptoms] = useState<ISymptom[]>([]);
    const [selectedSymptoms, setSelectedSymptoms] = useState<ISymptom[]>([]);
    const [selectedDiseases, setSelectedDiseases] = useState<ISymptomToDisease[]>([]);
    const [selectedDoctor, setSelectedDoctor] = useState<IDoctor[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const pendingSymptoms = AppService.getSymptoms();
                const pendingDoctor = AppService.getDoctors();
                const pendingSymptomsToDisease = AppService.getSymptomsToDisease();
                const pendingDiseaseToSpecialty = AppService.getDiseaseToSpecialty();
                const pendingData: [
                    symptoms: Promise<AxiosResponse<IGetSymptomsResponse, any>>,
                    doctors: Promise<AxiosResponse<IGetDoctorsResponse, any>>,
                    sToD: Promise<AxiosResponse<IGetSymptomsToDisease, any>>,
                    pToS: Promise<AxiosResponse<IGetDiseaseToSpecialty, any>>,
                ] = [pendingSymptoms, pendingDoctor, pendingSymptomsToDisease, pendingDiseaseToSpecialty];
                const responses = await Promise.all(pendingData);
                setPossibleSymptoms(responses[0].data);
                setDoctorList(responses[1].data);
                setSymptomsToDisease(responses[2].data);
                setDiseaseToSpecialty(responses[3].data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetchData();
    }, []);

    useEffect(() => {
        const possibleSpecialty = getSpecialtyByDisease(selectedDiseases, diseaseToSpecialty);
        // setSelectedDoctor(processDetermineDoctor(possibleSpecialty, doctorList));
    }, [selectedDiseases]);
    useEffect(() => {
        const PossibleDiseases = getDiseasesBySymptoms(symptomsToDisease, selectedSymptoms);
        const diseaseSymptoms = new Set(PossibleDiseases.flatMap(disease => disease.symptoms));
        setSelectedDiseases(PossibleDiseases);
        setPossibleSymptoms([...diseaseSymptoms]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedSymptoms]);
    return (
        <>
            {isLoading ? <Spinner /> : (
                <div className="step-card">
                    <div className="input-box">
                        <span>
                            {
                                selectedDoctor.map(doctor => (
                                    <button key={doctor.email}>
                                        {doctor.firstName}
                                    </button>
                                ))
                            }
                        </span>

                        <h3 className="label">Select symptoms</h3>
                        <Select
                            mode="multiple"
                            allowClear={true}
                            style={{ width: "100%" }}
                            placeholder="Please select"
                            value={selectedSymptoms}
                            onChange={(options) => {
                                setSelectedSymptoms(options);
                                // filterDiseases();
                            }}
                            options={possibleSymptoms.map((item) => ({ label: item, value: item }))}
                        />
                    </div>
                    <p className="info">Already know which field to select?<br />
                        Click{" "}
                        <span
                            className="link"
                            onClick={() => {
                                setFormField("field", null);
                                toggleSelectWay();
                            }}
                        >here
                        </span>{" "}
                        to choose the field from the list.
                    </p>
                </div>
            )}
        </>
    );
};

const getDiseasesBySymptoms = (symptomsToDisease: ISymptomToDisease[], selectedSymptoms: ISymptom[]): ISymptomToDisease[] => {
    const result = symptomsToDisease.filter(disease =>
        selectedSymptoms.every(symptom => disease.symptoms.includes(symptom)),
    );
    return result;
};

const getSpecialtyByDisease = (diseases: ISymptomToDisease[], specialties: IDiseaseToSpecialty[]): string[] => {
    const selectedDiseaseNames = diseases.map(disease => disease.nameOfDisease);
    return specialties.filter(specialty =>
        specialty.diseases.some(disease => selectedDiseaseNames.includes(disease)),
    ).map(specialty => specialty.specialty);
};

const processDetermineDoctor = (specialties: string[], doctorList: IDoctor[]) => {
    return doctorList.filter(doctor => specialties.includes(doctor.specialty));
};
