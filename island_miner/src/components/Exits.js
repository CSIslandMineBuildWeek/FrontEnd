import React from "react";
import { Rect } from "react-konva";

export default function Exits({
  xCoordin,
  yCoordin,
  width,
  height,
  roomExits
}) {
  const x = (xCoordin * (width * 1.5)) / 74;
  const y = (yCoordin * (height * 1.25)) / 75;
  const offsetX = xCoordin + (width * 2) / 2 - 74;
  const offsetY = yCoordin + (height * 1.5) / 2 - 75;
  const lineHeight = height / 29;
  const lineWidth = width / 24;
  return (
    <>
      {roomExits.map(({ direction }) => {
        switch (direction) {
          case "n":
            return (
              <Rect
                key={direction}
                x={x - 0.5}
                y={y}
                offsetX={offsetX}
                offsetY={offsetY}
                fill="#515959"
                width={1}
                height={lineHeight}
              />
            );
          case "s":
            return (
              <Rect
                key={direction}
                x={x - 0.5}
                y={y - lineHeight}
                offsetX={offsetX}
                offsetY={offsetY}
                fill="#515959"
                width={1}
                height={lineHeight}
              />
            );
          case "e":
            return (
              <Rect
                key={direction}
                x={x}
                y={y}
                offsetX={offsetX}
                offsetY={offsetY}
                fill="#515959"
                width={lineWidth}
                height={1}
              />
            );
          case "w":
            return (
              <Rect
                key={direction}
                x={x - lineWidth}
                y={y}
                offsetX={offsetX}
                offsetY={offsetY}
                fill="#515959"
                width={lineWidth}
                height={1}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
