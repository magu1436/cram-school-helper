import type { FC } from "react";
import dayGrigPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { type DateClickArg } from "@fullcalendar/interaction";

import type { ClassCalenderProps } from "../types/props";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@/utils/dateformatter";

const ClassCalendarId = "ClassCalendar";

const ClassCalendar: FC<ClassCalenderProps> = ({
    className
}) => {

    return (
        <div id={ClassCalendarId} className={className}>
            <FullCalendar
                plugins={[dayGrigPlugin, interactionPlugin]}
                dateClick={handleDateClick}
            />
        </div>
    )
}

const handleDateClick = (arg: DateClickArg) => {
    console.log(formatDate(arg.date, "YYYY/MM/DD"));
}

export default ClassCalendar;