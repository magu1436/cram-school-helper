
import { useParams } from "react-router-dom";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css"

import { formatDate } from "@/utils/dateformatter";
import { getClassesByDate } from "./api/api";
import { ClassTabField } from "./components/ClassTabField";

export function ClassDetailsPage(){

    const { date: dateQuery } = useParams();
    if (!dateQuery) {
        alert("何らかのエラーが生じました. 管理者に連絡してください. \na query param is undefined.");
        throw new Error("A query param is undefined in 'ClassDetailsPage'.");
    };

    const date = new Date(dateQuery);

    const { data, isLoading, error } = getClassesByDate(date);

    return (
        <div  className={classNames("h-100")}>
            <div>{formatDate(date, "YYYY年M月D日(曜)")}</div>
            <ClassTabField classes={data} />
        </div>
    )
}