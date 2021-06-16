var remote = window.require('electron').remote;
var electronFs = remote.require('fs');
const { dialog } = window.require('electron').remote

const saveWork = async() => {
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
    saveWork
}