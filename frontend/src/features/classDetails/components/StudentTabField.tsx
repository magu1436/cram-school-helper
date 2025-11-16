import { type FC } from "react";
import type { StudentTabFieldProps } from "../types/props";
import { ClassDetail } from "./classDetail";
import { Button, Tab, Tabs } from "react-bootstrap";

export const StudentTabFieldId = "student-tabs";
export const StudentTabClassName = "student-tab";

const ADD_BUTTON_KEY = "addButtonKey";

export const StudentTabField: FC<StudentTabFieldProps> =({
    classDetails, 
    referedStudentStateSet, 
    onAddClassDetail,
    onDeleteClassDetail,
    classId,
}) => {
    const onSelect = (key: string | null) => {
        if (!key) throw new Error("StudentTabKey is null.");
        if (key != ADD_BUTTON_KEY){
            referedStudentStateSet.setter(Number(key));
            return;
        }
        onAddClassDetail();
    };
    return(
        <>
            <Tabs
                id={StudentTabFieldId}
                activeKey={referedStudentStateSet.value}
                onSelect={onSelect}
            >
                {classDetails.map(cd => {
                    return (
                        <Tab
                            eventKey={cd.id}
                            title={cd.student}
                            key={cd.id}
                            className={StudentTabClassName}
                        >
                            <ClassDetail classDetail={cd} classId={classId} />
                            <Button
                                onClick={onDeleteClassDetail}
                                className="my-2"
                            >授業情報を削除する</Button>
                        </Tab>
                    );
                })}
                <Tab
                    eventKey={ADD_BUTTON_KEY}
                    title="+"
                />
            </Tabs>
        </>
    )
}