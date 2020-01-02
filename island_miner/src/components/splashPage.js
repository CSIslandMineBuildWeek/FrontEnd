import React from "react";
import Map from "./Map";
import Right from "./Right";
import Bottom from "./Bottom";
import MoveTo from "./MoveTo";
import MineButton from "./MineButton";

import "./CSS/Main.css";
import "./CSS/SplashPage.css";


import skull from "../img/skull.png"
import map from "../img/map.png"
// import about from '../img/about.jpg'
import logOutImg from '../img/logout.png'
export default function SplashPage() {
  const logout = ev => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  return (
    <div>
      {/* top title nav */}
      <div className="mainNav">
        <img className= "mainNavElement" src={skull} alt="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjfnPvH7IDmAhUDv54KHdnMBNoQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F112412%2Fdocument_file_internet_raw_simple_web_document_web_file_worldwide_document_worldwide_web_icon&psig=AOvVaw2XEBP7PNOBXngdPMnHMGk9&ust=1574616191674605" height="42" width="50"/>
        <h1 className= "mainNavElement" >LAMBDA TREASURE HUNT</h1>
        <button className= "mainNavElementButton" ><img src={map} width="37" height="37"/></button>
        {/* <button className= "mainNavElementButton" ><img src={about} width="37" height="37"/></button> */}
        <button className= "mainNavElementButton" onClick={logout}><img src={logOutImg} width="37" height="37"/></button>
      </div>
      <div className="main-section">
        <Map />
        <Right />
      </div>
      <Bottom />
      <MineButton />
      <MoveTo />
    </div>
  );
}
