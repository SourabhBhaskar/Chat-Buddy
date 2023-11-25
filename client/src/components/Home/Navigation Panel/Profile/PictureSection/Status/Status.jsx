import React from "react";
import { useTheme } from "../../../Common/Theme";
import { Icon } from "@iconify/react";


function Status({ status, last_seen }) {
  const { secondaryTxt} = useTheme();
  const isOnline = last_seen === 'online' || last_seen === 'typing...' ? true : false;

  return (
      <div className={`w-full h-auto flex justify-center flex-shrink-0 flex-col items-center `}>
        <div className={`w-auto flex items-center gap-1 cursor-pointer text-[1rem] ${secondaryTxt}`}>
          <span className={`w-[11px] h-[10px] mt-[1px] flex justify-center items-center ${isOnline ? 'text-green-500' : 'text-red-500'}`}><Icon icon="fontisto:radio-btn-active"/></span>
          <p>{status}</p>
        </div>
      </div>
    );
}

export default Status;



