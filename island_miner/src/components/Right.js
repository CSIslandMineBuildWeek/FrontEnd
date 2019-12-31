import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import { Context } from "../context";

import Cooldown from "./Cooldown";
import './CSS/Right.css'
export default function Right() {
  const { state, dispatch } = useContext(Context);
  const [players, setPlayers] = useState("There are no players in this room");
  useEffect(() => {
    if (state.players.length > 0) {
      state.players.forEach((player, idx) => {
        if (idx === 0) setPlayers(player);
        else setPlayers(c => `${c}, ${player}`);
      });
    } else {
      setPlayers("There are no players in this room");
    }
  }, [state.players]);


  const status = async () => {
    const { data } = await axios.post(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/status/", {},
      {
        headers: {
          Authorization: `Token ${state.token}`
        }
      }
    );
    dispatch({ type: "STATUS", payload: data });
  };



  const pickup = async itemToPick => {
    const { data } = await axios.post(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/take/",
      {
        name: itemToPick
      },
      {
        headers: {
          Authorization: `Token ${state.token}`
        }
      }
    );
    // console.log(data);
    dispatch({ type: "PICKUP", payload: data });
  };

  const sell = async () => {
    const { data } = await axios.post(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/",
      {
        name: "tiny treasure",
        confirm: "yes"
      },
      {
        headers: {
          Authorization: `Token ${state.token}`
        }
      }
    );
    dispatch({ type: "SELL", payload: data });
  };

  const wish = async () => {
    const { data } = await axios.post(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/examine/",
      {
        name: "well"
      },
      {
        headers: {
          Authorization: `Token ${state.token}`
        }
      }
    );
    dispatch({ type: "WELL", payload: data });
  };

  const pray = async () => {
    const { data } = await axios.post(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/pray/",
      {},
      {
        headers:{
          Authorization: `Token ${state.token}`
        }
      }
    );
    dispatch({ type: "PRAY", payload: data });
  }

  const linhShrine = state.coordinates === "(55,74)"
  const hollowayShrine = state.coordinates === "(61,55)"
  return (
    <div>
      <div className="top">

        <div>
          <h4>ROOM {state.room_id}</h4>
          <p>{state.coordinates}</p>
          {linhShrine? <button onClick={() => pray()}> Pray</button>: null}
          {hollowayShrine ? <button onClick={() => pray()}> Pray</button>: null}
        </div>


          <div className="descDiv">
            <h4>{state.title}</h4>
            {state.title === "Shop" && (
              <button onClick={() => sell()}>Sell Item</button>
              )}
            {state.title === "Wishing Well" && (
              <button onClick={() => wish()}>Examine Well</button>
              )}
            <p className="description">{state.description}</p>
          </div>

        {/* <div className="top_bottomPortion"> */}
            <div className="item_div">
              <h4>Items</h4>
              {state.items.length > 0 ? (
                state.items.map((item, idx) => (
                  <p key={idx}>
                    {item}
                    <button onClick={() => pickup(item)}>Pick up </button>
                  </p>
                ))
                ) : (
                  <p>There are no items in this room</p>
                  )}
            </div>
            <div>
              <h4>Players</h4>
              <div className="players">
                {players}
              </div>
            </div>
        {/* </div> */}
      </div>

      {/* <h3>Player Info</h3> */}
      <div className="bottom">
          <button className="statusButton"onClick={() => status()}>GET YO STATUS</button>
        <div>
          <p>Name: {state.name}</p>
          <p>Gold: {state.gold}</p>
        </div>
        <div>
          <p>Encumbrance: {state.encumbrance}</p>
          <p>Strength: {state.strength}</p>
          <p>Speed: {state.speed}</p>
        </div>
        <div>
          <h4>Inventory</h4>
          {/* list of players inventory */}
           {state.inventory.length > 0 ? (
            state.inventory.map((item) => <p>{item}</p>)
          ) : (
            <p>You have nothing</p>
          )}
        </div>
      </div>
      <p>Cooldown</p>
      <Cooldown />
    </div>
  );
}
