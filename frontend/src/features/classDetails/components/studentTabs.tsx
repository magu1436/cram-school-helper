import type { StudentTabsProps } from "@/features/classDetails/types/props";
import { useState, type FC } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { ClassDetail } from "./classDetail";
import type { StateSet, Setter } from "@/types/state";
import type { StudentTab } from "../types/classRelated";
import { SimpleModal } from "@/components/simpleModal";
import { AddStudentTabModal } from "./studentTabModal";

export const StudentTabsId = "student-tabs";
export const StudentTabClassName = "student-tab";

const addButtonKey = "addButtonKey";

export const StudentTabs: FC<StudentTabsProps> = ({studentTabsStateSet}) => {

    const [visibleAddModal, setVisibleAddModal] = useState<boolean>(false);
    const [visibleDeleteModal, setVisibleDeleteModal] = useState<boolean>(false);
    const [studentTabKey, setStudentTabKey] = useState<number>(0);
    
    return (
        <>
            <Tabs
                id={StudentTabsId}
                activeKey={studentTabKey}
                onSelect={(k)  => {onSelect(k, setStudentTabKey, setVisibleAddModal)}}
            >
                {studentTabsStateSet.value.map((s, i) => {
                    if (!s.classDetail) return;
                    return (
                        <Tab eventKey={i} title={s.name} key={s + String(i)}>
                            <ClassDetail {...s.classDetail} />
                            <Button 
                                onClick={() => {setVisibleDeleteModal(true)}}
                                className="my-2"
                            >授業情報を削除する</Button>
                        </Tab>
                    )
                })}
                <Tab 
                    eventKey={addButtonKey} 
                    title={"+"}
                />
            </Tabs>

            {/** 授業を追加するためのモーダル */}
            <AddStudentTabModal
                visibleStateSet={{value: visibleAddModal, setter: setVisibleAddModal}}
                studentTabsStateSet={studentTabsStateSet}
                keySetter={setStudentTabKey}
            />

            {/** 授業情報を削除する際に, 本当に削除していいか確認をとるモーダル */}
            <SimpleModal
                visibleStateSet={{value: visibleDeleteModal, setter: setVisibleDeleteModal}}
                title="授業情報の削除"
                submitButtonLabel="授業を削除"
                submitFunc={() => {onDelete(studentTabKey, setStudentTabKey, studentTabsStateSet)}}
            >
                <p>本当に授業を削除しますか？</p>
            </SimpleModal>
        </>
    )
}

/**
 * タブが選択されたときに実行する関数.  
 * 押されたキーによって以下の挙動を行う.
 * - `addButtonKey`: タブを追加するためのモーダルを表示
 * - null: エラーを投げる
 * - それ以外: `key` を `number` にして `keySetter` を用いて変更
 * @param key 現在選択されているタブのキー
 * @param keySetter タブのキーのセッター
 * @param visibleModalSetter モーダルの表示・非表示のセッター
 */
const onSelect = async (
    key: string | null, 
    keySetter: Setter<number>,
    visibleModalSetter: Setter<boolean>,
) => {
    if (!key) throw Error("Error on creating StudentTab.");

    if (key === addButtonKey) {
        visibleModalSetter(true);
        return;
    }

    keySetter(Number(key));
}

const onDelete = (
    key: number, 
    keySetter: Setter<number>,
    studentTabsState: StateSet<StudentTab[]>,
) => {
    const {value: studentTabs, setter: studentTabsSetter} = studentTabsState;
    studentTabsSetter([...studentTabs.slice(0, key), ...studentTabs.slice(key + 1)]);
    keySetter(0);
}