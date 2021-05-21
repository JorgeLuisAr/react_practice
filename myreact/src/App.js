import logo from './logo.svg';
import './App.css';
import First_Component from './First_Component';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         My first react
      <div> <First_Component />
      </div>  
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
