const electron = require('electron')
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

const closeButton = document.getElementById("closeButton")
closeButton.addEventListener("click", closeWindow)

const maximizeButton = document.getElementById("maximizeButton")
maximizeButton.addEventListener("click", maximizeWindow)

const minimizeButton = document.getElementById("minimizeButton")
minimizeButton.addEventListener("click", minimizeWindow)