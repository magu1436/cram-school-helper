import { formatDate } from "@/utils/dateformatter";
import { ClassDetail } from "./components/classDetail";

export function ClassDetailsPage(){
    const date = new Date();

    return (
        <>
            <div>{formatDate(date, "YYYY年M月D日(曜)")}</div>
            <ClassDetail />
        </>
    )
}