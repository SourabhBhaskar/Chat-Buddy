import React from "react";
import { Icon } from "@iconify/react";


// View Photo
function ProfileViewPhoto({ states, setStates}){
    function handleClick(){
      setStates.setView(false);
    }
    return states.view && (
      <div className="border-2 w-screen h-screen fixed left-0 top-0 z-50 flex flex-col justify-center items-center p-10 bg-[#111a]">
        <div className={`w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] relative move-top-to-bottom`}>
          <div onClick={handleClick} className="w-full flex justify-end text-xl py-2"><Icon icon="gridicons:cross" /></div>
          <img src={states.currImg} alt="pic" className="w-full aspect-square"/>
        </div>
      </div>
    )
}

export default ProfileViewPhoto;
  