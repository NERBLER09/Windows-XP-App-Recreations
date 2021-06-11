import { FC, useState } from "react";

import "../styles/MenuBar.css"
import { createNewTextFile, readFromFile, saveFile } from "../ts/menuBarFunctions";

export interface MenuBarItemProps {
    menuName: string,
    subMenuItems: any
}
 
const MenuBarItem: FC<MenuBarItemProps> = ({menuName, subMenuItems}) => {
    const [showSubMenu, setShowSubMenu] = useState(false)

    return (
        <div className="menu-bar-item" onMouseLeave={() => setShowSubMenu(false)}>
            <div className="menu-bar-item-content">
                <p onClick={() => setShowSubMenu(!showSubMenu)}>{menuName}</p>
            </div>
            {showSubMenu &&
            <div id="sub-menu" onMouseEnter={() => setShowSubMenu(true)}>
                {subMenuItems?.map((subMenuItem: any) => (
                    <>
                        {subMenuItem.type === "menuItem" ?
                            <MenuBarSubItem subMenuName={subMenuItem.name} menuBarAction={subMenuItem.action} hideMenuBar={setShowSubMenu}/> :
                            <hr />
                        }
                    </>
                ))}
            </div>
            }
        </div>
    );
}

const checkSubMenuBarClicked = (menuBarItemAction: any) => {
    switch (menuBarItemAction) {
        case "createNew":
            createNewTextFile()
            break;
        case "saveFile":
            saveFile()

            break
        case "openFile":
            readFromFile()
            break

        case "printPage":
            window.print()

            break

        case "exitNotepad":
            window.close()
            break
    
        default:
            console.log("Unknown action")
    }
}

export interface MenuBarSubItemProps {
    subMenuName: any,
    menuBarAction: any,
    hideMenuBar: Function
}
 
const MenuBarSubItem: FC<MenuBarSubItemProps> = ({subMenuName, menuBarAction, hideMenuBar}) => {
    return (
        <>
                <div className="menu-bar-sub-item" onClick={() => {
                    checkSubMenuBarClicked(menuBarAction)
                    hideMenuBar(false)
                    }}>
                    <div className="menu-sub-item-content">
                        <p>{subMenuName}</p>
                    </div>
                </div> 
            
        </>
    );
}
  
export default MenuBarItem;