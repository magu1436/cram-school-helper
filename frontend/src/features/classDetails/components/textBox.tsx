import type { FC } from "react"

import type { TextBoxProps } from "@/types/props";
import classNames from "classnames";

const TIELE_CLASSNAME = "text-title";
const TEXTBOX_CLASSNAME = "textbox";
const DEFAULT_ROWS = 2;
const DEFAULT_PLACEHOLDER = "ここにテキストを入力...";

export const TextBox: FC<TextBoxProps> = ({
        title, 
        defaultValue, 
        valueSetter, 
        className, 
        rows = DEFAULT_ROWS, 
        placeholder = DEFAULT_PLACEHOLDER,
        readonly
    }) => {

    return (
        <div className={classNames(className, "d-flex" , "flex-column", "align-item-start")}>
            <p className={classNames(TIELE_CLASSNAME)}> {title} </p>
            <textarea 
                className={classNames(TEXTBOX_CLASSNAME, "my-2")} 
                rows={rows} 
                value={defaultValue}
                placeholder={placeholder} 
                readOnly={readonly}
                onChange={(e) => {valueSetter(e.target.value)}} 
            />
        </div>
    )
}