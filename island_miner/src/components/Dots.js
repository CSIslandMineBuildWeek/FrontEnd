import React from 'react'

import {  Circle, Rect } from 'react-konva';

import  newMap from '../GameMap.js'
// import './Dots.css'

export default function Dots(props) {
    let xCoordin = props['room'].roomInfo.coordinates[0]
    let yCoordin = props['room'].roomInfo.coordinates[1]

    // xCoordin = xCoordin 
    // yCoordin + index * 2
    return (
        <>
            <Circle
                className="roomDot"
                x={xCoordin * 1000 / 73}
                y={yCoordin * 1000 / 74}
                offsetX={xCoordin +100 }
                offsetY={yCoordin }
                radius={4}
                fill={'black'}
                drawBorder = {true}
            />
        </>
        )
}