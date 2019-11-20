import React, { useContext, useState, useEffect } from "react";

import { Context } from "../context";

export default function Messages() {
  const { state } = useContext(Context);
  const [messages, setMessages] = useState("No messages");
  useEffect(() => {
    if (state.messages.length > 0) {
      state.messages.forEach((player, idx) => {
        if (idx === 0) setMessages(player);
        else setMessages(c => `${c}, ${player}`);
      });
    } else {
      setMessages("No messages");
    }
  }, [state.messages]);
  return (
    <div>
      <p>{messages}</p>
    </div>
  );
}
