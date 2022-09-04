import { useState } from "react";


export default function useVisualMode(initial) {
  
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    replace
      ? setHistory((prev) => [...prev.slice(0, -1), newMode])
      : setHistory((prev) => [...prev, newMode]);

    setMode(newMode);
  }

  function back() {
    if (history.length === 1) {
      return;
    }

    const newHist = history.slice(0, -1);
    setHistory(newHist);
    setMode(newHist[newHist.length - 1]);
  }

  return { mode, transition, back };
};