import React, { useEffect, useContext } from "react";
import axios from "axios";

import { Context } from "./context";

import "./App.css";

import MainSplash from "./components/splashPage.js";
import Login from "./components/Login";

axios.create({
  baseURL: "https://lambda-treasure-hunt.herokuapp.com/api/adv",
  headers: {
    Authorization: `Token ${localStorage.getItem("token")}`
  }
});

function App() {
  const { dispatch } = useContext(Context);
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch({ type: "SET_TOKEN", payload: token });
    const getData = async () => {
      const { data } = await axios.get(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/init",
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
          }
        }
      );
      dispatch({ type: "INIT", payload: data });
    };
    getData();
  }, [dispatch]);
  return (
    <div className="App">
      <div>{localStorage.getItem("token") ? <MainSplash /> : <Login />}</div>
    </div>
  );
}

export default App;