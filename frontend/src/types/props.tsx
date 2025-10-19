import type { ReactNode } from "react"
import type { StateSet } from "./state"


export type SimpleModalProps = {
    visibleStateSet: StateSet<boolean>,
    title?: string,
    children: ReactNode,
    closeButtonLabel?: string,
    submitButtonLabel?: string,
    submitFunc?: () => void,
    isCloseSubmitted?: boolean,
}