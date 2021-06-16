import { FC } from "react";
import error from "../assets/error.png"

interface ErrorMessageProps {
    messageBoxHeaderText: string,
    messageBoxMainText: string,
    setOpenMessageBox: Function,
}
 
const ErrorMessage: FC<ErrorMessageProps> = ({setOpenMessageBox, messageBoxHeaderText, messageBoxMainText}) => {
    return (
        <div className="error-message-box window">
            <div className="title-bar" id="window-title-bar">
                <img src="favicon.ico" alt="" className="title-bar-favicon"/>
                <div className="title-bar-text">Windows XP Notepad Recreation</div>
                <div className="title-bar-controls">
                    <button aria-label="Close" onClick={() => setOpenMessageBox(false)}></button>
                </div>
            </div>

            <div className="window-contents">
                <div className="message-box-content">
                    <img src={error} alt="" className="message-box-icon"/>
                    <div className="message-box-text">
                        <p>{messageBoxHeaderText}</p>
                        <p>{messageBoxMainText}</p>
                    </div>
                </div>

                <div className="message-box-controls">
                    <button className="message-box-button" onClick={() => setOpenMessageBox(false)}>Ok</button>
                </div>
            </div>
        </div>
    );
}
 
export default ErrorMessage;