import { FC } from "react";
import { Select } from "antd";
import { IAppointmentFormData } from "../../../../types/ui.types";

interface Props {
    fields: string[];
    value: string | null;
    toggleSelectWay: () => void;
    setFormField: (key: keyof IAppointmentFormData, value: string | null) => void;
}

export const SelectFieldFromList: FC<Props> = ({ fields, toggleSelectWay, setFormField, value }) => {
    const handleChange = (field: string) => {
        setFormField("field", field);
    };
    return (
        <>
            {
                fields.length > 0 && (
                    <div className="step-card">
                        <div className="input-box">
                            <h3 className="label">Choose field</h3>
                            <Select
                                value={value}
                                showSearch={true}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label ?? "").includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
                                }
                                options={fields.map((item) => ({ value: item, label: item }))}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="info">Not sure which field to select?<br />
                            Click{" "}
                            <span
                                className="link"
                                onClick={() => {
                                    setFormField("field", null);
                                    toggleSelectWay();
                                }}
                            >here
                            </span>{" "}
                            to choose the field according to your symptoms.
                        </p>
                    </div>
                )}
        </>
    );
};
