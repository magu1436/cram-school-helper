
import ClassCalendar from "./components/classCalendar";

export function CalendarPage() {
    
    const month = (new Date()).getMonth();

    return (
        <>
            <ClassCalendar />
        </>
    )

}