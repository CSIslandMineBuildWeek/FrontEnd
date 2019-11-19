import React from "react";
import { Stage, Layer } from "react-konva";

import newMap from "../GameMap.js";
import Dots from "./Dots.js";
import Exits from "./Exits";
import "../App.css";

export default function SplashPage() {
  const logout = ev => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  const width = 1000;
  const height = 500;

  const xValues = [];
  const yValues = [];
  for (let i = 50; i < 74; i++) {
    xValues.push(i);
  }

  for (let i = 46; i < 75; i++) {
    yValues.push(i);
  }

  return (
    <div>
      {/* top title nav */}
      <div>
        <p>skull</p>
        <h1>LAMBDA TREASURE HUNT</h1>
        <button>Map</button>
        <button>About</button>
        <button onClick={logout}>Log Out</button>
      </div>

      <div>
        {/* main map canvas most likely */}
        <div>
          {/* <h1>main map</h1> */}
          <Stage width={width} height={height}>
            <Layer>
              {Object.keys(newMap).map(room => {
                const [xCoordin, yCoordin] = newMap[room].roomInfo.coordinates;
                let newX = xCoordin + xValues.indexOf(xCoordin);
                let newY = yCoordin + yValues.indexOf(yCoordin);
                const { roomExits } = newMap[room];
                return (
                  <Exits
                    key={room}
                    xCoordin={newX}
                    yCoordin={newY}
                    width={width}
                    height={height}
                    roomExits={roomExits}
                  />
                );
              })}
              {Object.keys(newMap).map(room => {
                const [xCoordin, yCoordin] = newMap[room].roomInfo.coordinates;
                let newX = xCoordin + xValues.indexOf(xCoordin);
                let newY = yCoordin + yValues.indexOf(yCoordin);
                return (
                  <Dots
                    key={room}
                    room={newMap[room]}
                    roomId={room}
                    width={width}
                    height={height}
                    xCoordin={newX}
                    yCoordin={newY}
                  />
                );
              })}
            </Layer>
          </Stage>
          <p>CurrentRoom_id</p>
        </div>

        {/* room information */}
        <div>
          <div>
            <h4>Room ID</h4>
            <p>Room Cooord</p>
          </div>
          <div>
            <h4>Room Title</h4>
            <p>Room Desc</p>

            <h4>Items</h4>
            <p>items in room</p>

            <h4>Playesr</h4>
            {/* <p>number of players in room</p> */}
          </div>
        </div>

        {/* <h3>Player Info</h3> */}
        <div>
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
      </div>

      <div>
        <p>Explore</p>
        <p>Nav Info + bonuses</p>
        <p>N</p>
        <p>S</p>
        <p>W</p>
        <p>E</p>
        <p>Shop</p>
        <p>Money</p>
        <p>Sell</p>
      </div>
    </div>
  );
}
