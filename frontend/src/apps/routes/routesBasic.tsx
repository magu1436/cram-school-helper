
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { ClassDetailsPage } from "@/features/classDetails";
import { CalendarPage } from "@/features/calender";


const routesBasic = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/detail/:date" element={<ClassDetailsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
        </>
    )
);

export default routesBasic;