
import { useParams } from "react-router-dom";
import classNames from "classnames";
import { Tab, Tabs } from "react-bootstrap";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import { formatDate } from "@/utils/dateformatter";
import { StudentTabs } from "./components/studentTabs";
import type { StudentTab, ClassTab } from "./types/classRelated";
import { getClassesByDate } from "./api/api";

export function ClassDetailsPage(){

    const { date: dateQuery } = useParams();
    if (!dateQuery) {
        alert("何らかのエラーが生じました. 管理者に連絡してください. \na query param is undefined.");
        throw new Error("A query param is undefined in 'ClassDetailsPage'.");
    };

    const date = new Date(dateQuery);

    const { data: classes, isLoading, error } = getClassesByDate(date);

    const [classTabs, setClassTabs] = useState<ClassTab[]>([]);

    if (classes){
            setClassTabs(
                classes.map(c => {
                    const [studentTabs, setStudentTabs] = useState<StudentTab[]>(
                        c.classDetails?.map(cd => {
                            return {
                                name: cd.student,
                                classDetail: cd,
                            }
                        })
                    );
                    return {
                        class: c.name,
                        tabStateSet: {value: studentTabs, setter: setStudentTabs}
                    };
                })
            );
    }

    return (
        <div  className={classNames("h-100")}>
            <div>{formatDate(date, "YYYY年M月D日(曜)")}</div>
            <Tabs defaultActiveKey={0}>
                {classTabs.map((c, i) => {
                    return (
                        <Tab eventKey={i} title={c.class} key={i}>
                            <StudentTabs studentTabsStateSet={c.tabStateSet} />
                        </Tab>
                    )
                })}
            </Tabs>
        </div>
    )
}