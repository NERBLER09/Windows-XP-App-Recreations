import { FC, useState } from "react";
import MenuBarItem from "./MenuBarIItems";
import "../styles/MenuBar.css"
import { menuBarItemsList } from "../ts/menuBarItems";

interface MenuBarProps {
    setOpenMessageBox: Function,
    setMessageBoxType: Function,
    setMessageBoxHeaderText: Function,
    setMessageBoxMainText: Function,
    setYesFunction: Function
}

const MenuBar: FC<MenuBarProps> = ({setMessageBoxHeaderText, setMessageBoxMainText, setMessageBoxType, setOpenMessageBox, setYesFunction}) => {
    const [menuBarItems, setMenuBarItems] = useState(menuBarItemsList)

    return (
        <div id="menu-bar">
            {menuBarItems.map((menuBarItem) => <MenuBarItem 
            menuName={menuBarItem.name} subMenuItems={menuBarItem.subMenu}
            setMessageBoxHeaderText={setMessageBoxHeaderText}
            setMessageBoxType={setMessageBoxType}
            setMessageBoxMainText={setMessageBoxMainText}
            setOpenMessageBox={setOpenMessageBox}
            setYesFunction={setYesFunction}/>)}
        </div>
    );
}
 
export default MenuBar;