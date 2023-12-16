import { FC, useEffect } from "react";
import { Table, Space, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useFetch } from "../../../../hooks/useFetch";
import { AppService } from "../../../../services/app/app.service";
import { LoaderPortal } from "../../../../components/LoaderPortal";
import { appStore } from "../../../../store";
import { IPredictionData, IPredictionHistory } from "../../../../models/response/IPredictionResults";
import { IPredictHeartDiseasePayload } from "../../../../models/request/IPredictHeartDiseasePayload";
import { IPredictBrainStrokePayload } from "../../../../models/request/IPredictBrainStrokePayload";

import { IPredictHeartDiseaseResponse } from "../../../../models/response/IPredictHeartDiseaseResponse";

type ExpandedRowProps = {
    data: IPredictHeartDiseasePayload | IPredictBrainStrokePayload;
    model: string;
    result: string | IPredictHeartDiseaseResponse;
};

export const Results: FC = () => {
    const { makeRequest, isLoading } = useFetch<IPredictionHistory>();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await makeRequest(() => {
                    return AppService.getSavedPredictions();
                });
                appStore.setResults(response.reverse());
            } catch (error) {
                appStore.setResults([]);
                console.error(error);
            }
        };
        fetchResults();
    }, []);
    return (
        <>
            {isLoading && <LoaderPortal />}
            <div className="table-box">
                <Table
                    columns={columns}
                    rowKey={record => record._id}
                    expandable={{
                        expandedRowRender: (record) => <ExpandedRow model={record.model} data={{ ...record.inputData }} result={record.result} />,
                        rowExpandable: (record) => !!record.model,
                    }}
                    dataSource={appStore.results}
                />
            </div>
        </>
    );
};

const columns: ColumnsType<IPredictionData> = [
    {
        title: "Date",
        dataIndex: "date",
        render: (text) => <>{text}</>,
    },
    {
        title: "Time",
        dataIndex: "time",
        render: (text) => <>{text}</>,
    },
    {
        title: "Model",
        dataIndex: "model",
        render: (text) => <>{text}</>,
    },
];

const ExpandedRow: FC<ExpandedRowProps> = ({ data, model, result }) => {
    if (model === "HeartDisease") {
        // @ts-ignore
        const { age, cholesterol, bloodPressure } = data as IPredictHeartDiseasePayload;
        const { positiveChance } = result as IPredictHeartDiseaseResponse;
        return (
            <div className="row">
                <div className="col-1">
                    <p>Input data</p>
                    <Space size={[0, 8]} wrap={true}>
                        <div>Age:</div>
                        <Tag>{age}</Tag>
                        <div>Cholesterol:</div>
                        <Tag>{cholesterol}</Tag>
                        <div>B. pressure:</div>
                        <Tag>{bloodPressure}</Tag>
                    </Space>
                </div>
                <div className="col-2">
                    <p>Result</p>
                    <Space size={[0, 8]} wrap={true}>
                        <div>Chance:</div>
                        <Tag>{Math.round(positiveChance * 100)}%</Tag>

                    </Space>
                </div>
            </div>
        );
    }

    const {
        gender,
        age,
        hypertension,
        heart_disease,
        ever_married,
        work_type,
        Residence_type,
        avg_glucose_level,
        bmi,
        smoking_status,
    } = data as IPredictBrainStrokePayload;
    return (
        <div className="row">
            <div className="col-1">
                <p>Input data</p>
                <Space size={[0, 8]} wrap={true}>
                    <div>Age:</div>
                    <Tag>{age}</Tag>
                    <div>Gender:</div>
                    <Tag>{gender}</Tag>
                    <div>Hypertension:</div>
                    <Tag>{hypertension}</Tag>
                    <div>Heart disease:</div>
                    <Tag>{heart_disease}</Tag>
                    <div>Ever married</div>
                    <Tag>{ever_married}</Tag>
                    <div>Work type</div>
                    <Tag>{work_type}</Tag>
                    <div>Residence type</div>
                    <Tag>{Residence_type}</Tag>
                    <div>Glucose level</div>
                    <Tag>{avg_glucose_level}</Tag>
                    <div>BMI</div>
                    <Tag>{bmi}</Tag>
                    <div>Smoking status</div>
                    <Tag>{smoking_status}</Tag>
                </Space>
            </div>
            <div className="col-2">
                <p>Result</p>
                <Space size={[0, 8]} wrap={true}>
                    <div>Chance:</div>
                    <Tag>{Math.round(Number(result) * 100)}%</Tag>

                </Space>
            </div>
        </div>
    );
};
