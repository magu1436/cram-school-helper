
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { ClassDetailsPage } from "@/features/classDetails";


const routesBasic = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/detail/:date" element={<ClassDetailsPage />} />
        </>
    )
);

export default routesBasic;