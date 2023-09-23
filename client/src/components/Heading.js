import React, { useContext } from "react";
import { DarkModeContext } from "../context/Modes";



// Heading
export default function Heading({ text }){
    const { mode, setMode } = useContext(DarkModeContext);
    const darkMode = mode ? 'text-white' : 'text-black';
    return (
      <h1 className={`text-xl font-semibold ${darkMode}`}>{text}</h1>
    );
  }