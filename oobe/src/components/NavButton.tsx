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
    buttonType: string
}
 
const NavButtons: FC<NavButtonsProps> = ({text, type, buttonType, location}) => {
    return (
        <>
            {buttonType === "forward" && 
                <div className={type} >
                    <div id="nav-item">
                        <p className="nav-text">{text}</p>
                        <div id="next-button" className="nav-img">
                            <img src={next} alt="" />
                        </div>
                    </div>
                </div>
            }
            {buttonType === "back" && 
                <div className={type} >
                     <div id="nav-item">
                        <div id="back-button" className="nav-img">
                            <img src={back} alt="" />
                        </div>
                        <p className="nav-text">{text}</p>
                    </div>
                </div>
            }
            {buttonType === "skip" && 
                <div className={type} >
                    <div id="nav-item">
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