
export type ClassName = 
    "X" | "Y" | "Z" | "A" | "B" | "C" | "D";

export type CalendarCell = {
    id: number,
    class: ClassName,
    has_classes: Class[],
}

export type Class = {
    id: number,
    name: ClassName,
    classDetails: ClassDetail[],
}

export type ClassDetail = {
    id: number,
    student: string,
    subject: string,
    memo: string,
    unit: string,
    leaned: string,
    goodPoint: string,
    issue: string,
    comment: string,
}