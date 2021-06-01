import { FC } from "react";
import "../styles/Updates.css"

import checkmark from "../assets/greenshd.gif"
import deny from "../assets/redshd.gif"

const Updates: FC = () => {
    return (
        <div id="automatic-updates-page" className="page-body">
            <div id="main-text">
                <h1 className="title-text">Help protect your PC</h1>
                <p className="body-text">
                    With Automatic Updates, Windows can routinely check for the latest important updates for your computer and install them automatically. 
                    These updates can include security updates, critical updates, and service packs.
                </p>
            </div>

            <div id="options">
                <div id="option1" className="update-option-box">
                    <img src={checkmark} alt="" />
                    <div className="update-option-text">
                        <div className="update-select">
                            <input type="radio" value="turnOnAutoUpdates" name="autoUpdates" id="turnOnAutoUpdates"/>
                            <label htmlFor="turnOnAutoUpdates" className="header-text">
                                Help protect my PC by turning on Automatic Updates now
                            </label>
                        </div>
                        <p className="body-text">(Recommended)</p>
                    </div>
                </div>
                <div id="option2" className="update-option-box">
                <img src={deny} alt="" />
                    <div className="update-option-text">
                        <div className="update-select">
                            <input type="radio" value="turnOffAutoUpdates" name="autoUpdates" id="turnOffAutoUpdates"/>
                            <label htmlFor="turnOffAutoUpdates" className="header-text">
                                Not right now
                            </label>
                        </div>
                        <p className="body-text">
                            If you haven't tuned in Automatic Updates, your computer is more vulnerable to viruses and other security threats.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Updates;