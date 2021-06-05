const { app, BrowserWindow, ipcMain } = require('electron')
const howler = require("howler")
const {Howl} = howler

const path = require('path');

var sound = new Howl({
  src: "../src/assets/title.wma",
  html5: true,
  format: ["mp3"],
  volume: 1.0,
  autoplay: true
});

sound.play()

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 610,
    minHeight: 610,
    minWidth: 800,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  //load the index.html from a url
  win.loadURL('http://localhost:3000');

  // Open the DevTools.
  win.webContents.openDevTools()

  ipcMain.on("maximize", () => {
    if(win.isMaximized()) {
      win.restore()
    }
    else {
      win.maximize()
    }
  })
  ipcMain.on("minimize", () => {
    win.minimize()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
