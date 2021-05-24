import { FC } from "react";
import MSLogo from "../assets/mslogo.jpg"

import "../styles/Header.css"

const Header: FC = () => {
    return (
        <div id="header">
            <img src={MSLogo} alt="" id="header-logo"/>
        </div>
    );
}
 
export default Header;