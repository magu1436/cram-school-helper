import { useEffect, useState, type FC } from "react"


type Subject = {
    "国語": string[],
    "数学": string[],
    "英語": string[],
    "理科": string[],
    "社会": string[],
    "その他": string[],
    [key: string]: string[],
}

export const subjects: Subject = {
    "国語": ["現代文", "古文", "漢文"],
    "数学": ["数Ⅰ", "数A", "数Ⅱ", "数B", "数Ⅲ", "数C"],
    "英語": [],
    "理科": ["物理", "化学", "生物", "地学"],
    "社会": ["地理", "日本史", "世界史", "歴史", "公民", "公共", "倫理", "政治・経済"],
    "その他": []
}

type Setter = (subject: string) => void;

const SubjectOptGroup: FC<{sub: string}> = ({sub}) => {
    const minors = subjects[sub];
    return (
        <optgroup label={sub}>
            {[sub, ...minors].map(s => {
                return (
                    <option value={s} key={s}>{s}</option>
                );
            })}
        </optgroup>
    )
}

export const SubjectSelect: FC<{setter: Setter}> = ({setter}) => {
    const [subject, setSubject] = useState("");
    useEffect(() => {setter(subject)}, [subject]);
    return (
        <select name="subject-selector" onChange={(e) => {setSubject(e.target.value)}}>
            {Object.keys(subjects).map(s => {return (<SubjectOptGroup sub={s} key={`group-${s}`} />)})}
        </select>
    )
}