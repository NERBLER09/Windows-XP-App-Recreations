import { useEffect } from "react";
import { useState } from "react";
import CloseMessageBox from "./components/CloseMessageBox";
import MenuBar from "./components/MenuBar";
import MessageBox from "./components/MessageBox";
import TextInput from "./components/TextInput";

const {ipcRenderer} = window.require("electron")

function App() {
  const [openMessageBox, setOpenMessageBox] = useState(false)
  const [messageBoxType, setMessageBoxType] = useState("")
  const [messageBoxHeaderText, setMessageBoxHeaderText] = useState("")
  const [messageBoxMainText, setMessageBoxMainText] = useState("")
  const [yesFunction, setYesFunction]: any = useState()

  const [showCloseMessageBox, setShowCloseMessageBox] = useState(false)

  ipcRenderer.on("displayCloseMessageBox", () => {
    setShowCloseMessageBox(true)
  })

  return (
    <div className="notepad window">
      <div className="title-bar" id="window-title-bar">
        <img src="favicon.ico" alt="" className="title-bar-favicon"/>
        <div className="title-bar-text">Windows XP Notepad Recreation</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" title="Minimize"></button>
          <button aria-label="Maximize" title="Maximize" id="maximizeButton"></button>
          <button aria-label="Close" title="Close"></button>
        </div>
      </div>

      <div className="main">
        <MenuBar 
        setMessageBoxHeaderText={setMessageBoxHeaderText}
        setMessageBoxType={setMessageBoxType}
        setMessageBoxMainText={setMessageBoxMainText}
        setOpenMessageBox={setOpenMessageBox}
        setYesFunction={setYesFunction}/>
        <TextInput/>

        {openMessageBox && <MessageBox
        messageBoxHeaderText={messageBoxHeaderText}
        messageBoxMainText={messageBoxMainText}
        setOpenMessageBox={setOpenMessageBox}
        messageBoxType={messageBoxType}
        yesFunction={yesFunction}/> }

        {showCloseMessageBox && <CloseMessageBox hideMessageBox={setShowCloseMessageBox}/>}
      </div>
    </div>
  );
}

export default App;
