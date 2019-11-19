import axios from "axios";
const search = require("./graph");

const timeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function moveTo(destId, token) {
  let current = await getCurrentLocation();
  cooldown = current.cooldown;
  await timeout(cooldown);
  const path = search(current.room_id, destId).filter(Boolean);
  await path.reduce(async (prom, cur) => {
    await prom;
    const { data } = await axios.post(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/move/",
      {
        direction: cur.direction,
        next_room_id: cur.next_room_id.toString()
      },
      {
        headers: {
          Authorization: `Token ${token}`
        }
      }
    );
    cooldown = Number(data.cooldown) * 1000;
    data.items.forEach(item =>
      console.log(`Room ID ${data.room_id} has item: ${item}`)
    );
    // console.log(`Moved to room id ${data.room_id}: ${data.title}`);
    return timeout(cooldown);
  }, Promise.resolve());
  console.log("Made it");
}

async function getCurrentLocation(token) {
  try {
    const { data } = await axios(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/init/",
      {
        headers: {
          Authorization: `Token ${token}`
        }
      }
    );
    cooldown = Number(data.cooldown) * 1000;
    await timeout(cooldown);
    return data;
  } catch (err) {
    console.log(err.response.data);
  }
}

export default moveTo;
