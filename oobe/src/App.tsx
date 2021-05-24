import Header from "./components/Header";

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

      <div className="main-content">
        <Header/>
      </div>
    </div>
  );
}

export default App;
