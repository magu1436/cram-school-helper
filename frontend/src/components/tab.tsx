import classNames from "classnames";
import { useState, type FC, type ReactNode } from "react"

export const usedClassNames = {
    TabField: ["tabField"],
    Header: ["header", "d-flex", "mb-3"],
    Tab: ["tab", "mx-2", "btn", "btn-primary"],
    ActiveTab: ["activeTab", "mx-2", "btn", "btn-primary"]
}

type TabLabel = string | number

type TabFieldProps = {
    tabs: Tab | Tab[],
    headerClassName?: string,
    fieldClassName?: string,
    tabClassName?: string,
}

export class Tab {
    private static nextID = 0;
    readonly id: number;
    private _content: ReactNode;
    readonly label: TabLabel;

    constructor(content: ReactNode, label: string){
        this.id = this.createId();
        this._content = content;
        this.label = label;
    }

    private createId(): number {
        return Tab.nextID++;
    }

    get node() {
        return (
            <>{this._content}</>
        );
    }
}

export const TabField: FC<TabFieldProps> = ({ tabs, fieldClassName, headerClassName,tabClassName}) => {
    const [activeTabID, setActiveTabID] = useState(0);
    if (!Array.isArray(tabs)) tabs = [tabs];
    const [tabState, setTab] = useState(tabs);

    return (
        <div className={classNames(...usedClassNames["TabField"], fieldClassName)}>
            <div className={classNames(...usedClassNames["Header"], headerClassName)}>
                {tabState.map(tab => {
                    return (
                        <button
                            type="button"
                            className={
                                classNames(
                                    ...(tab.id === activeTabID ? usedClassNames["ActiveTab"]: usedClassNames["Tab"]),
                                    tabClassName,
                                )
                            }
                            onClick={() => setActiveTabID(tab.id)}
                        >{tab.label}</button>
                    )
                })}
            </div>
            {tabState.find(t => t.id === activeTabID)?.node}
        </div>
    )
}