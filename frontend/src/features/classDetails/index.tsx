import { formatDate } from "@/utils/dateformatter";

export function ClassDetailsPage(){
    const date = new Date();

    return (
        <>
            <div>{formatDate(date, "YYYY年M月D日(曜)")}</div>
        </>
    )
}