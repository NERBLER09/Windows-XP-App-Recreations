import { FC } from "react";
import warning from "../assets/warning.png"

interface WarningMessageProps {
    messageBoxHeaderText: string,
    messageBoxMainText: string,
    setOpenMessageBox: Function,
    yesFunction: any
}
 
const WarningMessage: FC<WarningMessageProps> = ({setOpenMessageBox, messageBoxHeaderText, messageBoxMainText, yesFunction}) => {
    return (
        <div className="warning-message-box window">
            <div className="title-bar" id="window-title-bar">
                <img src="favicon.ico" alt="" className="title-bar-favicon"/>
                <div className="title-bar-text">Windows XP Notepad Recreation</div>
                <div className="title-bar-controls">
                    <button aria-label="Close" onClick={() => setOpenMessageBox(false)}></button>
                </div>
            </div>

            <div className="window-contents">
                <div className="message-box-content">
                    <img src={warning} alt="" className="message-box-icon"/>
                    <div className="message-box-text">
                        <p>{messageBoxHeaderText}</p>
                        <p>{messageBoxMainText}</p>
                    </div>
                </div>

                <div className="message-box-controls">
                    <button className="message-box-button" onClick={() => yesFunction()}>Yes</button>
                    <button className="message-box-button" onClick={() => window.close()}>No</button>
                </div>
            </div>
        </div>
    );
}
 
export default WarningMessage;