import { formatDate } from "@/utils/dateformatter"
import type { ClassEvent, ClassInfo } from "../types/event"


export const createClass = async (date: Date) => {
    // ここにフェッチ関数を作成
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