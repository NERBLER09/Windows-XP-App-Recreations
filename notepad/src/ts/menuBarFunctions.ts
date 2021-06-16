var remote = window.require('electron').remote;
var electronFs = remote.require('fs');
const { dialog } = window.require('electron').remote

const createNewTextFile = async() => {
    const textField: any = document.getElementById("text-input-area")
    textField.value = ""
}
const readFromFile = async() =>  {
    await dialog.showOpenDialog({
        buttonLabel: "Save As",
        defaultPath: "*.txt",
        filters: [
            { name: 'Text Documents', extensions: ['txt'] }
        ]
    }).then((data: any) => {
        electronFs.readFile(data.filePaths[0], function (err: any, data: any) {
            if (err) {
               return console.error(err);
            }
            const textField: any = document.getElementById("text-input-area")
            textField.value = data.toString()
         });
    }).catch(() => {
        console.error("File not chosen")
    })
}

const saveFile = async() => {
    const { filePath } = await dialog.showSaveDialog({
        buttonLabel: "Save As",
        defaultPath: "*.txt",
        filters: [
            { name: 'Text Documents', extensions: ['txt'] }
        ]
    })

    const textField: any = document.getElementById("text-input-area")

    electronFs.writeFile(filePath, textField.value, (err: any) => {
        if (err) {
            console.error("An error ocurred updating the file" + err.message);
            return;
        }
    
        console.log("The file has been successfully saved");
    });
}

export {
    createNewTextFile,
    readFromFile,
    saveFile
}