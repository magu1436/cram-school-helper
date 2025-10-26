import { useState, type FC } from "react";
import dayGrigPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { type DateClickArg } from "@fullcalendar/interaction";

import type { ClassCalenderProps } from "../types/props";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@/utils/dateformatter";
import { SimpleModal } from "@/components/simpleModal";
import { useNavigate } from "react-router-dom";
import { createClass } from "../api/event";
import { getClassEvents } from "../api/connection";

const ClassCalendarId = "ClassCalendar";

const ClassCalendar: FC<ClassCalenderProps> = ({
    className
}) => {
    const events = getClassEvents();

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const [clickedDate, setClickedDate] = useState<Date>(new Date());
    const nav = useNavigate();
    const handleDateClick = (arg: DateClickArg) => {
        if ( !events ) {
            setModalVisible(true);
            return;
        }
        setClickedDate(arg.date);
        for (const e of events){
            const d = new Date(e.start);
            if (
                arg.date.getDate() === d.getDate() &&
                arg.date.getMonth() === d.getMonth() &&
                arg.date.getFullYear() === d.getFullYear()
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