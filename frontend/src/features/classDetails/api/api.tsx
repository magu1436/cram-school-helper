import { toClass } from "@/api/mapper";
import type { Class, ClassApiObj } from "@/types/dataType";
import type { fetchReturnType } from "@/types/fetchType";
import { formatDate } from "@/utils/dateformatter";
import useFetch from "@/utils/fetch";
import { useEffect, useState } from "react";
import type { AxiosRequestConfig } from "axios";
import axios from "@/utils/axios";

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
    const apiUrl = "/class/getClassesByDate";
    const dateUrl = "/" + formatDate(date, "YYYY-MM-DD")

    const {data, isLoading, error} = useFetch<ClassApiObj[]>(
        apiUrl + dateUrl,
        "GET",
    );

    const [ classes, setClasses ] = useState<Class[]>();

    useEffect(() => {
        if (!data) return;
        setClasses(data.map(d => toClass(d)));
    }, [data]);

    return { data: classes, isLoading, error }
};

export const registerClassDetail = async (classId: number, student: string) => {
    const config: AxiosRequestConfig = {
        url: "classDetail/create",
        method: "POST",
        data: {
            classId,
            classDetail: { student },
        },
    };
    const res = await axios<number>(config);
    return res.data;
}