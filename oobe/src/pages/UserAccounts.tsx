import { FC } from "react";

import "../styles/UserAccounts.css"

const UserAccounts: FC = () => {
    return (
        <div id="user-accounts" className="page-body">
            <div className="main-text">
                <h1 className="title-text">Who will use this computer?</h1>
                <p className="body-text">
                    Type the name of each person who will use this computer. 
                    Windows will create a separate user account for each person so you can personalize the way you want Windows to organize and display information, 
                    protect your files and computer settings, and customize the desktop.
                </p>
            </div>

            <div id="username-inputs">
                <div id="user-input1" className="user-input">
                    <p className="body-text">Your name: </p>
                    <div className="username-text-input">
                        <input type="text" />
                    </div>
                </div>
                <div id="user-input2" className="user-input">
                    <p className="body-text">2nd User: </p>
                    <div className="username-text-input">
                        <input type="text"  />
                    </div>
                </div>
                <div id="user-input3" className="user-input">
                    <p className="body-text">3rd User: </p>
                    <div className="username-text-input">
                        <input type="text" />
                    </div>
                </div>
                <div id="user-input4" className="user-input">
                    <p className="body-text">4th User: </p>
                    <div className="username-text-input">
                        <input type="text" />
                    </div>
                </div>
                <div id="user-input5" className="user-input">
                    <p className="body-text">5th User: </p>
                    <div className="username-text-input">
                        <input type="text"  />
                    </div>
                </div>
            </div>

            <div className="sub-text">
                <p className="body-text">
                    These names will appear on the Welcome screen in alphabetical order.
                    When you start Windows, simply click your name on the Welcome screen to begin.
                    If you want to set passwords and limit permissions for each user, or add more user accounts after you finish setting uo Windows.
                    Just click <strong>Control Panel</strong> on the <strong>Start</strong> menu, and then click <strong>User Accounts</strong>.
                </p>
            </div>
        </div>
    );
}
 
export default UserAccounts;