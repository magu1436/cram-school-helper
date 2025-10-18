import type { Setter } from "@/types/stateSetter";
import type { ClassDetail, StudentTab } from "./classRelated";

export type TextBoxProps = {
    title: string,
    valueSetter: Setter<string>,
    stateValue?: string;
    className?: string,
    rows?: number,
    placeholder?: string,
    readonly?: boolean,
}

export type ClassDetailProps = ClassDetail;

export type StudentTabsProps = {
    studentTabs: StudentTab[],
}