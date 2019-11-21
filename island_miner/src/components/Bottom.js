import React, { useContext }from "react";
import styled from "styled-components";

import Directions from "./Directions";
import Messages from "./Messages";

import MoveTo from '../utils/move.js'

import { Context } from "../context";

export default function Bottom() {
  const { state } = useContext(Context)
  // console.log(state.token)
  return (
    <Footer>
      <div>
        <p>Explore</p>
      </div>
      <Messages />
      <SideBar>
        <Directions />
        {/* <p>Shop</p> */}
        {/* <button onClick={() => <MoveTo />}>Shop</button> */}
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
