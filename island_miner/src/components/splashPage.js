import React, { useState, useEffect } from 'react'
import Konva from 'konva'
// import { Stage, Layer,  Text } from 'react-konva'
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';

import  newMap from '../GameMap.js'
import Dots from './Dots.js'
import '../App.css'
// let roomData = require('../roomData.json')

export default function SplashPage() {


    const logout = (ev) => {
        localStorage.removeItem('token');
        window.location = ('/');
    }


    const[rooms, setRooms] = useState([])
    const[player, setPlayer] = useState({})
    const[dots, setDots] = useState([])

    useEffect(() => {
        fetchRooms();
        // playerData();
    }, [])

    useEffect(() => {
        drawGrid()
        highest_values()
    }, [rooms,
        //  player
        ])

    // function to get rooms
    const fetchRooms = () => {
        setRooms(newMap)
    }


    const drawGrid = () => {
        const dotsArr = []
        const num = Math.sqrt(rooms.length)
        const space = 500 / num;
        let roomIndex = 0
        setDots(dotsArr)
    }

    //this function is purely to find the lowest and highest X and Y values
    const highest_values = () => {
        let highestX = 0
        let lowestX = 1000
        let highestY = 0
        let lowestY = 1000
        {Object.keys(newMap).forEach((room)=> {
            // console.log(newMap[room].roomInfo.coordinates)
            if(newMap[room].roomInfo.coordinates[0] > highestX){
                highestX = newMap[room].roomInfo.coordinates[0]
            }
            if(newMap[room].roomInfo.coordinates[1] > highestY) {
                highestY = newMap[room].roomInfo.coordinates[1]
            }

            if(newMap[room].roomInfo.coordinates[0] < lowestX) {
                lowestX = newMap[room].roomInfo.coordinates[0]
            }

            if(newMap[room].roomInfo.coordinates[1] < lowestY) {
                lowestY = newMap[room].roomInfo.coordinates[1]
            }
        })}
        // console.log(lowestX, highestX, lowestY, highestY)
        //              50       73       46       74
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
                    <Stage width={1000} height={1000}>
                        <Layer>
                            {Object.keys(newMap).map((room,index)=>
                                <Dots key={room} room={newMap[room]} index={index}/>
                             )}
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
    )
}