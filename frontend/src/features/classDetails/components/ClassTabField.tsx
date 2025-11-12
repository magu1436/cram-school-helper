import { useEffect, useMemo, useState, type FC } from "react";
import type { ClassTabFieldProps } from "../types/props";
import { Tab, Tabs } from "react-bootstrap";
import { StudentTabField } from "./StudentTabField";
import { SimpleModal } from "@/components/simpleModal";
import { TextBox } from "./textBox";
import { registerClassDetail } from "../api/api";

const ADD_BUTTON_KEY = "addButtonKey";

export const ClassTabField: FC<ClassTabFieldProps> = ({classes}) => {

    const [referedClass, setReferedClass] = useState<number>();
    const [referedStudent, setReferedStudent] = useState<number>();
    const [visibleAddClassDetailModal, setVisibleAddClassDetailModal] = useState<boolean>(false);
    const [visibleDeleteClassDetailModal, setVisibleDeleteClassDetailModal] = useState<boolean>(false);
    const [newClassDetailStudent, setNewClassDetailStudent] = useState<string>();

    const onDeleteClassDetail = () => {
        if (!classes) return;
        console.log(`id: ${referedStudent}`)
        for (let c of classes) {
            c.classDetails = c.classDetails.filter(cd => cd.id != referedStudent);
        }
        setReferedStudent(undefined);
        // 授業詳細削除APIの挿入
        // deleteClassDetail(referedStudent);
    }

    const onAddClass = useMemo<() => void>(() => {return () => {
        alert("未実装");
        window.location.reload();
    }}, []);

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
                onAddClass();
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