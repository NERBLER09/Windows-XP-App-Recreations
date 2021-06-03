import { FC } from "react";

const Finish: FC = () => {
    return (
        <div id="finish" className="page-body">
            <div className="main-text">
                <h1 className="title-text">Thank you!</h1>
                <p className="body-text">
                    Congratulations, you're ready to go! Here's what you just accomplished .
                </p>
                <p className="body-text">
                    Your computer is configured for Internet access.
                </p>

                <p className="body-text">
                    To learn about the new exciting features Windows XP, take the product tour. 
                    You can also find useful in the <strong>Help and Support</strong> Center.
                    These options are located on the <strong>Start</strong> menu.
                </p>
            </div>
        </div>
    );
}
 
export default Finish;