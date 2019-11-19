import React from "react";
import "./App.css";

import MainSplash from "./components/splashPage.js";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <div>{localStorage.getItem("token") ? <MainSplash /> : <Login />}</div>
    </div>
  );
}

export default App;
