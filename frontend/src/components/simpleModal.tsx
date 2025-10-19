import type { SimpleModalProps } from "@/types/props";
import type { FC } from "react";
import { Button, Modal } from "react-bootstrap";


/**
 * `react-bootstrap` の `modal` を最小構成で実装したシンプルなモーダルコンポーネント
 * @prop visibleStateSet モーダルを表示するかどうか
 * @prop title? モーダルのタイトル
 * @prop children モーダルのボディに挿入する `ReactNone`
 * @prop closeButtonLabel? モーダルを閉じるボタンのラベル. デフォルトで `閉じる`.
 * @prop submitButtonLabel? モーダルの送信ボタンのラベル. デフォルトで `送信`.
 * @prop submitFunc?: 送信ボタンを押した際に実行される関数.
 * @prop isCloseSubmitted?: 送信ボタンを押したあと, タブを閉じるかどうか. 指定しない場合は `true` .
 */
export const SimpleModal: FC<SimpleModalProps> = ({
    visibleStateSet,
    title,
    children,
    closeButtonLabel,
    submitButtonLabel,
    submitFunc,
    isCloseSubmitted = true,
}) => {

    const handleClose = () => {visibleStateSet.setter(false)};
    const handleSubmit = () => {
        submitFunc && submitFunc();
        isCloseSubmitted && handleClose();
    }

    return (
        <Modal
            show={visibleStateSet.value}
            onHide={handleClose}
        >
            {title && (
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
            )}
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {closeButtonLabel || "閉じる"}
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {submitButtonLabel || "送信"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}