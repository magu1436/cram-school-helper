import type { StudentTabsProps } from "@/features/classDetails/types/props";
import type { FC } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { ClassDetail } from "./classDetail";

export const StudentTabs: FC<StudentTabsProps> = ({studentTabs}) => {
    
    return (
        <Tabs defaultActiveKey={0}>
            {studentTabs.map((s, i) => {
                return (
                    <Tab eventKey={i} title={s.name} key={s + String(i)}>
                        <ClassDetail {...s.classDetail} />
                    </Tab>
                )
            })}
        </Tabs>
    )
}