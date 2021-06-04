import { FC, useState } from "react";
import "../styles/NavButton.css"
import "../styles/Footer.css"

import back from "../assets/backup.jpg"
import backOver from "../assets/backover.jpg"
import backDown from "../assets/backdown.jpg"
import next from "../assets/nextup.jpg"
import nextOver from "../assets/nextover.jpg"
import nextDown from "../assets/nextdown.jpg"
import skip from "../assets/skipup.jpg"
import skipOver from "../assets/skipover.jpg"
import skipDown from "../assets/skipdown.jpg"

export interface NavButtonsProps {
    type: string,
    text: string,
    location: string,
    buttonType: string,
    backLocation?: any
}
 
const NavButtons: FC<NavButtonsProps> = ({text, type, buttonType, location, backLocation}) => {
    const [nextButtonHovered, setNextButtonHovered]: any = useState(false)
    const [nextButtonClicked, setNextButtonClicked] = useState(false)

    const [backButtonHovered, setBackButtonHovered]: any = useState(false)
    const [backButtonClicked, setBackButtonClicked] = useState(false)

    const [skipButtonHovered, setSkipButtonHovered]: any = useState(false)
    const [skipButtonClicked, setSkipButtonClicked] = useState(false)

    const navToNextScreen = (location: string) => {
        // Closes the tab once done the oobe
        if(window.location.pathname === "/finish") {
            window.close()
        }
        // Navigates to the next screen of the oobe
        else {
            window.location.pathname = location
        }
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
                        {nextButtonHovered === false &&
                            <div id="next-button" className="nav-img" onMouseEnter={() => setNextButtonHovered(!nextButtonHovered)}>
                                <img src={next} alt="" />
                            </div>
                        }                       
                        {nextButtonHovered === true &&
                            <div id="next-button" className="nav-img" onMouseLeave={() => setNextButtonHovered(!nextButtonHovered)}
                            onClick={() => {
                                setNextButtonClicked(!nextButtonClicked)
                                setNextButtonHovered("")
                            }}>
                                <img src={nextOver} alt="" />
                            </div>
                        }
                        {nextButtonClicked === true && 
                            <div id="next-button" className="nav-img">
                                <img src={nextDown} alt="" />
                            </div>
                        }
                    </div>
                </div>
            }
            {buttonType === "back" && 
                <div className={type} >
                     <div id="nav-item" onClick={() => goBack()}>
                        {backButtonHovered === false &&
                            <div id="next-button" className="nav-img" onMouseEnter={() => setBackButtonHovered(!backButtonHovered)}>
                                <img src={back} alt="" />
                            </div>
                        }                       
                        {backButtonHovered === true &&
                            <div id="next-button" className="nav-img" onMouseLeave={() => setSkipButtonHovered(!backButtonHovered)}
                            onClick={() => {
                                setBackButtonClicked(!backButtonClicked)
                                setBackButtonHovered("")
                            }}>
                                <img src={backOver} alt="" />
                            </div>
                        }
                        {backButtonClicked === true && 
                            <div id="next-button" className="nav-img">
                                <img src={backDown} alt="" />
                            </div>
                        }
                        <p className="nav-text">{text}</p>
                    </div>
                </div>
            }
            {buttonType === "skip" && 
                <div className={type} >
                    <div id="nav-item" onClick={() => navToNextScreen(location)}>
                        <p className="nav-text">{text}</p>
                        {skipButtonHovered === false &&
                            <div id="next-button" className="nav-img" onMouseEnter={() => setSkipButtonHovered(!skipButtonHovered)}>
                                <img src={skip} alt="" />
                            </div>
                        }                       
                        {skipButtonHovered === true &&
                            <div id="next-button" className="nav-img" onMouseLeave={() => setSkipButtonHovered(!skipButtonHovered)}
                            onClick={() => {
                                setSkipButtonClicked(!skipButtonClicked)
                                setSkipButtonHovered("")
                            }}>
                                <img src={skipOver} alt="" />
                            </div>
                        }
                        {skipButtonClicked === true && 
                            <div id="next-button" className="nav-img">
                                <img src={skipDown} alt="" />
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
}
 
export default NavButtons;