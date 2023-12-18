import { Button, Form, Input, Select, Row, Col } from "antd";
import { FC, useState } from "react";
import { AppService } from "../../../services/app/app.service";
import { Spinner } from "../../../components/Spinner";
import { ISaveBrainStrokeResult } from "../../../models/request/ISaveBrainStrokeResult";

const emptyInputData = {
    gender: "",
    age: "",
    hypertension: "",
    heart_disease: "",
    ever_married: "",
    work_type: "",
    Residence_type: "",
    avg_glucose_level: "",
    bmi: "",
    smoking_status: "",
};

const { Option } = Select;

export const BrainStrokePredictor: FC = () => {
    const [form] = Form.useForm();
    const [result, setResult] = useState<number | null>();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [saveStatus, setSaveStatus] = useState<number | null>(null);
    const [displayWarning, setDisplayWaring] = useState(false);
    const [inputData, setInputData] = useState(emptyInputData);
    const [inputDataSaved, setInputDataSaved] = useState(emptyInputData);

    const handleChangeInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleChangeSelectData = (value: string, fieldName: string) => {
        setInputData(prev => ({
            ...prev,
            [fieldName]: value,
        }));
    };

    const save = async () => {
        setIsSaving(true);
        if (result || result === 0) {
            const payload: ISaveBrainStrokeResult = {
                positiveChance: result.toString(),
                gender: inputDataSaved.gender,
                age: inputDataSaved.age,
                hypertension: inputDataSaved.hypertension,
                heart_disease: inputDataSaved.heart_disease,
                ever_married: inputDataSaved.ever_married,
                work_type: inputDataSaved.work_type,
                Residence_type: inputDataSaved.Residence_type,
                avg_glucose_level: inputDataSaved.avg_glucose_level,
                bmi: inputDataSaved.bmi,
                smoking_status: inputDataSaved.smoking_status,
            };

            const res = await AppService.saveBrainStrokeResult(payload);
            if (res.status === 200) {
                setSaveStatus(200);
                setInputData(emptyInputData);
                form.resetFields();
                setInputDataSaved(emptyInputData);
            }

            setIsSaving(false);
        }
    };

    const handleSubmit = async () => {
        setSaveStatus(null);
        setIsProcessing(true);
        const res = await AppService.predictBrainStroke(inputData);
        if (res.data || res.data === 0) {
            setResult(res.data);
            if (Number(res.data) * 100 > 10) { setDisplayWaring(true); }
        }
        setInputDataSaved(inputData);
        setIsProcessing(false);
    };

    return (
        <div>
            <div className="predictor">
                <div className="col-input">
                    <Form
                        form={form}
                        name="BrainStroke"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={handleSubmit}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="gender"
                            label="Gender"
                            rules={[{ required: true, message: "Select an option" }]}
                        >
                            <Select
                                value={inputData.gender}
                                onChange={(value) => handleChangeSelectData(value, "gender")}
                                allowClear={true}
                            >
                                <Option key="Male" value="Male">Male</Option>
                                <Option key="Female" value="Female">Female</Option>
                            </Select>
                        </Form.Item>
                        <Row>
                            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                                <Form.Item
                                    name="Residence_type"
                                    label="Residence area"
                                    rules={[{ required: true, message: "Select an option" }]}
                                >
                                    <Select
                                        value={inputData.Residence_type}
                                        onChange={(value) => handleChangeSelectData(value, "Residence_type")}
                                        allowClear={true}
                                    >
                                        <Option value="Urban">Urban</Option>
                                        <Option value="Rural">Rural</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                                <Form.Item
                                    name="hypertension"
                                    label="Do you suffer with hypertension?"
                                    rules={[{ required: true, message: "Select an option" }]}
                                >
                                    <Select
                                        value={inputData.hypertension}
                                        onChange={(value) => handleChangeSelectData(value, "hypertension")}
                                        allowClear={true}
                                    >
                                        <Option value="0">No</Option>
                                        <Option value="1">Yes</Option>
                                    </Select>
                                </Form.Item>

                            </Col>
                        </Row>

                        <Row>
                            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                                <Form.Item
                                    name="heart_disease"
                                    label="Do you have any heart disease?"
                                    rules={[{ required: true, message: "Select an option" }]}
                                >
                                    <Select
                                        value={inputData.heart_disease}
                                        onChange={(value) => handleChangeSelectData(value, "heart_disease")}
                                        allowClear={true}
                                    >
                                        <Option value="0">No</Option>
                                        <Option value="1">Yes</Option>
                                    </Select>
                                </Form.Item>

                            </Col>
                            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                                <Form.Item
                                    name="ever_married"
                                    label="Have you ever been married?"
                                    rules={[{ required: true, message: "Select an option" }]}
                                >
                                    <Select
                                        value={inputData.ever_married}
                                        onChange={(value) => handleChangeSelectData(value, "ever_married")}
                                        allowClear={true}
                                    >
                                        <Option value="0">No</Option>
                                        <Option value="1">Yes</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                                <Form.Item
                                    name="work_type"
                                    label="Select your work type"
                                    rules={[{ required: true, message: "Select an option" }]}
                                >
                                    <Select
                                        value={inputData.work_type}
                                        onChange={(value) => handleChangeSelectData(value, "work_type")}
                                        allowClear={true}
                                    >
                                        <Option value="Private">Private</Option>
                                        <Option value="Self-employed">Self-employed</Option>
                                        <Option value="Govt_job">Goverment job</Option>
                                        <Option value="children">Work with children</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                                <Form.Item
                                    name="smoking_status"
                                    label="Select your smoking status"
                                    rules={[{ required: true, message: "Select an option" }]}
                                >
                                    <Select
                                        value={inputData.smoking_status}
                                        onChange={(value) => handleChangeSelectData(value, "smoking_status")}
                                        allowClear={true}
                                    >
                                        <Option value="formerly smoked">Formerly smoked</Option>
                                        <Option value="never smoked">Never smoked</Option>
                                        <Option value="smokes">Smokes</Option>
                                        <Option value="Unknown">Unknown</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                                <Form.Item<string>
                                    label="Age"
                                    name="age"
                                    rules={[{ required: true, message: "Please input your age!" }]}
                                >
                                    <Input
                                        name="age"
                                        value={inputData.age}
                                        onChange={handleChangeInputData}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                                <Form.Item<string>
                                    label="BMI"
                                    name="bmi"
                                    rules={[{ required: true, message: "Please input your blood pressure!" }]}
                                >
                                    <Input
                                        name="bmi"
                                        value={inputData.bmi}
                                        onChange={handleChangeInputData}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item<string>
                            label="Avg glucose level"
                            name="avg_glucose_level"
                            rules={[{ required: true, message: "Please input your glucose level!" }]}
                        >
                            <Input
                                name="avg_glucose_level"
                                value={inputData.avg_glucose_level}
                                onChange={handleChangeInputData}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Process
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="col-result">
                    {
                    result || result === 0 ? (
                        <>
                            <div className="result-window">
                                <h3>Chance of having a brain stroke:</h3>
                                <h1 className="result-text">{
                     `${(Number(result) * 100).toString().split(".")[0]} %`
                    }
                                </h1>
                            </div>

                            <button
                                disabled={isSaving || saveStatus === 200}
                                className="save-button"
                                onClick={save}
                            >
                                {saveStatus === 200 ? "Saved" : "Save"}
                            </button>
                        </>
                    )
                        :
                        isProcessing ?
                            <Spinner /> : <></>
                }
                </div>
            </div>
            {displayWarning && (
                <div className="warning">
                    <h1 className="text">We strongly recommend to consult a doctor!</h1>
                </div>
            )}
        </div>
    );
};
