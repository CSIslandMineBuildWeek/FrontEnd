import React, { useContext, useState, useEffect } from "react";

import { Context } from "../context";

import Cooldown from "./Cooldown";

export default function Right() {
  const { state } = useContext(Context);
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
            state.items.map((item, idx) => <p key={idx}>{item}</p>)
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
          <p>player name</p>
          <p>current money</p>
        </div>
        <div>
          <p>encumbrance:</p>
          <p>strength:</p>
          <p>speed:</p>
        </div>
        <div>
          <h4>Inventory</h4>
          {/* list of players inventory */}
        </div>
      </div>
      <Cooldown />
    </div>
  );
}
