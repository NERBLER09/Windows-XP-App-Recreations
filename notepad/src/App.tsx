// import favicon from ""

function App() {
  return (
    <div className="notepad window">
      <div className="title-bar" id="window-title-bar">
        <img src="favicon.ico" alt="" className="title-bar-favicon"/>
        <div className="title-bar-text">Windows XP Notepad Recreation</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" title="Minimize"></button>
          <button aria-label="Maximize" title="Maximize" id="maximizeButton"></button>
          <button aria-label="Close" title="Close"></button>
        </div>
      </div>
    </div>
  );
}

export default App;
