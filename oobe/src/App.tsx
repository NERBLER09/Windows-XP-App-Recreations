import Footer from "./components/Footer";
import Header from "./components/Header";

import back from "./assets/wpaback.jpg"
import MainPage from "./pages/MainPage";

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
            <MainPage/>
          </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
