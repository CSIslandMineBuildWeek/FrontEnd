import React, { useState, useContext } from "react";
import axios from "axios";

import { Context } from "../context";
import work from "../utils/mine";

export default function MineButton() {
  const [mining, setMining] = useState(false);
  const { state, dispatch } = useContext(Context);
  const timeout = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const mine = async e => {
    e.preventDefault();
    setMining(true);
    try {
      const { data } = await axios.get(
        "https://lambda-treasure-hunt.herokuapp.com/api/bc/last_proof/",
        {
          headers: {
            Authorization: `Token ${state.token}`
          }
        }
      );
      const { proof, difficulty, cooldown } = data;
      const newProof = work(proof, difficulty);
      console.log(newProof);
      await timeout(Number(cooldown) * 1000);
      const res = await axios.post(
        "https://lambda-treasure-hunt.herokuapp.com/api/bc/mine/",
        {
          proof: newProof
        },
        {
          headers: {
            Authorization: `Token ${state.token}`
          }
        }
      );
      dispatch({ type: "FINISH_MINING", payload: res.data });
      setMining(false);
    } catch (err) {
      const { cooldown, errors } = err.response.data;
      dispatch({
        type: "FINISH_MINING",
        payload: { cooldown, messages: errors }
      });
      setMining(false);
    }
  };
  return (
    <div>
      <button onClick={mine}>
        {mining ? "Mining..." : "Mine for Lambda Coin"}
      </button>
    </div>
  );
}
