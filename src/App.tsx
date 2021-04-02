import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/get-message?name=Static Web Apps")
    .then(res => res.text())
    .then(data => setMessage(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.crous-creteil.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site du CROUS de Créteil
        </a>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
