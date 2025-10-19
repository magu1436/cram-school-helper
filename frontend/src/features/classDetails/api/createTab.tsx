import type { StateSet } from "@/types/state";
import type { StudentTab } from "../types/classRelated";


export const addStudentTab = async (
    studentTabsStateSet: StateSet<StudentTab[]>,
    name: string,
) => {
    const newTab: StudentTab = { name };
    studentTabsStateSet.setter([...studentTabsStateSet.value, newTab]);
}