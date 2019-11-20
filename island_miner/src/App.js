import React, { useState, Route } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './App.css';

import MainSplash from './components/splashPage.js'


function App() {

  const[token, setToken] = useState("")

  return (
    <div className="App">
      <Navbar />
      <div className="body-container">
        <section className="body-container-map"></section>
        <section className="body-container-room-info"></section>
      </div>
      <Footer />

      {/*
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
      */
     
     }
    </div>
  );
}

export default App;
