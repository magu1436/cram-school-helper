import type { Setter } from "@/components/stateSetter";

export type Subject = {
    "国語": string[],
    "数学": string[],
    "英語": string[],
    "理科": string[],
    "社会": string[],
    "その他": string[],
    [key: string]: string[],
}

export type TextBoxProps = {
    title: string,
    valueSetter: Setter<string>,
    stateValue?: string;
    className?: string,
    rows?: number,
    placeholder?: string,
    readonly?: boolean,
}

export type ClassDetailProps = {
    subject?: string,
    memo?: string,
    unit?: string,
    learned?: string,
    goodPoint?: string,
    issue?: string,
    comment?: string,
}

export type StudentTabProps = {
    name: string,
    eventKey: number | string,
    classDetailProps?: ClassDetailProps,
}