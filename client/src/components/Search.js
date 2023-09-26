import React, { useContext } from "react";
import { DarkModeContext } from "../context/Modes";


// Search Chat
export default function SearchChat({ placeholder }){
    const { mode, setMode } = useContext(DarkModeContext);
    const darkMode = mode ? 'text-white bg-[#a6b0cf11] hover:bg-[#a6b0cf22]' : 'text-black bg-[#a6b0cf22]';

    return (
      <div className={`h-[44px] flex-shrink-0 px-4 my-4 rounded-sm flex items-center gap-4 ${darkMode}`}>
        <i className="fa-solid fa-magnifying-glass opacity-70"></i>
        <input 
          placeholder={placeholder}
          className={`flex-grow h-full bg-transparent`}
        />
      </div>
    );
  }