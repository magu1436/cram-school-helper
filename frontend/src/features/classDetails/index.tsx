import { formatDate } from "@/utils/dateformatter";
import { Tab, Tabs } from "react-bootstrap";
import { StudentTabs } from "./components/studentTabs";

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
                            <StudentTabs studentTabs={[{name: "山田"}, {name: "田中"}]} />
                        </Tab>
                    )
                })}
            </Tabs>
        </>
    )
}