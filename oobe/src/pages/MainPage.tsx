import { FC } from "react";
import "../styles/MainPage.css"

const MainPage: FC = () => {
    return (
        <div id="main-page" className="page-body">
            <div id="main-text">
                <h1 className="title-text">Welcome To Microsoft Windows</h1>
                <p className="body-text">Thank you for purchasing Microsoft Windows XP.</p>
                <p className="body-text">Let's spend a few minutes setting up your computer.</p>
            </div>

            <p className="body-text" id="bottom-text">To continue, click Next</p>
        </div>
    );
}
 
export default MainPage;