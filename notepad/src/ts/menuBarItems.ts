export const menuBarItemsList = [
    {
        name: "Edit",
        subMenu: [
            {
                name: "New",
                type: "menuItem",
                shortcut: "Ctrl+N",
                action: "createNew"
            },
            {
                name: "Open",
                type: "menuItem",
                shortcut: "Ctrl+O",
                action: "openFile",
            },
            {
                name: "Save",
                type: "menuItem",
                shortcut: "Ctrl+S",
                action: "saveFile"
            },
            {
                name: "Save As",
                type: "menuItem",
                action: "saveFile"
            },
            {
                type: "separator"
            },
            {
                name: "Page Setup",
                type: "menuItem"
            },
            {
                name: "Print",
                type: "menuItem",
                shortcut: "Ctrl+P",
                action: "printPage"
            },
            {
                type: "separator"
            },
            {
                name: "Exit",
                type: "menuItem",
                action: "exitNotepad"
            }
        ]
    },
    {
        name: "File",
        subMenu: [
            {
                name: "Undo",
                type: "menuItem",
                shortcut: "Ctrl+Z"
            },
            {
                type: "separator"
            },
            {
                name: "Cut",
                type: "menuItem",
                shortcut: "Ctrl+X"
            },
            {
                name: "Copy",
                type: "menuItem",
                shortcut: "Ctrl+Z"
            },
            {
                name: "Paste",
                type: "menuItem",
                shortcut: "Ctrl+V"
            },
            {
                name: "Delete",
                type: "menuItem",
                shortcut: "Del"
            },
            {
                type: "separator"
            },
            {
                name: "Find",
                type: "menuItem",
                shortcut: "Ctrl+F"
            },
            {
                name: "Find Next",
                type: "menuItem",
                shortcut: "F3"
            },
            {
                name: "Replace",
                type: "menuItem",
                shortcut: "Ctrl+H"
            },
            {
                name: "Go To",
                type: "menuItem",
                shortcut: "Ctrl+G"
            },
            {
                type: "separator"
            },
            {
                name: "Select All",
                type: "menuItem",
                shortcut: "Ctrl+A"
            },
            {
                name: "Time/Date",
                type: "menuItem",
                shortcut: "F5"
            }
        ]
    },
    {
        name: "Format",
        subMenu: [
            {
                name: "Word Wrap",
                type: "menuItem"
            },
            {
                name: "Font",
                type: "menuItem",
            }
        ]
    },
    {
        name: "View",
        subMenu: [
            {
                name: "Status Bar",
                type: "menuItem"
            }
        ]
    },
    {
        name: "Help",
        subMenu: [
            {
                name: "About Notepad",
                type: "menuItem"
            }
        ]
    }
]