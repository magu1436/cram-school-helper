import type { CalendarCellApiObj } from "@/types/dataType";
import useFetch from "@/utils/fetch"
import { useEffect, useState } from "react";
import type { ClassEvent } from "../types/event";
import { convertCalendarCell2Event } from "./event";
import { toCalendarCell } from "@/api/mapper";

/**
 * サーバー側からデータベースにある `CalendarCell` オブジェクトを取得し,  
 * イベントオブジェクトに変換して返すメソッド.  
 * 返り値はステートオブジェクトで, データベースからの取得が終了した際に  
 * 値が変更される.
 * @returns 授業情報があるカレンダーのイベントオブジェクト
 */
export const getClassEvents = () => {
    const { data, error } = useFetch<CalendarCellApiObj[]>("/calendar/getAll");

    const [events, setEvents] = useState<ClassEvent[]>();

    useEffect(() => {
        if ( error ) throw error;
        if ( !data ) return;
        const cells = data.map(d => toCalendarCell(d));
        console.log(cells);
        console.log(typeof cells);
        setEvents(cells.map(cc => convertCalendarCell2Event(cc)));
    }, [data]);

    return events;
}