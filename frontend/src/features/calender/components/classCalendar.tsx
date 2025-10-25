import { useState, type FC } from "react";
import dayGrigPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { type DateClickArg } from "@fullcalendar/interaction";

import type { ClassCalenderProps } from "../types/props";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@/utils/dateformatter";
import { SimpleModal } from "@/components/simpleModal";
import { useNavigate } from "react-router-dom";
import { convertClassInfo2Event, createClass } from "../api/event";
import type { ClassEvent, ClassInfo } from "../types/event";
import { getClassEvents } from "../api/connection";

const ClassCalendarId = "ClassCalendar";

const ClassCalendar: FC<ClassCalenderProps> = ({
    className
}) => {

    const dummyData: ClassInfo[] = [
        {id: 0, date: new Date(), classes: ["C", "D"]},
        {id: 0, date: new Date("2025-10-18"), classes: ["B", "D"]},
        {id: 0, date: new Date("2025-10-17"), classes: ["C", "D"]},
    ]
    
    // const events: ClassEvent[] = dummyData.map(cf => convertClassInfo2Event(cf));
    const events = getClassEvents();

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const [clickedDate, setClickedDate] = useState<Date>(new Date());
    const nav = useNavigate();
    const handleDateClick = (arg: DateClickArg) => {
        setClickedDate(arg.date);
        for (const d of dummyData){
            if (
                arg.date.getDate() === d.date.getDate() &&
                arg.date.getMonth() === d.date.getMonth() &&
                arg.date.getFullYear() === d.date.getFullYear()
            ){
                nav(`/detail/${arg.dateStr}`);
                return;
            }
        }
        setModalVisible(true);
    };
    const handleModalSubmit = async () => {
        await createClass(clickedDate);
        nav(`/detail/${formatDate(clickedDate, "YYYY-MM-DD")}`)
    };

    return (
        <div id={ClassCalendarId} className={className}>
            <FullCalendar
                plugins={[dayGrigPlugin, interactionPlugin]}
                locale="ja"
                events={events}
                dateClick={handleDateClick}
            />
            <SimpleModal
                visibleStateSet={{value: modalVisible, setter: setModalVisible}}
                submitButtonLabel="授業を作成"
                submitFunc={handleModalSubmit}
            >
                <div>まだ授業が作成されていません。</div>
                <div>授業を作成しますか？</div>
            </SimpleModal>
        </div>
    )
}

export default ClassCalendar;