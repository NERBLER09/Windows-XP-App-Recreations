import { FC, useState } from "react";

import "../styles/MenuBar.css"

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
                            <MenuBarSubItem subMenuName={subMenuItem.name}/> :
                            <hr />
                        }
                    </>
                ))}
            </div>
            }
        </div>
    );
}

export interface MenuBarSubItemProps {
    subMenuName: any
}
 
const MenuBarSubItem: FC<MenuBarSubItemProps> = ({subMenuName}) => {
    return (
        <div className="menu-bar-sub-item">
            <div className="menu-sub-item-content">
                <p>{subMenuName}</p>
            </div>
        </div>
    );
}
  
export default MenuBarItem;