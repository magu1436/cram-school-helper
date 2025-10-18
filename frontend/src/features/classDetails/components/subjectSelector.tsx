import type { Setter } from "@/types/stateSetter";
import type { Subject } from "../types/classRelated";

import "../assets/subjectSelector.css";
import type { FC } from "react";

export const subjects: Subject = {
    "国語": ["現代文", "古文", "漢文"],
    "数学": ["数Ⅰ", "数A", "数Ⅱ", "数B", "数Ⅲ", "数C"],
    "英語": [],
    "理科": ["物理", "化学", "生物", "地学"],
    "社会": ["地理", "日本史", "世界史", "歴史", "公民", "公共", "倫理", "政治・経済"],
    "その他": []
}

const SubjectOptGroup: FC<{sub: string, defaultSub?: string}> = ({sub, defaultSub}) => {
    const minors = subjects[sub];
    return (
        <optgroup label={sub}>
            {[sub, ...minors].map(s => {
                return (
                    <option value={s} key={s} selected={ s === defaultSub }>{s}</option>
                );
            })}
        </optgroup>
    )
}

export const SubjectSelect: FC<{subject?: string, setter: Setter<string>}> = ({subject, setter}) => {
    const unInputOptionValue = "科目を選択...";
    return (
        <select name="subject-selector" onChange={(e) => {setter(e.target.value)}}>
            <option id="un-input-option" value={unInputOptionValue} className={subject? "d-none": ""}>{unInputOptionValue}</option>
            {Object.keys(subjects).map(s => {return (<SubjectOptGroup sub={s} defaultSub={subject} key={`group-${s}`} />)})}
        </select>
    )
}