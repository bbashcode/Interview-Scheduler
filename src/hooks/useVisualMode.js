import React from 'react';
import { useState } from "react";


export default function useVisualMode(initial) {
  
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    setHistory(replace ? [...history] : [mode, ...history]);
    setMode(newMode);
  }

  const back = () => {
    if (history.length < 2) {
      return;
    }
    setHistory(prev => [...prev.slice(0, history.length - 1)]);
  };

  return { mode, transition, back };
};