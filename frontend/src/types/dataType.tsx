
export type ClassName = 
    "X" | "Y" | "Z" | "A" | "B" | "C" | "D";

export type CalendarCell = {
    id: number,
    classAt: Date;
    classes: Class[],
};

export type CalendarCellApiObj = {
    id: number,
    classAt: DateString,
    classes: ClassApiObj[],
}

export type Class = {
    id: number,
    name: ClassName,
    classDetails: ClassDetail[],
};

export type ClassApiObj = {
    id: number,
    name: ClassName,
    classDetails: ClassDetailApiObj[],
};

export type ClassDetail = {
    id: number,
    student?: string,
    subject?: string,
    memo?: string,
    unit?: string,
    learned?: string,
    goodPoint?: string,
    issue?: string,
    comment?: string,
};

export type ClassDetailApiObj = {
    id: number,
    student: string | null,
    subject: string | null,
    memo: string | null,
    unit: string | null,
    learned: string | null,
    goodPoint: string | null,
    issue: string | null,
    comment: string | null,
};

export type DateString = string;