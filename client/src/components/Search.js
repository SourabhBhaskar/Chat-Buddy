import React, {  } from "react";



// Search Chat
export default function SearchChat({ placeholder }){
    return (
      <div className={`h-[44px] flex-shrink-0 px-4 my-4 rounded-sm flex items-center gap-4`}>
        <i className="fa-solid fa-magnifying-glass opacity-70"></i>
        <input 
          placeholder={placeholder}
          className={`flex-grow h-full bg-transparent`}
        />
      </div>
    );
  }