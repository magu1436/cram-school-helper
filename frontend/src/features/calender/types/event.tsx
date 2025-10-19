import type { Class } from "@/features/classDetails/types/classRelated"

export type ClassInfo = {
    date: Date,
    classes: Class[],
    id: number,
}

export type ClassEvent = {
    title: string,
    display: string,
    start: string,
}