import React from "react";
import Map from "./Map";
import Right from "./Right";
import Bottom from "./Bottom";

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
      <Bottom />
    </div>
  );
}
