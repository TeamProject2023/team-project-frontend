import { FC, useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { Appointments } from "./components/Appointments/Appointments";
import { Results } from "./components/Results/Results";

export const HistoryPage: FC = () => {
    const [tabKey, setTabKey] = useState("1");

    return (
        <div className="section section-history">
            <Tabs activeKey={tabKey} defaultActiveKey="1" items={items} onChange={(value) => setTabKey(value)} />
        </div>
    );
};
const items: TabsProps["items"] = [
    {
        key: "1",
        label: "Appointments",
        children: <Appointments />,
        className: "tab-children",
    },
    {
        key: "2",
        label: "Results",
        children: <Results />,
    },
];
