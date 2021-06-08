import { FC, useState } from "react";
import MenuBarItem from "./MenuBarIItems";
import "../styles/MenuBar.css"
import { menuBarItemsList } from "../ts/menuBarItems";



const MenuBar: FC = () => {
    const [menuBarItems, setMenuBarItems] = useState(menuBarItemsList)

    return (
        <div id="menu-bar">
            {menuBarItems.map((menuBarItem) => <MenuBarItem menuName={menuBarItem.name} subMenuItems={menuBarItem.subMenu}/>)}
        </div>
    );
}
 
export default MenuBar;