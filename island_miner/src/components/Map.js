import React, { useContext } from "react";
import { Stage, Layer } from "react-konva";

import { Context } from "../context";

import newMap from "../GameMap.js";
import Dots from "./Dots.js";
import Exits from "./Exits";

export default function Map() {
  const { state } = useContext(Context);

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
              currentRoom={state.room_id === Number(room)}
            />
          );
        })}
      </Layer>
    </Stage>
  );
}
