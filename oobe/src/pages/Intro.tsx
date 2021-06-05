import { FC } from "react";

import introAnimation from "../assets/intro.gif"

const Intro: FC= () => {
    return (
        <div id="intro">
            <img src={introAnimation} alt="" id="intro-img"/>
        </div>
    );
}
 
export default Intro;