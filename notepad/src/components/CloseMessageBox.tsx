import { FC } from "react"
import warning from "../assets/warning.png"
import "../styles/MessageBox.css"
import { saveWork } from "../ts/messageBoxYesFunctions";

const {ipcRenderer} = window.require("electron")

export interface CloseMessageBoxProps {
    hideMessageBox: Function
}
 
const CloseMessageBox: FC<CloseMessageBoxProps> = ({hideMessageBox}) => {
    return (
        <div className="message-box">
        <div className="warning-message-box window">
            <div className="title-bar" id="window-title-bar">
                <img src="favicon.ico" alt="" className="title-bar-favicon"/>
                <div className="title-bar-text">Windows XP Notepad Recreation</div>
                <div className="title-bar-controls">
                    <button aria-label="Close" onClick={() => hideMessageBox(false)}></button>
                </div>
            </div>

            <div className="window-contents">
                <div className="message-box-content">
                    <img src={warning} alt="" className="message-box-icon"/>
                    <div className="message-box-text">
                        <p>The text in the file has changed.</p>
                        <p>Do you want to save the changes?</p>
                    </div>
                </div>

                <div className="message-box-controls">
                    <button className="message-box-button" onClick={() => saveWork()}>Yes</button>
                    <button className="message-box-button" onClick={() => ipcRenderer.send("forceCloseWindow")}>No</button>
                    <button className="message-box-button" onClick={() => hideMessageBox(false)}>Cancel</button>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default CloseMessageBox;