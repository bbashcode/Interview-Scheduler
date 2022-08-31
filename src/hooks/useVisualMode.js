import React from 'react';
import { useState } from "react";


export default function useVisualMode(initial) {
  
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const transition = (newMode) => { 
    const newM = setMode(newMode);
    history.push(newM);
  };

  const back = () => {
    if (history.length < 2) {
      return;
    }
    history.pop();
    setMode(history[history.length - 1]);
  };

  return { mode, transition, back };
};