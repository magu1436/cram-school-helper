import type { StudentTabProps } from "@/types/props";
import type { FC } from "react";
import { Tab } from "react-bootstrap";
import { ClassDetail } from "./classDetail";


export const StudentTab: FC<StudentTabProps> = ({
    name,
    eventKey,
    classDetailProps,
}) => {
    return (
        <Tab eventKey={eventKey} title={name}>
            <ClassDetail {...classDetailProps} />
        </Tab>
    )
}