import React, { useContext, useEffect, useState } from "react";

import { Context } from "../context";

export default function Cooldown() {
  const [progress, setProgress] = useState(0);
  const [max, setMax] = useState(1000);
  const { state } = useContext(Context);
  const { cooldown } = state;
  useEffect(() => {
    console.log(cooldown);
    let cdMs = state.cooldown * 1000;
    setProgress(cdMs);
    setMax(cdMs);
    const interval = setInterval(() => {
      if (cdMs <= 0) clearInterval(interval);
      cdMs -= 1000;
      setProgress(cdMs);
    }, 1000);
    return () => clearInterval(interval);
  }, [cooldown]);

  return <progress value={progress} max={max} />;
}
