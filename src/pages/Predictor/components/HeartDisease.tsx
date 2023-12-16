import { Button, Form, Input } from 'antd';
import { FC, useState } from 'react';
import { AppService } from "../../../services/app/app.service";
import { IPredictHeartDiseaseResponse } from "../../../models/response/IPredictHeartDiseaseResponse";
import { Spinner } from '../../../components/Spinner';
import { ISaveHeartDiseaseResult } from '../../../models/request/ISaveHeartDiseaseResult';

const emptyInputData = {
    age: "",
    cholesterol: "",
    pressure: "",
}

const HeartDiseasePredictor: FC = () => {
    const [form] = Form.useForm();
    const [result, setResult] = useState<IPredictHeartDiseaseResponse | null>();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [saveStatus, setSaveStatus] = useState<number | null>(null);
    const [displayWarning, setDisplayWaring] = useState(false);
    const [inputData, setInputData] = useState(emptyInputData);
    const [inputDataSaved, setInputDataSaved] = useState(emptyInputData)

    const handleChangeInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { name, value } = event.target;
        setInputData(prev => ({
            ...prev,
            [name]: value,
        }));
    };
      
      const save = async () => {
        setIsSaving(true)
        if (result) {
        const payload: ISaveHeartDiseaseResult = {
            negativeChance: result.negativeChance.toString(),
            positiveChance: result.positiveChance.toString(),
            age: inputDataSaved.age,
            cholesterol: inputDataSaved.cholesterol,
            bloodPressure: inputDataSaved.pressure
        }
        
        const res = await AppService.saveHeartDiseaseResult(payload)
        if (res.status === 200) {
            setSaveStatus(200)
            setInputData(emptyInputData)
            form.resetFields();
            setInputDataSaved(emptyInputData)
        }
        
        setIsSaving(false)
        }
      };

    const handleSubmit = async () => {
        setSaveStatus(null)
        setIsProcessing(true);
        const res = await AppService.predictHeartDisease(inputData);
        if (res.data.positiveChance) {
            setResult(res.data);
            if (Number(res.data.positiveChance)*100 > 20) setDisplayWaring(true);
        }
        setInputDataSaved(inputData);
        setIsProcessing(false);
    };

    return (
        <div>
        <div className='predictor'>
            <div className='col-input'>
                <Form
                form={form}
                name="HeartDisease"
                layout='vertical'
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                autoComplete="off"
            >
                <Form.Item<string>
                label="Age"
                name="age"
                rules={[{ required: true, message: 'Please input your age!' }]}
                >
                <Input
                name="age"
                value={inputData.age}
                onChange={handleChangeInputData}
                />
                </Form.Item>

                <Form.Item<string>
                label="Cholesterol"
                name="cholesterol"
                rules={[{ required: true, message: 'Please input your cholesterol level!' }]}
                >
                <Input
                    name="cholesterol"
                    value={inputData.cholesterol}
                    onChange={handleChangeInputData}
                />
                </Form.Item>
                <Form.Item<string>
                label="Pressure"
                name="pressure"
                rules={[{ required: true, message: 'Please input your blood pressure!' }]}
                >
                <Input
                    name="pressure"
                    value={inputData.pressure}
                    onChange={handleChangeInputData}
                />
                </Form.Item>

                <Form.Item >
                <Button type="primary" htmlType="submit">
                    Process
                </Button>
                </Form.Item>
            </Form>
            </div>
            <div className='col-result'>
                {
                    result ?
                    <>
                    <div className="result-window">
                    <h3>Chance of having a heart disease:</h3>
                    <h1 className='result-text'>{
                    (Number(result?.positiveChance)* 100).toString().split('.')[0] + ' %'
                    }
                    </h1>
                    </div> 
                    
                    <button 
                        disabled={isSaving || saveStatus === 200}
                        className='save-button' 
                        onClick={save}>
                            { saveStatus === 200 ? 'Saved' : 'Save' }
                    </button>
                    </>
                    : 
                isProcessing ? 
                <Spinner/> : <></> 
                }
            </div>
        </div>
        {displayWarning &&
                <div className="warning">
                    <h1 className="text">We strongly recommend to consult a doctor!</h1>
                </div>
                }
        </div>
    )
}

export default HeartDiseasePredictor;