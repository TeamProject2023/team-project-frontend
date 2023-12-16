import { FC, useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { AiHeader } from "./components/AiHeader";
import { HeartDiseasePredictor } from "./components/HeartDisease";
import { BrainStrokePredictor } from "./components/BrainStroke";

export const PredictorPage: FC = () => {
    const [tabKey, setTabKey] = useState("1");

    return (
        <>

            <div className="section section-predictor">
                <div className="section__inner">
                    <h2 className="section__title">AI Tools</h2>
                    <div className="section__content">
                        <div className="card">
                            <div className="card__inner">

                                <AiHeader />
                                <Tabs activeKey={tabKey} defaultActiveKey="1" items={items} onChange={(value) => setTabKey(value)} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
const items: TabsProps["items"] = [
    {
        key: "1",
        label: "Heart disease",
        children: <HeartDiseasePredictor />,
        className: "tab-children",
    },
    {
        key: "2",
        label: "Brain stroke",
        children: <BrainStrokePredictor />,
    },
];
