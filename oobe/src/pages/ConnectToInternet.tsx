import { FC } from "react";

import "../styles/ConnectToInternet.css"

const ConnectToInternet: FC = () => {
    return (
        <div id="connect-to-internet" className="page-body">
            <div id="main-text">
                <h1 className="title-text">Will this computer connect to the Internet directly, or through a network?</h1>
                <p className="body-text">
                    You can set up this computer to connect to the Internet directly, 
                    or through a network of connected computers, if you have one. 
                    In either case, Windows Firewall helps protect your computer from unauthorized access over the Internet.
                </p>
                <p className="body-text">
                    Will this computer connect to the Internet through a network?
                </p>
            </div>

            <div id="internet-options">
                <div id="option1" className="connect-option">
                    <input type="radio" value="connectThroughNetwork" name="connectToInternet" id="connectThroughNetwork"/>
                    <label htmlFor="connectThroughNetwork" className="body-text">
                        Yes, this computer will connect through a local area network or home network
                    </label>
                </div>

                <div id="option2" className="connect-option">
                    <input type="radio" value="connectDirectly" name="connectToInternet" id="connectDirectly"/>
                    <label htmlFor="connectDirectly" className="body-text">
                        No, this computer will directly connect to the Internet
                    </label>
                </div>
            </div>

            <div id="sub-text">
                <p className="body-text">
                    If you are unsure if your computer is on a network, select No above. You can always change this option after 
                    setting up Windows. 
                    Just click <strong>Control Panel</strong> on the <strong>Start</strong> menu, and then click <strong>Network and Internet Connections</strong>
                </p>
                <p className="body-text">If you don't want to connect to the Internet right now, click Skip</p>
            </div>
        </div>
    );
}
 
export default ConnectToInternet;