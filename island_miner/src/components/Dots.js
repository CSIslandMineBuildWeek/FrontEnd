import React, { useState, useEffect } from "react";
import { Circle } from "react-konva";

export default function Dots({
  width,
  height,
  xCoordin,
  yCoordin,
  roomId,
  currentRoom
}) {
  const [color, setColor] = useState("#515959");
  const [radius, setRadius] = useState(3);

  const uniqueRooms = ["0", "1", "22", "55", "461", "467", "495", "499"];

  useEffect(() => {
    if (currentRoom) {
      setColor("red");
      setRadius(5);
    } else if (uniqueRooms.includes(roomId)) {
      setColor("orange");
      setRadius(3);
    } else {
      setColor("#515959");
      setRadius(3);
    }
  }, [roomId, uniqueRooms, currentRoom]);

  const x = (xCoordin * (width * 1.5)) / 74;
  const y = (yCoordin * (height * 1.25)) / 75;
  const offsetX = xCoordin + (width * 2) / 2 - 74;
  const offsetY = yCoordin + (height * 1.5) / 2 - 75;
  return (
    <>
      <Circle
        className="roomDot"
        x={x}
        y={y}
        offsetX={offsetX}
        offsetY={offsetY}
        radius={radius}
        fill={color}
        drawBorder={true}
      />
    </>
  );
}
