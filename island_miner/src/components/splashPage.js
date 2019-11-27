import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import Map from "./Map";
import Right from "./Right";
import Bottom from "./Bottom";
import MoveTo from "./MoveTo";
import MineButton from "./MineButton";

import "./CSS/Main.css";

export default function SplashPage() {
  const logout = ev => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  return (
    <div>
      {/* top title nav */}
     <Navbar />
      <div className="main-section">
        <Map />
        <Right />
      </div>
      <Bottom />
      <MineButton />
      <MoveTo />
      <Footer />
    </div>
  );
}
