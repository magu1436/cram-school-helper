import { formatDate } from "@/utils/dateformatter"
import type { ClassEvent, ClassInfo } from "../types/event"
import type { CalendarCell } from "@/types/dataType";
import type { AxiosRequestConfig } from "axios";
import axios from "@/utils/axios";


export const createCalendarCell = async (date: Date) => {
    
    const url = "/calendar/create/" + formatDate(date, "YYYY-MM-DD");
    const config: AxiosRequestConfig = {
        url: url,
        method: "POST",
    };
    await axios(config);
}

/**
 * サーバー側から受け取った授業データをカレンダーに予定として表示できるように  
 * 変換するための関数.  
 * @param info 授業情報
 * @returns `fullcalendar` で `events` として渡すための連想配列オブジェクト
 */
export const convertClassInfo2Event = (info: ClassInfo): ClassEvent => {

    let title = "";
    info.classes.forEach(c => {
        title += c;
    });

    const start = formatDate(info.date, "YYYY-MM-DD");

    const display = "background";
    return { title, display, start };
}

/**
 * サーバー側から受け取った授業データをカレンダーに予定として表示できるように  
 * 変換するための関数.  
 * @param cell 授業情報
 * @returns `fullcalendar` で `events` として渡すための連想配列オブジェクト
 */
export const convertCalendarCell2Event = (cell: CalendarCell): ClassEvent => {

    let title = "";
    cell.classes.forEach(c => {
        title += c.name;
    });

    const start = formatDate(cell.classAt, "YYYY-MM-DD");

    const display = "background";
    return { title, display, start };
}