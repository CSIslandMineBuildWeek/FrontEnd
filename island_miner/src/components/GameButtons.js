import React from 'react';
import { getCoinBalance } from '../utils/playerMovement';


class GameButtons extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      coinBalance: 0
    }
  }

  componentDidMount(){
  }

  render(){
    return(
      <div>
        <h1> Game Buttons</h1>
      </div>
    )
  }
}


export default GameButtons;
