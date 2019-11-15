import React from 'react'

export default function SplashPage() {
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