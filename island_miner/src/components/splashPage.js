import React, { useState, useEffect } from 'react'
import Konva from 'konva'
// import { Stage, Layer,  Text } from 'react-konva'
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';

let roomData = require('../roomData.json')

export default function SplashPage() {


    function logout(ev) {
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
    }, [rooms,
        //  player
        ])

    // function to get rooms
    const fetchRooms = () => {
        setRooms(roomData)
    }

    // const playerData = () => {
    //     playerData('player information on state')
    // }

    const drawGrid = () => {
        const dotsArr = []
        const num = Math.sqrt(rooms.length)
        const space = 500 / num;
        let roomIndex = 0

        for(let y =1;y<=num;y++) {
            for(let x=1;x<=num;x++){
                const lat = y * space
                const lon = x * space
                const bool = player.room_id === roomIndex + 1
                const color = bool ? 'red': 'black';
                const size = bool ? 8 : 4
                dotsArr.push(
                    <>
                        <Circle
                            x={lon}
                            y ={lat}
                            radius={size}
                            fill={color}/>
                        {rooms[roomIndex].e_to !== 0 &&
                            <Rect
                                x={lon -1}
                                y ={lat-1}
                                width={space}
                                height={2}
                                fill='black' />}
                        {/* {rooms[roomIndex].e_to !== 0 &&
                            <Rect
                                x={lon -1}
                                y ={lat-1}
                                width={2}
                                height={space}
                                fill='black' />} */}
                    </>
                )
                roomIndex++
            }
        }
        setDots(dotsArr)
    }

    return (
        <div>
            {/* top title nav */}
            <div>
                <p>skull</p>
                <h1>LAMBDA TREASURE HUNT</h1>
                <button>Map</button>
                <button>About</button>
            </div>

            <div>
                {/* main map canvas most likely */}
                <div>
                    {/* <h1>main map</h1> */}
                    <Stage width={800} height={800}>
                        <Layer>
                            {dots}
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