import { toClass } from "@/api/mapper";
import type { Class, ClassApiObj, ClassDetail, ClassName } from "@/types/dataType";
import type { fetchReturnType } from "@/types/fetchType";
import { formatDate } from "@/utils/dateformatter";
import useFetch from "@/utils/fetch";
import { useEffect, useState } from "react";
import type { AxiosRequestConfig } from "axios";
import axios from "@/utils/axios";

export const createComment = async (
    subject: string,
    unit: string,
    learned: string,
    goodPoint: string,
    issue: string,
) => {
    const prompt = {subject, unit, learned, goodPoint, issue}
    const res = await axios<string>({
        url: "/openai/createComment",
        method: "POST",
        data: prompt,
    });
    return res.data
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

export const deleteClassDetail = async(classDetailId: number) => {
    const config: AxiosRequestConfig = {
        url: "classDetail/delete/" + classDetailId,
        method: "DELETE",
    };
    await axios(config);
}

export const registerClassAt = async (date: Date, name: ClassName) => {
    const config: AxiosRequestConfig = {
        url: "class/createAt",
        method: "POST",
        data: {
            classAt: formatDate(date, "YYYY-MM-DD"),
            class_: { name },
        }
    };
    const res = await axios<number>(config);
    return res.data;
}

export const updateClassDetail = async (classDetail: ClassDetail, classId: number) => {
    const config: AxiosRequestConfig = {
        url: "classDetail/update",
        method: "PUT",
        data: {
            classId,
            classDetail,
        },
    };
    await axios(config);
};