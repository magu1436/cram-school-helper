import type { Setter, StateSet } from "@/types/state";
import type { StudentTab } from "./classRelated";
import type { ClassDetail} from "@/types/dataType";

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
    classId: number,
    classDetail: ClassDetail,
};

export type StudentTabsProps = {
    studentTabsStateSet: StateSet<StudentTab[]>,
}

export type AddStudentTabModalProps = {
    visibleStateSet: StateSet<boolean>,
    studentTabsStateSet: StateSet<StudentTab[]>,
    keySetter: Setter<number>,
}

export type ClassTabFieldProps = {
    date: Date,
}

export type StudentTabFieldProps = {
    classDetails: ClassDetail[],
    referedStudentStateSet: StateSet<number | undefined>,
    onAddClassDetail: () => void,
    onDeleteClassDetail: () => void,
    classId: number,
}