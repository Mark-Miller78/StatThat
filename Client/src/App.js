import logo from './logo.svg';
import {useEffect} from 'react';
import { StoreProvider } from './context/globalState';
import './App.css';

function App() {

  useEffect(() =>{
    fetch('/api/teams')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
    </StoreProvider>
  );
}

export default App;
