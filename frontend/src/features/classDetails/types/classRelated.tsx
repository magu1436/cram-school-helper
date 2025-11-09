import type { StateSet } from "@/types/state";
import type { ClassDetail } from "@/types/dataType";

export type ClassName = "X" | "Y" | "Z" | "A" | "B" | "C" | "D";

export type ClassTab = {
    class: ClassName,
    tabStateSet: StateSet<StudentTab[]>,
}

export type StudentTab = {
    name: string,
    classDetail?: ClassDetail,
};

export type Subject = {
    "国語": string[],
    "数学": string[],
    "英語": string[],
    "理科": string[],
    "社会": string[],
    "その他": string[],
    [key: string]: string[],
};