import axios from 'axios';
import moveTo from './move';

function goToShop(){
  let token = localStorage.getItem("token")
  moveTo(1, token)
}

function goToLinhShrine(){
  let token = localStorage.getItem("token")
  moveTo(461, token)
}

export function goToHollowayShrine(){
  let token = localStorage.getItem("token")
  moveTo(22, token)
}

function goToWishingWell(){
  let token = localStorage.getItem("token")
  moveTo(55, token)}

async function getCoinBalance(){
  let token = localStorage.getItem("token")
  try{
    await axios(
      "https://lambda-treasure-hunt.herokuapp.com/api/bc/get_balance/",
      {
        headers:{
          Authorization: `Token ${token}`
        }
      }
    ).then(response => {
      console.log(response.data)
      return response.data
    }).catch(error => {
      console.log(error)
    })
  } catch(err){
    console.log(err.response.data);
  }
}
