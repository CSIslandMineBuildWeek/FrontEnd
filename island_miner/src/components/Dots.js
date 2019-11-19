import React, { useState, useEffect } from "react";

import { Circle, Rect } from "react-konva";

export default function Dots({
  room,
  width,
  height,
  xCoordin,
  yCoordin,
  roomId
}) {
  const x = (xCoordin * (width * 1.5)) / 74;
  const y = (yCoordin * (height * 1.25)) / 75;
  const offsetX = xCoordin + (width * 2) / 2 - 74;
  const offsetY = yCoordin + (height * 1.5) / 2 - 75;
  const [color, setColor] = useState("#515959");
  const uniqueRooms = ["0", "1", "22", "55", "461", "467", "495", "499"];
  useEffect(() => {
    if (uniqueRooms.includes(roomId)) {
      setColor("orange");
    }
  }, [roomId, uniqueRooms]);
  return (
    <>
      <Circle
        className="roomDot"
        x={x}
        y={y}
        zIndex={100}
        offsetX={offsetX}
        offsetY={offsetY}
        radius={3}
        fill={color}
        drawBorder={true}
      />
    </>
  );
}
