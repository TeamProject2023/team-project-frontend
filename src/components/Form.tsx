import React, { useState } from "react";
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect } from "antd";
import "../styles/components/CustomForm.scss";

type SizeType = Parameters<typeof Form>[0]["size"];

export const CustomForm: React.FC = () => {
    const [componentSize, setComponentSize] = useState<SizeType | "default">("default");

    const onFormLayoutChange = ({ size }: { size: SizeType; }) => {
        setComponentSize(size);
    };

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize as SizeType}
            className="form-container"
        >
            <Form.Item label="Form Size" name="size">
                <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Input" name="input">
                <Input />
            </Form.Item>
            <Form.Item label="Select" name="select">
                <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="TreeSelect" name="treeSelect">
                <TreeSelect
                    treeData={[
                        { title: "Light", value: "light", children: [{ title: "Bamboo", value: "bamboo" }] },
                    ]}
                />
            </Form.Item>
            <Form.Item label="Cascader" name="cascader">
                <Cascader
                    options={[
                        {
                            value: "zhejiang",
                            label: "Zhejiang",
                            children: [{ value: "hangzhou", label: "Hangzhou" }],
                        },
                    ]}
                />
            </Form.Item>
            <Form.Item label="DatePicker" name="datePicker">
                <DatePicker />
            </Form.Item>
            <Form.Item label="InputNumber" name="inputNumber">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Switch" name="switch" valuePropName="checked">
                <Switch />
            </Form.Item>
            <Form.Item label="Button" name="button">
                <Button>ABOBA</Button>
            </Form.Item>
        </Form>
    );
};
