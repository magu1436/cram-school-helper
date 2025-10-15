import { useState } from "react"
import { SubjectSelect, subjects } from "./subjectSelector";

type DetailProps = {

}

export const ClassDetail = () => {
    const [subject, setSubject] = useState(Object.keys(subjects)[0]);
    
    return (
        <>
            <SubjectSelect setter={setSubject} />
            <div>{subject}</div>
        </>
    )
}