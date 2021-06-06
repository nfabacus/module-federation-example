import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>I am a CRA app (from micro front end 3)</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <Box text="This is a box" />
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
