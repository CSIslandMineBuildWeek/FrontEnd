import React, { useState, useContext } from "react";
import axios from "axios";

import { Context } from "../context";

import moveTo from "../utils/graph";

export default function MoveTo() {
  const [input, setInput] = useState("");
  const { state, dispatch } = useContext(Context);
  const handleChange = e => {
    setInput(Number(e.target.value));
  };
  const timeout = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const fly = async e => {
    e.preventDefault();
    if (input > 499 || input < 0) {
      alert("Need a valid room number");
      return;
    }
    let directions = moveTo(state.room_id, input).filter(Boolean);
    while (directions.length > 0) {
      const [nextRoom] = directions;
      const { direction, next_room_id } = nextRoom;
      const { data } = await axios.post(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/fly/",
        {
          direction,
          next_room_id: next_room_id.toString()
        },
        {
          headers: {
            Authorization: `Token ${state.token}`
          }
        }
      );
      const cooldown = data.cooldown * 1000;
      dispatch({ type: "MOVE", payload: data });
      await timeout(cooldown);
      directions = directions.filter(dir => dir !== nextRoom);
    }
    return;
  };

  const move = async e => {
    e.preventDefault();
    if (input > 499 || input < 0) {
      alert("Need a valid room number");
      return;
    }
    let directions = moveTo(state.room_id, input).filter(Boolean);
    while (directions.length > 0) {
      const [nextRoom] = directions;
      const { direction, next_room_id } = nextRoom;
      const { data } = await axios.post(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/move/",
        {
          direction,
          next_room_id: next_room_id.toString()
        },
        {
          headers: {
            Authorization: `Token ${state.token}`
          }
        }
      );
      const cooldown = data.cooldown * 1000;
      dispatch({ type: "MOVE", payload: data });
      await timeout(cooldown);
      directions = directions.filter(dir => dir !== nextRoom);
    }
    return;
  };
  return (
    <>
      <input type="number" value={input} onChange={handleChange} />
      <button onClick={move}>Move to Room</button>
      <button onClick={fly}>Fly to Room </button>
      <div>
        <p>1 - Shop</p>
        <p>55 - Wishing Well</p>
        <p>467 - Pirate Ry (To get name)</p>
      </div>
    </>
  );
}
