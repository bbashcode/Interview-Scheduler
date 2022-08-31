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
    mode = history.find((mode) => {});
  };

  return { mode, transition, back };
};