import type { CalendarCell } from "@/types/dataType";
import useFetch from "@/utils/fetch"
import { useEffect, useState } from "react";
import type { ClassEvent } from "../types/event";
import { convertCalendarCell2Event } from "./event";

/**
 * サーバー側からデータベースにある `CalendarCell` オブジェクトを取得し,  
 * イベントオブジェクトに変換して返すメソッド.  
 * 返り値はステートオブジェクトで, データベースからの取得が終了した際に  
 * 値が変更される.
 * @returns 授業情報があるカレンダーのイベントオブジェクト
 */
export const getClassEvents = () => {
    const { data, error } = useFetch<CalendarCell[]>("/calendar/getAll");

    const [events, setEvents] = useState<ClassEvent[]>();

    useEffect(() => {
        if ( error ) throw error;
        console.log(data);
        console.log(typeof data);
        if ( data ) setEvents(data.map(cc => convertCalendarCell2Event(cc)));
    }, [data]);

    return events;
}