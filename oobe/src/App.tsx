import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from "./components/Footer";
import Header from "./components/Header";
import ConnectToInternet from './pages/ConnectToInternet';
import InternetConnectivity from './pages/InternetConnectivity';

import MainPage from "./pages/MainPage";
import Updates from './pages/Updates';

function App() {
  return (
    <div className="oobe window">
      <div className="title-bar">
        <div className="title-bar-text">Windows XP OOBE Recreation</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>

      <div className="main">
        <Header/>
          <div className="main-content">
            <Router>
                <Route path="/" exact component={MainPage}/>
                <Route path="/updates" component={Updates}/>
                <Route path="/connectivity" component={InternetConnectivity}/>
                <Route path="/connectToInternet" component={ConnectToInternet}/>
            </Router>
          </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
