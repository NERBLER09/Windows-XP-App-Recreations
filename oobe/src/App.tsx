import { BrowserRouter as Router, Route } from 'react-router-dom';
import { closeWindow, maximizeWindow, minimizeWindow } from "./ts/windowControls"
import { useEffect, useState } from 'react';

import Footer from "./components/Footer";
import Header from "./components/Header";
import ConnectToInternet from './pages/ConnectToInternet';
import Finish from './pages/Finish';
import InternetConnectivity from './pages/InternetConnectivity';

import MainPage from "./pages/MainPage";
import Updates from './pages/Updates';
import UserAccounts from './pages/UserAccounts';
import Intro from './pages/Intro';

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [hasIntroRun, setHasIntroRun] = useState(false)

  useEffect(() => {
    if(window.location.pathname === "/" && hasIntroRun === false) {
      setTimeout(() => {
        setShowIntro(false) 
      }, 4240);
      setHasIntroRun(true)
    }
    else {
      setShowIntro(false)
    }
  }, [])

  return (
    <div className="oobe window">
      <div className="title-bar" id="window-title-bar">
        <div className="title-bar-text">Windows XP OOBE Recreation</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={minimizeWindow} title="Minimize"></button>
          <button aria-label="Maximize" onClick={maximizeWindow} title="Maximize" id="maximizeButton"></button>
          <button aria-label="Close" onClick={closeWindow} title="Close"></button>
        </div>
      </div>
      
      {showIntro === true &&
      <div id="intro-animation">
        <Intro/>
      </div>
      }

      {showIntro === false && 
        <div className="main">
            <div className="main-content">
              <Router>
                <Header/>
                <div className="main-content">
                <Route path="/" exact component={MainPage}/>
                <Route path="/updates" component={Updates}/>
                <Route path="/connectivity" component={InternetConnectivity}/>
                <Route path="/connectToInternet" component={ConnectToInternet}/>
                <Route path="/userAccounts" component={UserAccounts}/>
                <Route path="/finish" component={Finish}/>
                </div>
                <Footer/>
              </Router>
            </div>
        </div>  
      }
    </div>
  );
}

export default App;
