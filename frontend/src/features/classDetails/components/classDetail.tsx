import { useState } from "react"
import { SubjectSelect, subjects } from "./subjectSelector";
import { TextBox } from "./textBox";
import { Button } from "react-bootstrap";

const TEXTBOX_ROW = 3;


export const ClassDetail = () => {
    const [memo, setMemo] = useState<string>();
    const [teachingUnit, setTeachingUnit] = useState<string>();
    const [learned, setLearned] = useState<string>();
    const [goodPoint, setGoodPoint] = useState<string>();
    const [issue, setIssue] = useState<string>();
    const [comment, setComment] = useState<string>();

    const [subject, setSubject] = useState(Object.keys(subjects)[0]);
    
    return (
        <>
            <SubjectSelect setter={setSubject} />
            <TextBox 
                title="授業メモ"
                valueSetter={setMemo}
                stateValue={memo}
                rows={TEXTBOX_ROW}
            />
            <TextBox 
                title="実施した単元"
                valueSetter={setTeachingUnit}
                stateValue={teachingUnit}
                rows={1}
            />
            <TextBox 
                title="できるようになったこと"
                valueSetter={setLearned}
                stateValue={learned}
                rows={TEXTBOX_ROW}
            />
            <TextBox 
                title="良かったところ(省略可能)"
                valueSetter={setGoodPoint}
                stateValue={goodPoint}
                rows={TEXTBOX_ROW}
            />
            <TextBox 
                title="今後の課題と改善策"
                valueSetter={setIssue}
                stateValue={issue}
                rows={TEXTBOX_ROW}
            />
            <TextBox
                title="講師コメント"
                valueSetter={setComment}
                stateValue={comment}
                rows={TEXTBOX_ROW}
            />
            <Button onClick={() => {setComment("GPTによって作成されたコメント")}}>ChatGPTで作成</Button>
            <div>{memo}</div>
        </>
    )
}