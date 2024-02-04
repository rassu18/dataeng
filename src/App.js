import './App.css';
import hero from './images/hero.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hero} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is a Test Digi site
        </a>
      </header>
    </div>
  );
}

export default App;
