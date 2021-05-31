import { FC } from "react";
import "../styles/NavButton.css"
import "../styles/Footer.css"

import back from "../assets/backup.jpg"
import next from "../assets/nextup.jpg"
import skip from "../assets/skipup.jpg"

export interface NavButtonsProps {
    type: string,
    text: string,
    location: string,
    buttonType: string,
    backLocation?: any
}
 
const NavButtons: FC<NavButtonsProps> = ({text, type, buttonType, location, backLocation}) => {
    const navToNextScreen = (location: string) => {
        window.location.pathname = location
    }

    const goBack = () => {
        window.location.pathname = backLocation
    }
    
    return (
        <>
            {buttonType === "forward" && 
                <div className={type} >
                    <div id="nav-item" onClick={() => navToNextScreen(location)}>
                        <p className="nav-text">{text}</p>
                        <div id="next-button" className="nav-img">
                            <img src={next} alt="" />
                        </div>
                    </div>
                </div>
            }
            {buttonType === "back" && 
                <div className={type} >
                     <div id="nav-item" onClick={() => goBack()}>
                        <div id="back-button" className="nav-img">
                            <img src={back} alt="" />
                        </div>
                        <p className="nav-text">{text}</p>
                    </div>
                </div>
            }
            {buttonType === "skip" && 
                <div className={type} >
                    <div id="nav-item" onClick={() => navToNextScreen(location)}>
                        <p className="nav-text">{text}</p>
                        <div id="skip-button" className="nav-img">
                            <img src={skip} alt="" />
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
 
export default NavButtons;