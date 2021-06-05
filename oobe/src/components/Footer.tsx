import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getCurrentState } from "../hooks/useCurrentState";
import "../styles/Footer.css"
import NavButtons from "./NavButton";

const Footer: FC = () => {
    let {button}: any = getCurrentState(window.location.pathname)

    const location = useLocation()

    useEffect(() => {
        console.log("Path has changed")
        console.log(location.pathname)
    }, [location.pathname]);

    return (
        <div id="footer">
            {button.map((button: any) => (
                <>
                    <NavButtons type={button.type} 
                    text={button.text} location={button.location} 
                    buttonType={button.buttonType} backLocation={button?.backLocation}/>
                </>
            ))}
        </div>
    );
}
 
export default Footer;