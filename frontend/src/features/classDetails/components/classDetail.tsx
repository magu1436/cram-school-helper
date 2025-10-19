import { useState, type FC } from "react"
import { SubjectSelect } from "./subjectSelector";
import { TextBox } from "./textBox";
import { Button } from "react-bootstrap";
import { createComment } from "@/features/classDetails/api/api";
import type { ClassDetailProps } from "@/features/classDetails/types/props";
import classNames from "classnames";

const TEXTBOX_ROW = 3;


export const ClassDetail: FC<ClassDetailProps> = (props) => {
    const [memo, setMemo] = useState<string>(props.memo ? props.memo: "");
    const [unit, setUnit] = useState<string>(props.unit ? props.unit: "");
    const [learned, setLearned] = useState<string>(props.learned ? props.learned: "");
    const [goodPoint, setGoodPoint] = useState<string>(props.goodPoint ? props.goodPoint: "");
    const [issue, setIssue] = useState<string>(props.issue ? props.issue: "");
    const [comment, setComment] = useState<string>(props.comment ? props.comment: "");

    const [subject, setSubject] = useState(props.subject ? props.subject: "");
    
    return (
        <div className={classNames("d-flex", "flex-column")}>
            <SubjectSelect subject={subject} setter={setSubject} />
            <TextBox 
                title="授業メモ"
                valueSetter={setMemo}
                stateValue={memo}
                rows={TEXTBOX_ROW}
                className="my-1"
            />
            <TextBox 
                title="実施した単元"
                valueSetter={setUnit}
                stateValue={unit}
                rows={1}
                className="my-1"
            />
            <TextBox 
                title="できるようになったこと"
                valueSetter={setLearned}
                stateValue={learned}
                rows={TEXTBOX_ROW}
                className="my-1"
            />
            <TextBox 
                title="良かったところ(省略可能)"
                valueSetter={setGoodPoint}
                stateValue={goodPoint}
                rows={TEXTBOX_ROW}
                className="my-1"
            />
            <TextBox 
                title="今後の課題と改善策"
                valueSetter={setIssue}
                stateValue={issue}
                rows={TEXTBOX_ROW}
                className="my-1"
            />
            <TextBox
                title="講師コメント"
                valueSetter={setComment}
                stateValue={comment}
                rows={TEXTBOX_ROW}
                className="my-1"
            />
            <Button onClick={() => {setComment(createComment(
                subject, 
                unit, 
                learned,
                goodPoint,
                issue))}}>ChatGPTで作成</Button>
            <div>{memo}</div>
        </div>
    )
}