import React, { useContext }from "react";
import styled from "styled-components";
import axios from "axios";

import Directions from "./Directions";
import Messages from "./Messages";

import moveTo from "../utils/graph";

import { Context } from "../context";

export default function Bottom() {
  const { state, dispatch } = useContext(Context)
  // console.log(state.token)
  const timeout = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  //auto nav to shop

  const moveToShop = async e => {
    e.preventDefault();
    let directions = moveTo(state.room_id, 1).filter(Boolean);
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
  }

  const moveToRy = async e => {
    e.preventDefault();
    let directions = moveTo(state.room_id, 467).filter(Boolean);
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
  }



  const moveToWW = async e => {
    e.preventDefault();
    let directions = moveTo(state.room_id, 55).filter(Boolean);
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
  }
  return (
    <Footer>
      <div>
        <p>Explore</p>
      </div>
      <Messages />
      <SideBar>
        <Directions />
        <button onClick={moveToShop}>Go to Shop</button>
        {/* <button onClick={() => <MoveTo />}>Shop</button> */}
        <button onClick={moveToRy}>Go to Pirate Rye</button>
        <button onClick={moveToWW}>Go to Wishing Well</button>

        {/* <p>Money</p> */}
        {/* <p>Sell</p> */}
      </SideBar>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SideBar = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
`;
