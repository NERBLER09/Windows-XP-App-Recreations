export const menuBarItemsList = [
    {
        name: "Edit",
        subMenu: [
            {
                name: "New",
                type: "menuItem",
                shortcut: "Crtl+N"
            },
            {
                name: "Open",
                type: "menuItem",
                shortcut: "Crtl+O"
            },
            {
                name: "Save",
                type: "menuItem",
                shortcut: "Crtl+S"
            },
            {
                name: "Save As",
                type: "menuItem"
            },
            {
                type: "separator"
            },
            {
                name: "Page Setup",
                type: "menuItem",
            },
            {
                name: "Print",
                type: "menuItem",
                shortcut: "Crtl+P"
            },
            {
                type: "separator"
            },
            {
                name: "Exit",
                type: "menuItem",
            }
        ]
    },
    {
        name: "File",
        subMenu: [
            {
                name: "Undo",
                type: "menuItem",
                shortcut: "Crtl+Z"
            },
            {
                type: "separator"
            },
            {
                name: "Cut",
                type: "menuItem",
                shortcut: "Crtl+X"
            },
            {
                name: "Copy",
                type: "menuItem",
                shortcut: "Crtl+Z"
            },
            {
                name: "Paste",
                type: "menuItem",
                shortcut: "Crtl+V"
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
                shortcut: "Crtl+F"
            },
            {
                name: "Find Next",
                type: "menuItem",
                shortcut: "F3"
            },
            {
                name: "Replace",
                type: "menuItem",
                shortcut: "Crtl+H"
            },
            {
                name: "Go To",
                type: "menuItem",
                shortcut: "Crtl+G"
            },
            {
                type: "separator"
            },
            {
                name: "Select All",
                type: "menuItem",
                shortcut: "Crtl+A"
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