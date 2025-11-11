import type {
    CalendarCell,
    CalendarCellApiObj,
    Class,
    ClassApiObj,
    ClassDetail,
    ClassDetailApiObj,
} from "@/types/dataType"


export const toCalendarCell = (apiObj: CalendarCellApiObj): CalendarCell => ({
    id: apiObj.id,
    classAt: new Date(apiObj.classAt),
    classes: apiObj.classes.map(c => toClass(c)),
})

export const toClass = (apiObj: ClassApiObj): Class => ({
    id: apiObj.id,
    name: apiObj.name,
    classDetails: apiObj.classDetails.map(cd => toClassDetail(cd)),
});

export const toClassDetail = (api: ClassDetailApiObj): ClassDetail => ({
    id: api.id,
    student: api.student,
    subject: (api.subject? api.subject: undefined),
    memo: (api.memo? api.memo: undefined),
    unit: (api.unit? api.unit: undefined),
    learned: (api.learned? api.learned: undefined),
    goodPoint: (api.goodPoint? api.goodPoint: undefined),
    issue: (api.issue? api.issue: undefined),
    comment: (api.comment? api.comment: undefined),
})