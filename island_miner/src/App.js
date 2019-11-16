import React, { useState, Route } from 'react';
import './App.css';

import MainSplash from './components/splashPage.js'


function App() {

  const[token, setToken] = useState("")

  return (
    <div className="App">

      <div className="navBar">
        <section className="logo">#</section>
        <section className="title">Lambda Treasure Hunt - Nav Bar Will go here</section>
        <section className="navbar-links">#</section>
      </div>
      <div className="body-container">
        <section className="body-container-map"></section>
        <section className="body-container-room-info"></section>
      </div>
      <div className="footer">Explore</div>

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
