import React from 'react';
import logo from './logo.svg';
import './App.css';

const day = '18.08.2020'
const today = `Today is ${day}`
const tuesday = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'green',
          fontSize: 42
        }}> Hello World!
        </p>
        <p>
        {today}
        </p>
        <p>{18 + 8 + 2020}
        </p>
        <p>
        {tuesday ? `Yes, today is Tuesday` : `No, today isn't Tuesday`}
        {undefined}
        {null}
        {true}
        {false}
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
