import { formatDate } from "@/utils/dateformatter";
import { ClassDetail } from "./components/classDetail";
import { Tab, Tabs } from "react-bootstrap";
import { StudentTab } from "./components/studentTab";

export function ClassDetailsPage(){
    const date = new Date();

    const classes = [
        {class: "C", key: 0},
        {class: "D", key: 1},
    ]
    const dummyData = [
        {name: "山田太郎", key: 0},
        {name: "田中花子", key: 1},
    ]

    return (
        <>
            <div>{formatDate(date, "YYYY年M月D日(曜)")}</div>
            <Tabs defaultActiveKey={0}>
                {classes.map(c => {
                    return (
                        <Tab eventKey={c.key} title={c.class} key={c.key}>
                            <Tabs defaultActiveKey={0}>
                                {dummyData.map(s => {
                                    return (
                                        <StudentTab eventKey={s.key} name={s.name} key={s.key} />
                                    )
                                })}
                            </Tabs>
                        </Tab>
                    )
                })}
            </Tabs>
        </>
    )
}