import type { Class } from "@/types/dataType";
import type { fetchReturnType } from "@/types/fetchType";
import { formatDate } from "@/utils/dateformatter";
import useFetch from "@/utils/fetch";

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

    return useFetch<Class[]>(
        apiUrl,
        "GET",
        {
            date: formatDate(date, "YYYY-MM-DD")
        },
    );
};