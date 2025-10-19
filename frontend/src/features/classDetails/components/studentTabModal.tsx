import { useState, type FC } from "react";
import type { AddStudentTabModalProps } from "../types/props";
import { addStudentTab } from "../api/createTab";
import { SimpleModal } from "@/components/simpleModal";
import type { StateSet } from "@/types/state";
import type { StudentTab } from "../types/classRelated";
import { TextBox } from "./textBox";


export const AddStudentTabModal: FC<AddStudentTabModalProps> = ({
    visibleStateSet,
    studentTabsStateSet,
    keySetter,
}) => {
    
    const [name, setName] = useState("");
    const handleClose = () => visibleStateSet.setter(false);
    const handleSubmit = async () => {
        const status = await submitFunc(name, studentTabsStateSet);
        if (status.ok) {
            keySetter(studentTabsStateSet.value.length);
            handleClose();
        }
    };

    return (
        <SimpleModal
            visibleStateSet={visibleStateSet}
            title="授業情報の作成"
            submitButtonLabel="授業を作成"
            submitFunc={handleSubmit}
            isCloseSubmitted={false}
        >
            <TextBox
                title="担当生徒名"
                rows={1}
                valueSetter={setName}
            />
        </SimpleModal>
    )
}

const submitFunc = async (
    name: string, 
    tabsStateSet: StateSet<StudentTab[]>,
) => {
    
    if (name.trim() === "") {
        alert("担当生徒の名前を入力してください");
        return {ok: false};
    }

    await addStudentTab(tabsStateSet, name);
    return {ok: true};
}