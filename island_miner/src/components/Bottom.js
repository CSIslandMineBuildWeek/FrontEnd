import React from "react";
import styled from "styled-components";

import Directions from "./Directions";
import Messages from "./Messages";

export default function Bottom() {
  return (
    <Footer>
      <div>
        <p>Explore</p>
      </div>
      <Messages />
      <SideBar>
        <Directions />
        <p>Shop</p>
        <p>Money</p>
        <p>Sell</p>
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
