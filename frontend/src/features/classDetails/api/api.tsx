import { toClass } from "@/api/mapper";
import type { Class, ClassApiObj } from "@/types/dataType";
import type { fetchReturnType } from "@/types/fetchType";
import { formatDate } from "@/utils/dateformatter";
import useFetch from "@/utils/fetch";
import { useEffect, useState } from "react";

export const createComment = (
    subject: string,
    teachingUnit: string,
    learned: string,
    goodPoint: string,
    issue: string,
) => {
    const prompt = {subject, teachingUnit, learned, goodPoint, issue}
    return JSON.stringify(prompt);
};

export const getClassesByDate = (date: Date): fetchReturnType<Class[]> => {
    const apiUrl = "/classes/getClassesByDate";

    const {data, isLoading, error} = useFetch<ClassApiObj[]>(
        apiUrl,
        "GET",
        {
            date: formatDate(date, "YYYY-MM-DD")
        },
    );

    const [ classes, setClasses ] = useState<Class[]>();

    useEffect(() => {
        if (!data) return;
        setClasses(data.map(d => toClass(d)));
    }, [data]);

    return { data: classes, isLoading, error }
};