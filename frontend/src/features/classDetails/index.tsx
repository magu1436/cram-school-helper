
import { useParams } from "react-router-dom";
import classNames from "classnames";
import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import { formatDate } from "@/utils/dateformatter";
import { StudentTabs } from "./components/studentTabs";
import type { StudentTab, ClassTab } from "./types/classRelated";

export function ClassDetailsPage(){

    const { date: dateQuery } = useParams();
    if (!dateQuery) {
        alert("何らかのエラーが生じました. 管理者に連絡してください. \na query param is undefined.");
        throw new Error("A query param is undefined in 'ClassDetailsPage'.");
    };

    const date = new Date(dateQuery);

    const [studentTabsC, setStudentTabsC] = useState<StudentTab[]>([
        {name: "山田太郎"},
        {name: "田中花子"},
    ]);

    const [studentTabsD, setStudentTabsD] = useState<StudentTab[]>([
        {name: "リーパー"},
        {name: "トレーサー"},
    ]);

    const classes: ClassTab[] = [
        {class: "C", tabStateSet: {value: studentTabsC, setter: setStudentTabsC}},
        {class: "D", tabStateSet: {value: studentTabsD, setter: setStudentTabsD}},
    ]

    return (
        <div  className={classNames("h-100")}>
            <div>{formatDate(date, "YYYY年M月D日(曜)")}</div>
            <Tabs defaultActiveKey={0}>
                {classes.map((c, i) => {
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