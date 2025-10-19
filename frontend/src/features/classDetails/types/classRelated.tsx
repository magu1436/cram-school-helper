import type { StateSet } from "@/types/state";

export type Class = "X" | "Y" | "Z" | "A" | "B" | "C" | "D";

export type ClassDetail = {
    subject?: string,
    memo?: string,
    unit?: string,
    learned?: string,
    goodPoint?: string,
    issue?: string,
    comment?: string,
};

export type ClassTab = {
    class: Class,
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