const electron = window.require("electron")
const {ipcRenderer} = electron;

// Closes the window 
const closeWindow = () => {
    window.close()
  }
  
// Maximizes the window 
const maximizeWindow = () => {
    ipcRenderer.send("maximize")
}
  
// Minimizes the window
const minimizeWindow = () => {
    ipcRenderer.send("minimize")
}

export {
    closeWindow,
    maximizeWindow,
    minimizeWindow,
}