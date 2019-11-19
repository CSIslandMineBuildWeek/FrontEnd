import React from "react";

import Map from "./Map";
import Right from "./Right";

import "./CSS/Main.css";

export default function SplashPage() {
  const logout = ev => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  return (
    <div>
      {/* top title nav */}
      <div>
        <p>skull</p>
        <h1>LAMBDA TREASURE HUNT</h1>
        <button>Map</button>
        <button>About</button>
        <button onClick={logout}>Log Out</button>
      </div>
      <div className="main-section">
        <Map />
        <Right />
      </div>

      <div>
        <p>Explore</p>
        <p>Nav Info + bonuses</p>
        <p>N</p>
        <p>S</p>
        <p>W</p>
        <p>E</p>
        <p>Shop</p>
        <p>Money</p>
        <p>Sell</p>
      </div>
    </div>
  );
}
