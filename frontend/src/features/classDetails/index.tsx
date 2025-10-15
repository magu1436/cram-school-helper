import { formatDate } from "@/utils/dateformatter";
import { TabField, Tab } from "@/components/tab";

export function ClassDetailsPage(){
    const date = new Date();
    const tabs = [
        new Tab(<div>test1</div>, "test1"),
        new Tab(<div>test2</div>, "test2"),
    ]

    return (
        <>
            <div>{formatDate(date, "YYYY年M月D日(曜)")}</div>
            <TabField tabs={tabs} />
        </>
    )
}