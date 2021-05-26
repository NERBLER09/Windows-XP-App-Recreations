import { FC } from "react";
import { useCurrentState } from "../hooks/useCurrentState";
import "../styles/Footer.css"
import NavButtons from "./NavButton";

const Footer: FC = () => {
    const {button}: any = useCurrentState("home")


    return (
        <div id="footer">
            {button.map((button: any) => (
                <>
                    <NavButtons type={button.type} 
                    text={button.text} location={button.location} 
                    buttonType={button.buttonType}/>
                </>
            ))}
        </div>
    );
}
 
export default Footer;