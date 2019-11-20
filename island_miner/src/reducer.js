import CPU from "./utils/cpu";

export const initialState = {
  token: "",
  room_id: null,
  cooldown: 0,
  coordinates: "",
  description: "",
  elevation: 0,
  errors: [],
  exits: [],
  items: [],
  messages: [],
  players: [],
  terrain: "",
  title: ""
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_TOKEN":
      return { ...state, token: payload };
    case "INIT":
      return { ...state, ...payload };
    case "MOVE":
      return { ...state, ...payload };
    case "PICKUP":
      return { ...state, ...payload };
    case "SELL":
      return { ...state, ...payload };
    case "WELL":
      const cpu = new CPU();
      cpu.load(payload.description);
      cpu.run();
      const message = cpu.getMessage();
      console.log(message);
      return { ...state, cooldown: payload.cooldown, messages: [message] };
    default:
      return state;
  }
};
