import crypto from "crypto-js";
import moment from "moment";

export default function work(lastProof, difficulty) {
  const start = moment();
  console.log("Starting work!");
  let proof = 0;
  let thisHash = crypto.SHA256(encodeURI(lastProof + proof.toString()));
  thisHash = thisHash.toString(crypto.enc.Base16);
  while (thisHash.slice(0, difficulty) !== "0".repeat(difficulty)) {
    proof++;
    thisHash = crypto.SHA256(encodeURI(lastProof + proof.toString()));
    thisHash = thisHash.toString(crypto.enc.Base16);
  }
  const finish = moment();
  const difference = finish.diff(start, "s");
  console.log(`Proof found in ${difference} seconds`);
  return proof;
}
