import { FC } from "react"
import "../styles/MessageBox.css"
import ErrorMessage from "./ErrorMessage";
import WarningMessage from "./WarningMessage";

interface MessageBoxProps {
    messageBoxType: string,
    messageBoxHeaderText: string,
    messageBoxMainText: string,
    setOpenMessageBox: Function,
    yesFunction: any
}

const MessageBox: FC<MessageBoxProps> = ({setOpenMessageBox, messageBoxHeaderText, messageBoxMainText, messageBoxType, yesFunction}) => {
    return (
        <div className="message-box">
            {messageBoxType === "error" && <ErrorMessage
            messageBoxHeaderText={messageBoxHeaderText}
            messageBoxMainText={messageBoxMainText}
            setOpenMessageBox={setOpenMessageBox}/> }

            {messageBoxType === "warning" && <WarningMessage 
            messageBoxHeaderText={messageBoxHeaderText}
            messageBoxMainText={messageBoxMainText}
            setOpenMessageBox={setOpenMessageBox}
            yesFunction={yesFunction}/> }
        </div>
    );
}
 
export default MessageBox;