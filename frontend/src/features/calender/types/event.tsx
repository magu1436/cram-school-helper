import type { ClassName } from "@/features/classDetails/types/classRelated"

export type ClassInfo = {
    date: Date,
    classes: ClassName[],
    id: number,
}

export type ClassEvent = {
    title: string,
    display: string,
    start: string,
}