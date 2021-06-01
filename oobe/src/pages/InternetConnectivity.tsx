import { FC, useEffect } from "react";

import connecting from "../assets/dialup.gif"

import "../styles/InternetConnectivity.css"

const InternetConnectivity: FC = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.pathname = "/connectToInternet"
        }, 6000);
    }, [])
    
    return (
        <div id="internet-connectivity" className="page-body">
            <div id="main-text">
                <h1 className="title-text">Checking your Internet connectivity</h1>
                <p className="body-text">
                    Please wait a moment while Windows checks to see if this computer is already connected to the internet.
                </p>
            </div>

            <div id="connecting">
                <img src={connecting} alt="" className="connecting-img"/>
            </div>
        </div>
    );
}
 
export default InternetConnectivity;