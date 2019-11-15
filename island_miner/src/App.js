import React, { useState, Route } from 'react';
import './App.css';

import MainSplash from './components/splashPage.js'


function App() {

  const[token, setToken] = useState("")

  return (
    <div className="App">
      <div>
        {localStorage.getItem('token') ? <MainSplash/> :
          <form>
            <input
              type="text"
              name="name"
              value={token}
              onChange={ (event) => {
                setToken(event.target.value)
              }}/>
            <button
              onClick={ () => {
                localStorage.setItem('token', token)
              }}>Login
            </button>
          </form>
        }
      </div>
    </div>
  );
}

export default App;
