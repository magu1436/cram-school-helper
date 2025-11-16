import { useEffect, useMemo, useState, type FC } from "react";
import type { ClassTabFieldProps } from "../types/props";
import { Tab, Tabs } from "react-bootstrap";
import { StudentTabField } from "./StudentTabField";
import { SimpleModal } from "@/components/simpleModal";
import { TextBox } from "./textBox";
import { deleteClassDetail, getClassesByDate, registerClassAt, registerClassDetail } from "../api/api";
import type { ClassName } from "@/types/dataType";

const ADD_BUTTON_KEY = "addButtonKey";

export const ClassTabField: FC<ClassTabFieldProps> = ({date}) => {

    const classPriority: {[key in ClassName]: number} = {
        "X": 0,
        "Y": 1,
        "Z": 2,
        "A": 3,
        "B": 4,
        "C": 5,
        "D": 6,
    }

    const { data, isLoading, error } = getClassesByDate(date);

    const classes = useMemo(() => {
        if (!data) return undefined;
        return [...data].sort((a, b) => classPriority[a.name] - classPriority[b.name]);
    }, [data]);

    const [referedClass, setReferedClass] = useState<number>();
    const [referedStudent, setReferedStudent] = useState<number>();
    const [visibleAddClassModal, setVisibleAddClassModal] = useState<boolean>(false);
    const [visibleAddClassDetailModal, setVisibleAddClassDetailModal] = useState<boolean>(false);
    const [visibleDeleteClassDetailModal, setVisibleDeleteClassDetailModal] = useState<boolean>(false);
    const [newClassDetailStudent, setNewClassDetailStudent] = useState<string>();
    
    let newClassName: ClassName = "X";

    const onDeleteClassDetail = () => {
        if (!classes || !referedStudent) return;
        for (let c of classes) {
            c.classDetails = c.classDetails.filter(cd => cd.id != referedStudent);
        }
        deleteClassDetail(referedStudent);
        setReferedStudent(undefined);
    }

    const onAddClass = async () => {
        await registerClassAt(date, newClassName);
        window.location.reload();
    }

    const addClassDetail = async () => {
        const student = newClassDetailStudent;
        if (!student){
            alert("生徒名を入力してください");
            return;
        }
        if (!referedClass) {
            const err = "Refered Class is undefined on processing addClassDetail.";
            alert(err);
            throw new Error(err);
        }
        const id = await registerClassDetail(referedClass, student);
        const targetClass = classes?.find(c => c.id == referedClass);
        if (!targetClass) throw new Error("Some error happened!");
        targetClass.classDetails = [...targetClass.classDetails, {id, student}];
        setReferedStudent(id);
    };

    const onSelect = (k: string | null) => {
            if (k == ADD_BUTTON_KEY){
                setVisibleAddClassModal(true);
                return;
            }
            const id = Number(k);
            setReferedClass(id);
            setReferedStudent(Number(classes?.find(c => c.id == id)?.classDetails.at(0)?.id));
        }

    useEffect(() => {
        if (!classes) return;   // サーバーから授業情報を取得できているかどうか
        if (classes.length == 0) return;    // クラスが授業詳細情報を持っているかどうか
        if (referedClass) return;   // クラスタブが選択されているかどうか
        onSelect(String(classes[0].id));
    }, [classes]);

    return (
        <>
            <Tabs
                activeKey={referedClass}
                onSelect={onSelect}
            >
                {classes?.map(c => {
                    return (
                        <Tab
                            eventKey={c.id}
                            title={c.name}
                            key={c.id}
                        >
                            <StudentTabField 
                                classDetails={c.classDetails}
                                referedStudentStateSet={{value: referedStudent, setter: setReferedStudent}}
                                onAddClassDetail={() => {setVisibleAddClassDetailModal(true)}}
                                onDeleteClassDetail={() => {setVisibleDeleteClassDetailModal(true)}}
                                classId={c.id}
                            />
                        </Tab>
                    )
                })}
                <Tab
                    eventKey={ADD_BUTTON_KEY}
                    title="+"
                />
            </Tabs>

            <SimpleModal
                visibleStateSet={{value: visibleAddClassModal, setter: setVisibleAddClassModal}}
                title="コマの追加"
                submitButtonLabel="コマを追加"
                submitFunc={onAddClass}
            >
                <div>追加するコマを選択</div>
                <select 
                    name="select-class" 
                    id="class-selector"
                    onChange={(e) => {newClassName = e.target.value as ClassName;}}
                >
                    {Object.keys(classPriority).map(cn => <option value={cn}>{cn}</option>)}
                </select>
            </SimpleModal>

            <SimpleModal
                visibleStateSet={{value: visibleAddClassDetailModal, setter: setVisibleAddClassDetailModal}}
                title="授業情報の追加"
                submitButtonLabel="授業を追加"
                submitFunc={addClassDetail}
            >
                <TextBox
                    title="生徒名"
                    stateValue={newClassDetailStudent}
                    valueSetter={setNewClassDetailStudent}
                    rows={1}
                />
            </SimpleModal>

            <SimpleModal
                visibleStateSet={{value: visibleDeleteClassDetailModal, setter: setVisibleDeleteClassDetailModal}}
                title="授業情報の削除"
                submitButtonLabel="授業を削除"
                submitFunc={onDeleteClassDetail}
            >
                <p>本当に授業を削除しますか？</p>
            </SimpleModal>
        </>
    )
}