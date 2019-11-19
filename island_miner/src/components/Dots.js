import React from 'react'

import {  Circle, Rect } from 'react-konva';

import  newMap from '../GameMap.js'
// import './Dots.css'

export default function Dots(props) {
    let xCoordin = props['room'].roomInfo.coordinates[0]
    let yCoordin = props['room'].roomInfo.coordinates[1]
    // console.log(props)
    let xValues = []
    let yValues = []

    for(let i=50;i<74;i++){
        xValues.push(i)
    }

    for(let i=46;i<75;i++) {
        yValues.push(i)
    }

    let newX = xCoordin + (xValues.indexOf(xCoordin) )
    let newY = yCoordin + (yValues.indexOf(yCoordin) )

    // xCoordin = xCoordin
    // yCoordin + index * 2
    return (
        <>
            <Circle
                className="roomDot"
                x={newX * 1000 / 73}
                y={newY * 1000 / 74}
  
                offsetX={xCoordin + 400}
                offsetY={yCoordin + 400}
                radius={4}
                fill={'black'}
                drawBorder = {true}
            />
        </>
        )
}