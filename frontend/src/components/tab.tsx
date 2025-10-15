import classNames from "classnames";
import { useMemo, useState, type FC, type ReactNode } from "react"
import { Button } from "react-bootstrap";

export const usedClassNames = {
    TabField: ["tabField"],
    Header: ["header", "d-flex", "mb-3"],
    Tab: ["tab", "mx-2", "btn", "btn-primary"],
    ActiveTab: ["activeTab", "mx-2", "btn", "btn-warning"]
}

type TabLabel = string | number

type TabFieldProps = {
    tabs: Tab | Tab[],
    headerClassName?: string,
    fieldClassName?: string,
    tabClassName?: string,
}

/**
 * タブの情報を保持するクラス.  
 * `id` は他のタブと重複しないよう, 実装時に自動的に付与される.
 */
export class Tab {
    private static nextID = 0;
    /** タブの固有ID. readonly. */
    readonly id: number;
    /** タブが押された際に描画される要素. readonly. */
    readonly content: ReactNode;
    /** タブのボタンに表示されるもの. readonly. */
    readonly label: TabLabel;

        /**
         * コンストラクタ
         * @param content タブが押された際に描画される要素.
         * @param label タブのボタンに描画されるもの.
         */
    constructor(content: ReactNode, label: string){
        this.id = this.createId();
        this.content = content;
        this.label = label;
    }

    /** 一意のIDを作成して返すメソッド. */
    private createId(): number {
        return Tab.nextID++;
    }
}


export const TabField: FC<TabFieldProps> = ({ tabs, fieldClassName, headerClassName,tabClassName}) => {
    const [activeTabID, setActiveTabID] = useState(0);
    if (!Array.isArray(tabs)) tabs = [tabs];
    const tabMemo = useMemo(() => tabs, [tabs]);
    
    return (
        <div className={classNames(...usedClassNames["TabField"], fieldClassName)}>
            <div className={classNames(...usedClassNames["Header"], headerClassName)}>
                {tabMemo.map(tab => {
                    return (
                        <Button 
                            className={
                                classNames(
                                    ...(tab.id === activeTabID ? usedClassNames["ActiveTab"]: usedClassNames["Tab"]),
                                    tabClassName,
                                )
                            }
                            onClick={() => setActiveTabID(tab.id)}
                            key={tab.id}
                        >{tab.label}</Button>
                    )
                })}
            </div>
            {tabMemo.find(t => t.id === activeTabID)?.content}
        </div>
    )
}