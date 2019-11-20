import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import { Context } from "../context";
import newMap from "../GameMap.js";

export default function Directions() {
  const { state, dispatch } = useContext(Context);
  const move = async event => {
    const { roomExits } = newMap[state.room_id];
    const { direction, next_room_id } = roomExits.find(
      exit => (exit.direction = event.target.innerText.toLowerCase())
    );
    const { data } = await axios.post(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/move/",
      {
        direction
        // next_room_id: next_room_id.toString()
      },
      {
        headers: {
          Authorization: `Token ${state.token}`
        }
      }
    );
    dispatch({ type: "MOVE", payload: data });
  };
  return (
    <DirContainer>
      {state.exits.map(exit => {
        return (
          <p key={exit + Date.now()} onClick={move}>
            {exit.toUpperCase()}
          </p>
        );
      })}
    </DirContainer>
  );
}

const DirContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;

  p {
    cursor: pointer;
  }
`;
