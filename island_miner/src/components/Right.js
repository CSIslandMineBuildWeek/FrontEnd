import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

import { Context } from "../context";

import Cooldown from "./Cooldown";



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

  const pickup = async itemToPick => {
    const { data } = await axios.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/take/",
      {
        "name": itemToPick
      },
      {
        headers: {
          Authorization: `Token ${state.token}`
        }
      }
    );
    console.log(data)
    dispatch({ type: "PICKUP", payload: data });
  }
  console.log(state)
  return (
    <div>
      <div className="top">
        <div>
          <h4>ROOM {state.room_id}</h4>
          <p>{state.coordinates}</p>
        </div>
        <div>
          <h4>{state.title}</h4>
          <p>{state.description}</p>

          <h4>Items</h4>
          {state.items.length > 0 ? (
            state.items.map((item, idx) => <p key={idx}>{item}<button onClick={() => pickup(item)}>Pick up </button></p>)
          ) : (
            <p>There are no items in this room</p>
          )}

          <h4>Players</h4>
          {players}
        </div>
      </div>

      {/* <h3>Player Info</h3> */}
      <div className="bottom">
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
      <Cooldown />
    </div>
  );
}
